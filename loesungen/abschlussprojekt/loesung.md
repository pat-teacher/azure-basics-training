<sub>PAT Cloud Solutions · Einführung in Cloud Computing mit Microsoft Azure · Tag 5</sub>

# Lösung Abschlussprojekt: Webserver der «Velo Zürich AG»

Musterlösung für die Muss-Anforderungen M1–M8, Team mit den Kürzeln `mm` und `ab`, Bereitstellung (Deployment) im Abonnement (Subscription) von `mm`, Region `switzerlandnorth`.

Im Ordner `projekt` liegen drei Dateien: `main.bicep`, `webserver.bicep` und `cloud-init.yaml`. Fertige Dateien zum Bereitstellen: [projekt/main.bicep](projekt/main.bicep), [projekt/webserver.bicep](projekt/webserver.bicep), [projekt/cloud-init.yaml](projekt/cloud-init.yaml). Vor dem Bereitstellen in `cloud-init.yaml` die Kürzel des Teams eintragen.

## main.bicep
```bicep
targetScope = 'subscription'

param location string = deployment().location
param kuerzel string
param schulIp string
param adminPublicKey string

resource rg 'Microsoft.Resources/resourceGroups@2022-09-01' = {
  name: 'rg-projekt-${kuerzel}'
  location: location
  tags: {
    kurs: 'azure-basics'
    tag: '5'
    owner: kuerzel
  }
}

module webserver 'webserver.bicep' = {
  name: 'webserver-${kuerzel}'
  scope: rg
  params: {
    location: location
    kuerzel: kuerzel
    schulIp: schulIp
    adminPublicKey: adminPublicKey
  }
}

output url string = webserver.outputs.url
```

## webserver.bicep
```bicep
param location string = resourceGroup().location
param kuerzel string
param schulIp string
param adminPublicKey string

resource nsg 'Microsoft.Network/networkSecurityGroups@2023-09-01' = {
  name: 'nsg-web'
  location: location
  properties: {
    securityRules: [
      {
        name: 'allow-http'
        properties: {
          priority: 200
          direction: 'Inbound'
          access: 'Allow'
          protocol: 'Tcp'
          sourceAddressPrefix: 'Internet'
          sourcePortRange: '*'
          destinationAddressPrefix: '*'
          destinationPortRange: '80'
        }
      }
      {
        name: 'allow-ssh'
        properties: {
          priority: 1000
          direction: 'Inbound'
          access: 'Allow'
          protocol: 'Tcp'
          sourceAddressPrefix: '${schulIp}/32'
          sourcePortRange: '*'
          destinationAddressPrefix: '*'
          destinationPortRange: '22'
        }
      }
    ]
  }
}

resource vnet 'Microsoft.Network/virtualNetworks@2023-09-01' = {
  name: 'vnet-projekt-${kuerzel}'
  location: location
  properties: {
    addressSpace: {
      addressPrefixes: [
        '10.10.0.0/16'
      ]
    }
    subnets: [
      {
        name: 'snet-web'
        properties: {
          addressPrefix: '10.10.1.0/24'
          networkSecurityGroup: {
            id: nsg.id
          }
        }
      }
    ]
  }
}

resource pip 'Microsoft.Network/publicIPAddresses@2023-09-01' = {
  name: 'pip-web-${kuerzel}'
  location: location
  sku: {
    name: 'Standard'
  }
  properties: {
    publicIPAllocationMethod: 'Static'
  }
}

resource nic 'Microsoft.Network/networkInterfaces@2023-09-01' = {
  name: 'nic-web-${kuerzel}'
  location: location
  properties: {
    ipConfigurations: [
      {
        name: 'ipconfig1'
        properties: {
          subnet: {
            id: vnet.properties.subnets[0].id
          }
          privateIPAllocationMethod: 'Dynamic'
          publicIPAddress: {
            id: pip.id
          }
        }
      }
    ]
  }
}

resource vm 'Microsoft.Compute/virtualMachines@2024-03-01' = {
  name: 'vm-web-${kuerzel}'
  location: location
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_B1s'
    }
    osProfile: {
      computerName: 'vm-web-${kuerzel}'
      adminUsername: 'azureuser'
      customData: loadFileAsBase64('cloud-init.yaml')
      linuxConfiguration: {
        disablePasswordAuthentication: true
        ssh: {
          publicKeys: [
            {
              path: '/home/azureuser/.ssh/authorized_keys'
              keyData: adminPublicKey
            }
          ]
        }
      }
    }
    storageProfile: {
      imageReference: {
        publisher: 'Canonical'
        offer: 'ubuntu-24_04-lts'
        sku: 'server'
        version: 'latest'
      }
      osDisk: {
        createOption: 'FromImage'
        deleteOption: 'Delete'
      }
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: nic.id
        }
      ]
    }
  }
}

output url string = 'http://${pip.properties.ipAddress}'
```

## cloud-init.yaml
```yaml
#cloud-config
package_update: true
packages:
  - nginx
write_files:
  - path: /var/www/html/index.html
    content: |
      <meta charset="utf-8">
      <h1>Velo Zuerich AG - Webshop</h1>
      <p>Team mm und ab, bereitgestellt mit Bicep und cloud-init</p>
```

## Bereitstellen
```powershell
$KEY = Get-Content $HOME\.ssh\id_ed25519.pub
az deployment sub what-if --location switzerlandnorth --template-file main.bicep --parameters kuerzel=mm schulIp=198.51.100.23 "adminPublicKey=$KEY"
az deployment sub create --location switzerlandnorth --template-file main.bicep --parameters kuerzel=mm schulIp=198.51.100.23 "adminPublicKey=$KEY" --query properties.outputs
```
```json
{
  "url": {
    "type": "String",
    "value": "http://20.208.51.90"
  }
}
```
Erster what-if: `6 to create` (Ressourcengruppe (Resource Group), NSG, VNet, Public IP, NIC, VM). Zweiter what-if nach dem Bereitstellen: keine Änderung (einzelne Eigenschaften können als `~` mit nur angezeigten Standardwerten erscheinen, «noise»). <!-- prüfen: what-if-Ausgabe beim zweiten Lauf, insbesondere bei der VM -->

## Kann-Anforderungen (Auszug)
- **K1 Tags:** Die Ressourcengruppe (Resource Group) hat sie schon in `main.bicep`. In `webserver.bicep` bei jeder Ressource `tags: { kurs: 'azure-basics', tag: '5', owner: kuerzel }`, oder einmal als `var tags = {…}` und dann `tags: tags`.
- **K3 Grösse:** in `webserver.bicep` `param vmSize string = 'Standard_B1s'` und `vmSize: vmSize`. Weil der Parameter einen Standardwert hat, muss `main.bicep` ihn nicht weitergeben.
- **K4 Hostname:** in cloud-init einen Block `runcmd` ergänzen. Den Befehl in einfache Anführungszeichen setzen, sonst liest YAML den Doppelpunkt mit Leerzeichen als Zuordnung:
  ```yaml
  runcmd:
    - 'echo "<p>Server: $(hostname)</p>" >> /var/www/html/index.html'
  ```

## Typische Fehler

| Problem | Ursache | Lösung |
|---------|---------|--------|
| `subnets[0]` zeigt auf das falsche Subnetz (Subnet) | `snet-intern` steht vor `snet-web` | Reihenfolge prüfen oder `snet-web` an erste Stelle |
| `adminPublicKey` leer oder zerschnitten | ohne Anführungszeichen übergeben | `"adminPublicKey=$KEY"` |
| `loadFileAsBase64` scheitert | Datei in anderem Ordner | alle drei Dateien im Projektordner |
| `adminPublicKey` kommt in `webserver.bicep` nicht an | in `main.bicep` nicht unter `params` weitergegeben | `adminPublicKey: adminPublicKey` ergänzen |
| `outputs.url` fehlt | `output url` nur in `webserver.bicep` oder nur in `main.bicep` | in beiden Dateien: `webserver.bicep` gibt ihn an `main.bicep` weiter |
| `webserver.bicep` mit `az deployment sub` | `resourceGroup()` gibt es auf Ebene Abonnement (Subscription) nicht | `--template-file main.bicep` |
| VM ohne Website | YAML-Fehler, siehe Lösung 5.1 | Log lesen, Ressourcengruppe (Resource Group) löschen, mit demselben Befehl neu bereitstellen |
| Zweite Bereitstellung (Deployment) ändert die VM | `customData` geändert: Azure kann es bei bestehender VM nicht ändern | VM löschen und neu bereitstellen |
| `ImageNotFound` | Image-Referenz falsch geschrieben | `Canonical` / `ubuntu-24_04-lts` / `server` |

## Hinweise für die Kursleitung
- Zeitplan: L5 Meilenstein 1–2, L6 Meilenstein 2–3, L7 Meilenstein 4–5, L8 Lösungen zeigen (freiwillig, 4' pro Team plus 1' Wechsel). Es gibt keine Punkte und keine Noten, der Kurs ist freiwillig. Rückmeldung gibt die Kursleitung mündlich beim Coaching und beim Zeigen.
- Bereitgestellt wird nur noch mit `az deployment sub` (eingeführt in 5.2, Schritte 8–10). Häufigster Stolperstein: ein Parameter steht in `main.bicep`, wird aber nicht unter `params` an `webserver.bicep` weitergegeben.
- Teams, die nach L6 noch keine laufende VM haben: gemeinsam `what-if` lesen, notfalls den Baustein aus dem Auftrag nochmals vollständig kopieren lassen.
- Es reicht, wenn **ein** Abonnement (Subscription) pro Team verwendet wird. Beide Personen legen die Dateien in ihr Lernjournal.
- Beim Coaching darauf achten: Kein privater Schlüssel (Private Key) im Lernjournal, auch nicht im Screenshot (Selbstkontrolle M7).
- Am Schluss Aufräumkontrolle für alle: `az group list --output table` zeigt höchstens `NetworkWatcherRG`.
- Vorab mit dem eigenen Konto testen: Image-Referenz, API-Versionen, `B1s` in der Kursregion, Ausgabe von what-if beim zweiten Lauf. <!-- prüfen -->

## Quellen
- Microsoft Learn: [Bereitstellungen im Abonnementbereich mit Bicep-Dateien](https://learn.microsoft.com/de-de/azure/azure-resource-manager/bicep/deploy-to-subscription)
- Microsoft Learn: [Schnellstart: Erstellen einer Ubuntu-Linux-VM mit Bicep](https://learn.microsoft.com/de-de/azure/virtual-machines/linux/quick-create-bicep)

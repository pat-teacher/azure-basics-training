<sub>PAT Cloud Solutions · Einführung in Cloud Computing mit Microsoft Azure · Tag 5</sub>

# Abschlussprojekt: Webserver der «Velo Zürich AG»

Zeit: L5–L7 (ca. 135 Min.), in L8 zeigen die Teams, die wollen, ihre Lösung · Form: Partnerarbeit (Zweierteam)

## Ziel
- Ihr stellt eine vollständige Umgebung mit VNet, Subnetz (Subnet), NSG und VM mit **einem** Befehl aus Bicep bereit. (K3)
- Die VM richtet sich beim ersten Start mit cloud-init selbst als Webserver ein. (K3)
- Ihr dokumentiert eure Lösung so, dass ihr sie anderen zeigen könnt. (K3)

## Voraussetzungen
- Aufträge 5.1 bis 5.3 erledigt. Ihr braucht `cloud-init.yaml` aus 5.1 und `network.bicep` aus 5.3.
- Die öffentliche IP (Public IP) der Schule (Wandtafel)
- Lernjournal: Ordner `tag-5/abschlussprojekt` (bei beiden Personen)

## Ausgangslage
Die Velo Zürich AG eröffnet ihren Webshop. Sie will den Webserver nicht von Hand aufsetzen, sondern so, dass jede Person im Team ihn jederzeit mit einem Befehl neu bauen kann, zum Beispiel für eine Testumgebung oder nach einem Fehler.

Das Projekt wird nicht mit Punkten oder Noten bewertet. Ihr zeigt euch mit der Selbstkontrolle am Schluss selbst, was ihr geschafft habt. Wer will, zeigt die Lösung in L8 der Klasse.

![Architektur: main.bicep und cloud-init.yaml werden mit az deployment group create bereitgestellt. Im VNet vnet-projekt-<kuerzel> liegt snet-web mit der NSG nsg-web und der VM vm-web-<kuerzel> mit Public IP. cloud-init installiert nginx und die Startseite des Teams.](bilder/projekt-architektur.svg)

## Anforderungen

**Muss** (alle erfüllen):

| Nr. | Anforderung |
|-----|-------------|
| M1 | Alle Ressourcen stehen in **einer** Datei `main.bicep` (dazu kommt `cloud-init.yaml`) und werden mit **einem** Befehl `az deployment group create` bereitgestellt. |
| M2 | VNet `vnet-projekt-<kuerzel>` mit `10.10.0.0/16` und Subnetz (Subnet) `snet-web` mit `10.10.1.0/24` |
| M3 | NSG `nsg-web` am Subnetz (Subnet): Port 80 für alle (`Internet`), Port 22 nur von der Schul-IP |
| M4 | VM `vm-web-<kuerzel>`: Ubuntu 24.04, `Standard_B1s`, öffentliche IP (Public IP), Anmeldung nur mit SSH-Schlüssel |
| M5 | cloud-init installiert nginx und schreibt eine Startseite mit dem Firmennamen und euren Kürzeln. In `cloud-init.yaml` keine Umlaute: «Velo Zuerich AG». |
| M6 | Ein `output` gibt die URL der Website aus. |
| M7 | Kein privater Schlüssel (Private Key) und kein Passwort in den Dateien |
| M8 | Dokumentation im Lernjournal (siehe «Dokumentation») und Aufräumen am Schluss |

**Kann** (für schnelle Teams, ⭐):

| Nr. | Anforderung |
|-----|-------------|
| K1 | Tags `kurs`, `tag`, `owner` auf allen Ressourcen |
| K2 | Zweites Subnetz (Subnet) `snet-intern` mit einer zweiten VM **ohne** öffentliche IP (Public IP) und ohne Website. Ihr zeigt mit `ssh -J` über `vm-web`, dass sie erreichbar ist (Auftrag 4.3). |
| K3 | Grösse der VM als `param` mit Standardwert `Standard_B1s` |
| K4 | Die Startseite zeigt den Namen der VM. Tipp: `runcmd` mit `hostname`. |

## Die Bausteine
Ihr müsst nicht bei null beginnen. Drei Bausteine habt ihr schon, einer kommt neu dazu:

| Baustein | Woher |
|----------|-------|
| NSG und VNet | `network.bicep` aus Auftrag 5.3. Namen anpassen, `snet-intern` und `snet-admin` dürfen weg. |
| cloud-init | `cloud-init.yaml` aus Auftrag 5.1. Startseite anpassen. |
| `param` und Bereitstellen | wie in Auftrag 5.2 und 5.3 |
| Öffentliche IP (Public IP), Netzwerkschnittstelle (Network Interface) und VM | **neu**, siehe unten |

Oben in eurer `main.bicep` stehen die Parameter (`param`). Drei habt ihr schon aus `network.bicep` (Auftrag 5.3), einer kommt für die VM dazu:
```bicep
param location string = resourceGroup().location
param kuerzel string
param schulIp string          // aus 5.3: Quelle für SSH in der Sicherheitsregel (Security Rule) (M3)
param adminPublicKey string   // neu: euer öffentlicher Schlüssel (Public Key) für die VM
```

| Parameter | Wert beim Bereitstellen | Wo verwendet |
|-----------|------------------------|--------------|
| `location` | keiner nötig, Standardwert ist die Region der Ressourcengruppe (Resource Group) | bei jeder Ressource |
| `kuerzel` | `kuerzel=<kuerzel>` | in allen Namen |
| `schulIp` | `schulIp=<schul-ip>`, ohne `/32` | Sicherheitsregel (Security Rule) für SSH: `sourceAddressPrefix: '${schulIp}/32'` |
| `adminPublicKey` | `"adminPublicKey=$KEY"` | VM: `keyData: adminPublicKey` |

Jeder `param` ohne Standardwert muss beim Bereitstellen mit `--parameters` übergeben werden. Umgekehrt muss jeder Wert, den ihr mit `--parameters` übergebt, in der Datei als `param` stehen.

Den folgenden Baustein hängt ihr unten an eure `main.bicep` an:

```bicep
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
```
<!-- prüfen: Stand 15.11.2026 – Image-Referenz Canonical/ubuntu-24_04-lts/server und API-Versionen im Student-Abo -->

| Stelle | Bedeutung |
|--------|-----------|
| `vnet.properties.subnets[0].id` | das erste Subnetz (Subnet) im VNet, also `snet-web` |
| `loadFileAsBase64('cloud-init.yaml')` | liest eure cloud-init-Datei beim Bereitstellen ein. Sie muss im selben Ordner liegen wie `main.bicep`. |
| `disablePasswordAuthentication: true` | Anmeldung nur mit SSH-Schlüssel |
| `keyData: adminPublicKey` | euer öffentlicher Schlüssel (Public Key), beim Bereitstellen als `param` übergeben |

## Vorgehen

### Meilenstein 1: Projekt einrichten (ca. 15 Min.)
1. Lege den Ordner `azure-tag5\projekt` an. Kopiert `network.bicep` aus 5.3 als `main.bicep` und `cloud-init.yaml` aus 5.1 in diesen Ordner.
2. Passt die Namen an die Anforderungen M2 und M3 an. Kontrolliert, dass oben `param kuerzel string` und `param schulIp string` stehen (siehe «Die Bausteine»). Entscheidet, wessen Abonnement (Subscription) ihr verwendet. Als `<kuerzel>` nehmt ihr das Kürzel dieser Person. Eine Person tippt, die andere liest mit und prüft. Nach jedem Meilenstein wechselt ihr.
3. Erstellt die Ressourcengruppe (Resource Group):
   ```powershell
   az group create --name rg-projekt-<kuerzel> --location <region> --tags kurs=azure-basics tag=5 owner=<kuerzel>
   ```

4. Prüft die Datei mit `what-if`:
   ```powershell
   az deployment group what-if --resource-group rg-projekt-<kuerzel> --template-file main.bicep --parameters kuerzel=<kuerzel> schulIp=<schul-ip>
   ```

**Kontrolle:** `what-if` zeigt zwei Ressourcen mit `+`: NSG und VNet.

### Meilenstein 2: VM und cloud-init dazu (ca. 40 Min.)
1. Hängt den Baustein für öffentliche IP (Public IP), Netzwerkschnittstelle (Network Interface) und VM an. Ergänzt `param adminPublicKey string` oben.
2. Ergänzt am Schluss einen `output` für die URL (M6):
   ```bicep
   output url string = 'http://${pip.properties.ipAddress}'
   ```
3. Passt die Startseite in `cloud-init.yaml` an (M5).
4. Lest euren öffentlichen Schlüssel (Public Key) in eine Variable und stellt bereit:
   ```powershell
   $KEY = Get-Content $HOME\.ssh\id_ed25519.pub
   az deployment group create --resource-group rg-projekt-<kuerzel> --template-file main.bicep --parameters kuerzel=<kuerzel> schulIp=<schul-ip> "adminPublicKey=$KEY" --query properties.outputs
   ```
   `$KEY = …` speichert den Schlüssel in einer PowerShell-Variablen. Die Anführungszeichen um `"adminPublicKey=$KEY"` sorgen dafür, dass der Schlüssel mit seinen Leerzeichen als **ein** Wert ankommt.

**Kontrolle:** Die Ausgabe zeigt `url` mit `http://<öffentliche-ip>`.

### Meilenstein 3: Testen (ca. 20 Min.)
1. Öffnet die URL nach 2–3 Minuten im Browser.
2. Meldet euch per SSH an und prüft `cloud-init status --long`.
3. Führt den Befehl aus Meilenstein 2 nochmals aus: Nichts darf sich ändern (Idempotenz).
4. Prüft mit dem Partner-Laptop: Lädt die Website auch dort?

**Kontrolle:** Website mit euren Kürzeln, `status: done`, zweite Bereitstellung (Deployment) ohne Fehler.

### Meilenstein 4: Dokumentieren (ca. 30 Min.)
Schreibt im Lernjournal `tag-5/abschlussprojekt/README.md` (siehe «Dokumentation»). Zeichnet die Architektur als Bild, zum Beispiel mit [draw.io](https://app.diagrams.net/) oder von Hand mit einem Foto.

### Meilenstein 5: Zeigen vorbereiten (freiwillig, ca. 15 Min.)
In L8 können alle Teams, die wollen, ihre Lösung der Klasse zeigen. Ihr habt 4 Minuten:
1. Architektur am Bild erklären (1 Min.)
2. `main.bicep` und `cloud-init.yaml` kurz zeigen (1 Min.)
3. Live: Website im Browser und `what-if` ohne Änderung (1 Min.). Der Befehl:
   ```powershell
   az deployment group what-if --resource-group rg-projekt-<kuerzel> --template-file main.bicep --parameters kuerzel=<kuerzel> schulIp=<schul-ip> "adminPublicKey=$KEY"
   ```
4. Was war schwierig, was habt ihr gelernt? (1 Min.)

Die Zuschauenden geben kurz Feedback: eine Sache, die ihnen gefallen hat, und eine Frage.

Wer nicht zeigen will oder schon fertig ist, macht die Kann-Anforderungen.

## Selbstkontrolle
Hakt im `README.md` ab, was ihr geschafft habt:
- [ ] M1 Ein Befehl stellt alles bereit, `main.bicep` und `cloud-init.yaml` liegen im selben Ordner.
- [ ] M2 VNet `10.10.0.0/16` und Subnetz (Subnet) `snet-web` `10.10.1.0/24`
- [ ] M3 NSG am Subnetz (Subnet): Port 80 für alle, Port 22 nur von der Schul-IP
- [ ] M4 VM mit Ubuntu 24.04, öffentlicher IP (Public IP) und Anmeldung nur mit SSH-Schlüssel
- [ ] M5 Die Website zeigt die Velo Zürich AG und eure Kürzel, `cloud-init status` ist `done`.
- [ ] M6 Der `output` zeigt die URL.
- [ ] M7 Kein privater Schlüssel (Private Key) und kein Passwort in den Dateien und Screenshots
- [ ] M8 Dokumentation vollständig, am Schluss aufgeräumt
- [ ] Zweite Bereitstellung (Deployment) ohne Änderung (Idempotenz)
- [ ] Kann-Anforderungen: ______

## Dokumentation
Im Lernjournal beider Personen, Ordner `tag-5/abschlussprojekt`:
- `main.bicep` und `cloud-init.yaml`
- `README.md` mit:
  - Architekturbild
  - dem Befehl für die Bereitstellung (Deployment), **ohne** euren Schlüssel (schreibt `"adminPublicKey=$KEY"`)
  - Screenshot der Website und der Ausgabe von `cloud-init status --long`
  - Ausgabe von `what-if` beim zweiten Ausführen
  - Wer hat was gemacht? Was war schwierig? (3–5 Sätze)
  - erfüllte Kann-Anforderungen
  - die Selbstkontrolle
  - am Schluss ergänzt: Nachweis des Aufräumens mit der Ausgabe von `az group list --output table`

## Aufräumen
Am Schluss, nach dem Zeigen in L8:
```powershell
az group delete --name rg-projekt-<kuerzel> --yes --no-wait
```
Danach löscht ihr **alle** übrigen Ressourcengruppen (Resource Groups) aus dem Kurs. `NetworkWatcherRG` darf bleiben.

**Kontrolle:** `az group list --output table` zeigt höchstens noch `NetworkWatcherRG`.

## Wenn etwas nicht klappt

| Problem | Lösung |
|---------|--------|
| Fehler, dass ein Parameter fehlt oder nicht im Template steht (z. B. `schulIp`) | `param`-Zeile fehlt oben in `main.bicep`, oder der Name ist anders geschrieben als bei `--parameters`. Gross- und Kleinschreibung beachten: `schulIp`. <!-- prüfen: genauer Fehlertext der Azure CLI --> |
| `loadFileAsBase64` findet die Datei nicht | `cloud-init.yaml` liegt nicht im selben Ordner wie `main.bicep`, oder der Name ist anders geschrieben. |
| `InvalidParameter` bei `keyData` | Schlüssel nicht vollständig. `$KEY` muss mit `ssh-ed25519 AAAA` beginnen: `echo $KEY` |
| `SkuNotAvailable` | `Standard_B1s` in der Region nicht verfügbar. `Standard_B2ats_v2` verwenden, das gilt für M4 als erfüllt. |
| `QuotaExceeded` | Es läuft noch eine andere VM: `az vm list --output table`, alte Ressourcengruppen (Resource Groups) löschen. |
| Website lädt nicht | cloud-init noch nicht fertig (2–3 Minuten warten) oder Fehler in `cloud-init.yaml` (5.1, «Wenn etwas nicht klappt»). |
| `ssh` hängt | Schul-IP falsch übergeben. Mit `az network nsg rule list … --output table` prüfen. |

## Quellen
- Microsoft Learn: [Schnellstart: Erstellen einer Ubuntu-Linux-VM mit Bicep](https://learn.microsoft.com/de-de/azure/virtual-machines/linux/quick-create-bicep)
- Microsoft Learn: [Bicep-Dateifunktionen: loadFileAsBase64](https://learn.microsoft.com/de-de/azure/azure-resource-manager/bicep/bicep-functions-files)
- Microsoft Learn: [Microsoft.Compute virtualMachines (Bicep)](https://learn.microsoft.com/de-de/azure/templates/microsoft.compute/virtualmachines)

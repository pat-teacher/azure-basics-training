---
name: azure-hands-on-labs
description: Vorlagen und Regeln für Azure-Übungen (Labs), Aufgabenblätter und Musterlösungen mit Portal, Azure CLI, Bicep und Cloud-Init, abgestimmt auf Azure for Students. Verwenden beim Erstellen oder Prüfen jeder praktischen Azure-Übung.
---

# Azure Hands-on Labs

## Vorlage Auftrag (`auftraege/tag-<n>/<n>.<m>-<kurzthema>.md`)
Vorbild: TBZ-Modul Azure (gitlab.com/ch-tbz-wb/Stud/azure) – kurze Ausgangslage, klare nummerierte Schritte, erwartetes Ergebnis.
```markdown
<sub>PAT Cloud Solutions · Einführung in Cloud Computing mit Microsoft Azure · Tag <n></sub>

# Auftrag <n>.<m>: <Titel>
Stand: TT.MM.JJJJ · Zeit: <min> Min. · Form: <Einzel/Partner>

## Ziel
Du kannst … (K-Stufe)

## Voraussetzungen
- Azure-for-Students-Abonnement aktiv
- Cloud Shell (Bash) geöffnet
- …

## Ausgangslage
Kurzes Praxisszenario mit fiktiver Firma (z. B. «Velo Zürich AG»).

## Schritte
### Schritt 1: …
Erklärung in einem Satz, dann Befehl oder Portal-Pfad.
```bash
az …
```
**Kontrolle:** Woran du erkennst, dass es geklappt hat.

## Aufräumen
```bash
az group delete --name <rg> --yes --no-wait
```

## Zusatzaufgaben ⭐
## Quellen
```

Jeder Auftrag endet mit **Erwartetes Ergebnis** (was ins Lernjournal gehört: Screenshot, Befehl, Antwort).

## Vorlage Lösung (`loesungen/tag-<n>/<n>.<m>-<kurzthema>.md`)
- Gleicher Dateiname und gleiche Schritt-/Fragennummern wie der Auftrag.
- Pro Schritt: Lösung, Befehl, erwartete Ausgabe.
- Danach: Tabelle «Typische Fehler» (Problem | Ursache | Lösung) und «Hinweise für die Kursleitung».
- Nie im selben Ordner wie die Aufträge.

## Namenskonvention
Nach Cloud Adoption Framework, gekürzt:
| Ressource | Präfix | Beispiel |
|-----------|--------|----------|
| Ressourcengruppe | `rg-` | `rg-tag2-<kuerzel>` |
| Virtuelle Maschine | `vm-` | `vm-web-<kuerzel>` |
| Virtuelles Netzwerk | `vnet-` | `vnet-tag3-<kuerzel>` |
| Subnetz | `snet-` | `snet-web` |
| NSG | `nsg-` | `nsg-web` |
| Storage Account | `st` (ohne Bindestrich, max. 24 Zeichen, klein) | `sttag3<kuerzel>` |
| App Service Plan | `asp-` | `asp-tag4-<kuerzel>` |
| Web App | `app-` | `app-tag4-<kuerzel>` |
`<kuerzel>` = Initialen der Lernenden, damit globale Namen eindeutig sind.

Tags auf jeder Ressourcengruppe: `kurs=azure-basics`, `tag=<n>`, `owner=<kuerzel>`.

## Beispiele pro Tag

### Tag 1: Lokale VMs mit Multipass (ohne Azure)
Vorbild: TBZ M346 KN01, für ICT-Fachleute vereinfacht. **Keine ISO-Dateien verteilen** – Multipass lädt Ubuntu selbst.
```powershell
multipass launch --name vm1                                   # erste VM
multipass launch --name klein --cpus 1 --memory 1G --disk 5G  # Ressourcen festlegen
multipass exec klein -- free -h                               # Befehl in der VM
multipass launch --name auto --cloud-init cloud-init-tag1.yaml
multipass delete --purge --all                                # aufräumen
```
- Windows Pro/Education → Backend Hyper-V. Windows Home → VirtualBox + `multipass set local.driver=virtualbox` (Ausnahme, Partnerarbeit).
- cloud-init-Datei: nur `packages`, `write_files`, `runcmd`. Dateien nach `/opt/…` schreiben, **nicht** nach `/home/ubuntu/…` (write_files läuft vor dem Anlegen des Benutzers → Home-Ordner gehört sonst root). Lernende kopieren sie in Notepad («Alle Dateien»).
- SSH-Schlüssel (`ssh-keygen -t ed25519`) an Tag 1 erstellen, an Tag 3 in Azure verwenden.
- ⭐ Docker in der Multipass-VM mit `sudo` (keine Gruppenänderung nötig).

### Tag 2: Ressourcengruppe und erste CLI-Befehle
```bash
az account show --output table
az account list-locations --output table
az group create --name rg-tag2-<kuerzel> --location <region> \
  --tags kurs=azure-basics tag=2 owner=<kuerzel>
```

### Tag 3: Linux-VM und Storage Account
```bash
az vm create --resource-group rg-tag3-<kuerzel> --name vm-web-<kuerzel> \
  --image Ubuntu2204 --size Standard_B1s --admin-username azureuser \
  --generate-ssh-keys --public-ip-sku Standard
az storage account create --name sttag3<kuerzel> --resource-group rg-tag3-<kuerzel> \
  --sku Standard_LRS --kind StorageV2
az storage container create --account-name sttag3<kuerzel> --name dateien --auth-mode login
```
⭐ Statische Website im Container `$web`.

### Tag 4: VNet, Subnetze und NSG
```bash
az network vnet create --resource-group rg-tag4-<kuerzel> --name vnet-tag4-<kuerzel> \
  --address-prefixes 10.10.0.0/16 --subnet-name snet-web --subnet-prefixes 10.10.1.0/24
az network vnet subnet create --resource-group rg-tag4-<kuerzel> --vnet-name vnet-tag4-<kuerzel> \
  --name snet-db --address-prefixes 10.10.2.0/24
az network nsg create --resource-group rg-tag4-<kuerzel> --name nsg-web
az network nsg rule create --resource-group rg-tag4-<kuerzel> --nsg-name nsg-web \
  --name allow-ssh-schule --priority 100 --direction Inbound --access Allow \
  --protocol Tcp --destination-port-ranges 22 --source-address-prefixes <schul-ip>/32
az network vnet subnet update --resource-group rg-tag4-<kuerzel> --vnet-name vnet-tag4-<kuerzel> \
  --name snet-web --network-security-group nsg-web
```

### Tag 5: Bicep und Cloud-Init
`cloud-init.yaml`:
```yaml
#cloud-config
package_update: true
packages:
  - nginx
runcmd:
  - echo "<h1>Hallo von $(hostname)</h1>" > /var/www/html/index.html
```
Zuerst per CLI (Scripting):
```bash
az vm create --resource-group rg-tag5-<kuerzel> --name vm-web-<kuerzel> \
  --image Ubuntu2204 --size Standard_B1s --admin-username azureuser \
  --generate-ssh-keys --custom-data cloud-init.yaml --public-ip-sku Standard
az vm open-port --resource-group rg-tag5-<kuerzel> --name vm-web-<kuerzel> --port 80
```
Dann dieselbe Infrastruktur (VNet, NSG, VM) als `main.bicep`; Cloud-Init über `customData: loadFileAsBase64('cloud-init.yaml')`. ARM-Template mit `az bicep build` zeigen, um Bicep und ARM zu vergleichen.
```bash
az deployment group create --resource-group rg-tag5-<kuerzel> --template-file main.bicep \
  --parameters kuerzel=<kuerzel>
```

## Stolpersteine bei Azure for Students
<!-- prüfen: Stand 19.10.2026, Angaben stammen aus Community-Diskussionen, nicht aus offizieller Doku. Mit eigenem Student-Konto testen. -->
- **Regionen:** Eine Richtlinie erlaubt oft nur wenige Regionen. Lernende sollen zuerst mit `az policy assignment list` bzw. im Portal unter «Richtlinie» prüfen, welche Regionen erlaubt sind. Switzerland North ist möglicherweise nicht dabei.
- **VM-Grössen:** Nicht alle Grössen verfügbar. B-Serie (z. B. `Standard_B1s`, `Standard_B2s`) zuerst versuchen; bei Fehler `az vm list-skus --location <region> --size Standard_B --output table`.
- **vCPU-Quota:** Begrenzte Anzahl Kerne pro Region. Nur eine VM gleichzeitig laufen lassen, nach dem Lab löschen.
- **Guthaben:** Begrenztes Startguthaben. Public IPs, VMs und App Service Plans über F1 kosten laufend; immer aufräumen.
- **Entra ID:** Lernende haben mit Azure for Students keine Rechte in Entra ID. RBAC, Conditional Access usw. nur über Challenge Labs (Learn on Demand / Skillable) aus Microsoft Learn for Educators. Auftrag dann: Anmeldung mit Trainingsschlüssel, Lab-Name, Hinweis auf begrenzte Starts (meist 3), Ergebnis ins Lernjournal. Keine eigene Musterlösung nötig – das Lab enthält die Anleitung.

## Regeln
- Jeder Befehl wird erklärt, bevor er ausgeführt wird.
- Platzhalter immer in `<spitzen Klammern>`.
- Portal-Pfade als «Menü > Untermenü > Schaltfläche».
- Kein Lab ohne Aufräumschritt.

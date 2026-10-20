<sub>PAT Cloud Solutions · Einführung in Cloud Computing mit Microsoft Azure · Theorie</sub>

# 7 Automatisierung: Bicep und cloud-init

Stand: 19.10.2026 · gehört zu [Tag 5](../kurs/tag-5.md)

## Lernziele
- Du kannst erklären, was Infrastruktur als Code (IaC) ist und welche Vorteile es hat. (K2)
- Du kannst imperatives und deklaratives Vorgehen unterscheiden. (K2)
- Du kannst eine einfache Bicep-Datei lesen und bereitstellen. (K3)
- Du kannst eine VM mit cloud-init beim ersten Start automatisch einrichten. (K3)
- Du kannst sagen, wann du Bicep, cloud-init oder die Azure CLI einsetzt. (K2)

## Infrastruktur als Code
Bei **Infrastruktur als Code** (Infrastructure as Code, IaC) beschreibst du deine Infrastruktur in Textdateien statt sie zusammenzuklicken. Die Dateien liegen in Git, und ein Werkzeug setzt sie automatisch um.

Die Vorteile:
- **Wiederholbar:** Die gleiche Datei ergibt immer die gleiche Umgebung. Für Test und Produktion, für 1 oder 10 Lernende.
- **Wegwerfbar:** Ist etwas kaputt oder brauchst du die Umgebung nicht mehr, löschst du sie und baust sie in Minuten neu.
- **Nachvollziehbar:** Git zeigt, wer wann was geändert hat. Der Code **ist** die Dokumentation.

## Imperativ oder deklarativ?

| | Imperativ («wie») | Deklarativ («was») |
|---|---|---|
| Du beschreibst | die Schritte zum Ziel | den Zielzustand |
| Beispiel | «Erstelle ein VNet. Erstelle eine NSG. Verbinde sie.» | «Es gibt ein VNet mit dieser NSG.» |
| Zweite Ausführung | kann scheitern oder doppelt erstellen, je nach Befehl | ändert nichts, Ziel ist schon erreicht |
| In Azure | Azure CLI, PowerShell-Skripte | **Bicep**, ARM-Templates |

Die Eigenschaft «zweimal ausführen ändert nichts» heisst **Idempotenz**. Sie macht Automatisierung sicher.

> **Alltagsvergleich:** Imperativ ist eine Wegbeschreibung («zweimal links, dann geradeaus»). Deklarativ ist die Adresse im Navi: Du sagst, wo du hinwillst, das Navi findet den Weg.

## ARM-Templates und Bicep

![Drei Wege zur selben Infrastruktur](img/iac-ablauf.svg)

- **ARM-Template:** die «Maschinensprache» des Azure Resource Manager, in JSON. Vollständig, aber lang und schwer lesbar.
- **Bicep:** eine einfachere Sprache von Microsoft für dieselbe Aufgabe. Bicep wird vor der Bereitstellung in ein ARM-Template übersetzt (`az bicep build --file main.bicep`).

Ein Speicherkonto (Storage Account) in Bicep:
```bicep
param location string = resourceGroup().location
param kuerzel string

resource st 'Microsoft.Storage/storageAccounts@2023-05-01' = {
  name: 'sttag5${kuerzel}'
  location: location
  sku: { name: 'Standard_LRS' }
  kind: 'StorageV2'
}

output blobUrl string = st.properties.primaryEndpoints.blob
```

| Element | Bedeutung |
|---------|-----------|
| `param` | Eingabewert, beim Bereitstellen übergeben |
| `resource <name> '<typ>@<api-version>'` | eine Ressource, die existieren soll |
| `${kuerzel}` | Wert in einen Text einsetzen |
| `st.properties…` | auf eine andere Ressource verweisen; Bicep erkennt daraus die Reihenfolge |
| `output` | Wert, der nach der Bereitstellung ausgegeben wird |

Bereitstellen:
```bash
az deployment group create --resource-group rg-tag5-<kuerzel> \
  --template-file main.bicep --parameters kuerzel=<kuerzel>
```

Tipp: Mit `az deployment group what-if …` (gleiche Parameter wie `create`) siehst du vorher, was sich ändern würde.

## cloud-init: die VM beim ersten Start einrichten
Bicep oder CLI erstellen die VM. Doch wer installiert den Webserver darauf? Das macht **cloud-init**. Du gibst der VM beim Erstellen eine YAML-Datei mit (in Azure: **benutzerdefinierte Daten** (Custom Data), `--custom-data`). Beim **ersten** Start arbeitet cloud-init sie ab.

```yaml
#cloud-config
package_update: true
packages:
  - nginx
write_files:
  - path: /var/www/html/index.html
    content: |
      <meta charset="utf-8">
      <h1>Velo Zürich AG</h1>
      <p>Bereitgestellt mit cloud-init</p>
```

| Block | Zweck |
|-------|-------|
| `#cloud-config` | **muss** die erste Zeile sein, sonst wird alles still ignoriert |
| `package_update`, `packages` | Paketlisten aktualisieren, Pakete installieren |
| `write_files` | Dateien mit Inhalt anlegen |
| `users` | Benutzer und SSH-Schlüssel anlegen |
| `runcmd` | Befehle ausführen – nur, wenn kein anderer Block passt |

**Wichtig:**
- cloud-init läuft nur beim **ersten** Start. Willst du etwas ändern, erstellst du eine neue VM.
- cloud-init scheitert **still**: Die VM startet, aber die Einrichtung fehlt. Dann hilft das Log:
  ```bash
  cloud-init status --long
  sudo cat /var/log/cloud-init-output.log
  ```
- Häufige Fehler: `#cloud-config` fehlt, Einrückung falsch (YAML braucht Leerzeichen, keine Tabs).

## Welches Werkzeug wofür?

| Werkzeug | Ebene | Frage | Moment |
|----------|-------|-------|--------|
| **Bicep / ARM** | Infrastruktur | Welche Ressourcen gibt es? (VNet, NSG, VM …) | vor dem ersten Start |
| **cloud-init** | Ersteinrichtung | Wie richtet sich die VM ein? (Pakete, Dateien, Benutzer) | beim ersten Start |
| **Azure CLI** | beides, imperativ | schnell etwas erstellen oder nachschauen | jederzeit |

> **Merksatz:** Bicep baut das Haus, cloud-init richtet es beim Einzug ein.

## Selbsttest

<details><summary>1. Dein CLI-Skript bricht beim zweiten Ausführen mit «already exists» ab. Welche Eigenschaft fehlt?</summary>

Idempotenz. Ein deklaratives Werkzeug wie Bicep vergleicht den Zielzustand mit dem Ist-Zustand und ändert beim zweiten Lauf nichts.
</details>

<details><summary>2. Deine VM startet, aber nginx ist nicht installiert. Was prüfst du?</summary>

Ob die erste Zeile `#cloud-config` lautet, ob die YAML-Einrückung stimmt, und das Log `/var/log/cloud-init-output.log`.
</details>

<details><summary>3. Du änderst die cloud-init-Datei und startest die bestehende VM neu. Was passiert?</summary>

Nichts. cloud-init läuft nur beim ersten Start. Du musst die VM neu erstellen.
</details>

<details><summary>4. Was macht `az bicep build --file main.bicep`?</summary>

Es übersetzt die Bicep-Datei in ein ARM-Template (`main.json`). Das ist die Form, die der Azure Resource Manager versteht.
</details>

<details><summary>5. Warum gehört `apt install nginx` nicht in `runcmd`?</summary>

Dafür gibt es den Block `packages`. Er ist lesbarer und läuft an der richtigen Stelle des Startvorgangs.
</details>

## Quellen
- TBZ M346: [Infrastructure as Code](https://gitlab.com/ch-tbz-it/Stud/m346/m346/-/blob/main/Theorie/InfrastructureAsCode.md), [Cloud-init](https://gitlab.com/ch-tbz-it/Stud/m346/m346/-/blob/main/Theorie/CloudInit.md) (Texte übernommen und für Azure angepasst)
- Microsoft Learn: [Einführung in die Infrastruktur als Code mit Bicep](https://learn.microsoft.com/de-de/training/modules/introduction-to-infrastructure-as-code-using-bicep/)
- Microsoft Learn: [Was ist Bicep?](https://learn.microsoft.com/de-de/azure/azure-resource-manager/bicep/overview)
- Microsoft Learn: [cloud-init-Unterstützung für VMs in Azure](https://learn.microsoft.com/de-de/azure/virtual-machines/linux/using-cloud-init)
- cloud-init: [Dokumentation und Beispiele](https://cloudinit.readthedocs.io/en/latest/reference/examples.html)

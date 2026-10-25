---
name: azure-kurs-kanton-zh
description: Kursrahmen für den 5-Tage-Kurs «Einführung in Cloud Computing mit Microsoft Azure» (Kanton Zürich, ICT-Lernende). Verwenden bei jeder Kursunterlage, jedem Tagespaket, Lektionsplan, Lab oder Quiz für diesen Kurs.
---

# Azure-Kurs Kanton Zürich

## Eckdaten
- Auftraggeber: Kanton Zürich
- Zielgruppe: ICT-Fachleute EFZ (ICT-Fachfrau/ICT-Fachmann). Stärken bei Endgeräten und Support, wenig Erfahrung mit Servern, Linux und Kommandozeile. Niveau deutlich unter Informatiker/in Plattformentwicklung (Vorlage TBZ M346 deshalb vereinfachen). Regeln siehe CLAUDE.md, Abschnitt «Niveau der Zielgruppe».
- Dauer: 5 Tage, je ca. 8 Lektionen à 45 Minuten.
- Azure-Zugang: Azure for Students (siehe Skill `azure-hands-on-labs` für Grenzen).

## Kursziele
Vertraglich vereinbart (Offerte vom 10.03.2026 = Vertragsgrundlage). Nach dem Kurs können die Lernenden:
1. Virtualisierung, virtuelle Maschinen und Hypervisoren erklären und die Grundprinzipien von Cloud-Plattformen beschreiben.
2. die Betriebsmodelle IaaS, PaaS und SaaS einordnen und Beispiele zuordnen.
3. die zentralen Azure-Ressourcen in Storage, Compute und Network im Überblick erklären.
4. einfache Azure-Umgebungen (Storage Account, VM, VNet, Subnetz, NSG) bereitstellen, konfigurieren und wieder löschen.
5. eine VM automatisiert mit Scripting, ARM/Bicep und Cloud-Init bereitstellen.

Nicht im Vertragsumfang (höchstens als Ausblick oder ⭐-Zusatzaufgabe): App Service, Entra ID/RBAC, Budgets, Monitoring, kundenspezifische Tenant-Konfiguration.

## Tagesplan
Schwerpunkte und Reihenfolge sind vertraglich festgelegt; Hauptübungen sind ein Vorschlag.
| Tag | Schwerpunkt (Vertrag) | Leistungsform | Inhalte | Hauptübung |
|-----|----------------------|---------------|---------|-----------|
| 1 | Grundlagen Virtualisierung | Theorie, Demo, erste Übungen | Hypervisor Typ 1/2, Funktionsweise VM, lokale VM installieren; optional Container/Docker | Lokale Linux-VM installieren (z. B. Hyper-V oder VirtualBox), ⭐ erster Docker-Container |
| 2 | Public Cloud und Azure Grundlagen | Input, Guided Labs | Vom Hypervisor zum Hyperscaler, IaaS/PaaS/SaaS, Azure-Aufbau (Regionen, Abonnements, Ressourcengruppen), Portal, Cloud Shell, Azure CLI | Azure for Students aktivieren, Ressourcengruppe mit Tags, erste CLI-Befehle |
| 3 | Azure Compute und Storage | Hands-On und Coaching | Azure VM (Grössen, Images, SSH, Kosten), Storage Account, Blob | Linux-VM im Portal und per CLI, Storage Account mit Blob-Container |
| 4 | Azure Networking | Hands-On und Vertiefung | VNet, Address Space, Subnetting (CIDR), NSG: Filtern nach Port und IP-Adresse | VNet mit zwei Subnetzen, NSG-Regeln testen |
| 5 | Automatisierung mit Bicep und Cloud-Init | Praxis, Zusammenführung, Abschluss | Scripting, Infrastructure as Code, ARM-Templates/Bicep, Cloud-Init | VM mit VNet/NSG per Bicep + Cloud-Init; Abschlussprojekt in Zweiergruppen |

Microsoft-Learn-Module gezielt einbinden (vertraglich vorgesehen), ergänzt durch eigene Aufgaben und Lösungen.

## Grundsätze
- **Hands-on zuerst:** ca. 70 % der Zeit arbeiten die Lernenden selbst an Aufträgen. Die Kursleitung coacht.
- **Inputs nur zu wichtigen Themen:** 2–3 pro Tag, höchstens 20 Minuten, immer mit Live-Demo. In der Tagesplanung erscheinen sie nur als Zeile «**Input:** Thema»; Zeitpunkt, Dauer und Folien stehen in `loesungen/kursleitung.md`.
- **Azure for Students ist bereits aktiv.** Zusätzlich setzt die Kursleitung Labs im Azure Education Hub ein.
- **Entra ID nur über Challenge Labs:** Themen mit Microsoft Entra ID (RBAC, Conditional Access, Benutzer, Gruppen) nie im Student-Abo üben, sondern über die Challenge Labs von Microsoft Learn for Educators (Learn on Demand / Skillable, Trainingsschlüssel der Kursleitung). Vorbild: TBZ-Auftrag «Role based access control». Da Identity nicht im Vertragsumfang ist: nur als ⭐-Zusatz.
- **Lösungen getrennt:** Lösungen liegen nie im selben Ordner wie die Aufträge, sondern unter `loesungen/`.
- **Branding:** Der Kurs ist von PAT Cloud Solutions und soll das zeigen (siehe unten).

## Tagespaket
Für jeden Tag entstehen:
1. `kurs/tag-<n>.md` – Tagesplanung **für die Lernenden** (Übersicht und Transparenz, keine Didaktik-Begriffe wie AVIVA). Aufbau:
   «Darum geht es heute» (2–3 Sätze) → «Am Ende des Tages kannst du …» (K-Stufe) → «So läuft der Tag» (Lektion | Was passiert | Was du tust; Inputs fett) → «Deine Aufträge» (Tabelle mit ☐, Zeit, Form) → «Ins Lernjournal gehört heute» → «Bevor du gehst» (Aufräumen, Exit-Ticket als Checkliste) → «Das brauchst du» → «Zum Nachlesen» (Theorie, Folien, Learn).
   Angaben nur für die Kursleitung (Input-Zeitpunkte, Folien, Vorbereitung) stehen in `loesungen/kursleitung.md`.
2. `auftraege/tag-<n>/<n>.<m>-<kurzthema>.md` – ein Auftrag pro Datei (Vorlage im Skill `azure-hands-on-labs`)
3. `loesungen/tag-<n>/<n>.<m>-<kurzthema>.md` – gleicher Dateiname wie der Auftrag: Lösung, typische Fehler, Hinweise für die Kursleitung
4. später: Quiz pro Tag (8–12 Fragen)

## Ordnerstruktur und Dateinamen
```
README.md                Kursübersicht mit Banner
kurs/                    organisation.md, tag-1.md … tag-5.md
theorie/                 Kapitel 01–07 (zusammenfassend), img/ eigene Diagramme, img/tbz/ TBZ-Grafiken
auftraege/tag-<n>/       Aufträge für Lernende
loesungen/tag-<n>/       Lösungen, gleiche Dateinamen wie Aufträge
abschlussprojekt/        auftrag.md, bewertungsraster.md (Lösung unter loesungen/)
assets/branding/         Logo, Banner, Wolke
```
- Dateinamen klein, Bindestriche, keine Umlaute (`ae`, `oe`, `ue`).
- Aufträge nummeriert `<tag>.<nr>`, Zusatzaufträge mit ⭐ im Titel.

## Theorie-Unterlagen
- Ein Kapitel pro Thema (`theorie/<nn>-<thema>.md`), zusammenfassend, verlinkt aus den Inputs der Tagesplanung.
- Aufbau: Lernziele (K-Stufe) → Inhalt mit Tabellen, Alltagsvergleich und Grafiken → Selbsttest mit `<details>` → Quellen.
- **TBZ-Material (M346, M347)** darf übernommen werden (Erlaubnis liegt vor). Ausnahme: Bilder, die erkennbar von Dritten stammen (fremde Logos, Wasserzeichen, bekannte Web-Grafiken) – diese selbst neu zeichnen. Immer Herkunft unter der Grafik (`<sub>Grafik: TBZ M346</sub>`) und in den Quellen angeben. AWS-Begriffe auf Azure umschreiben.
- **Eigene Diagramme** als SVG im PAT-Stil, erzeugt mit `tools/diagramme.py` (`python tools/diagramme.py theorie/img`; weisser Hintergrund, Markenfarben, blauer Balken unten). Vor dem Einbinden mit `tools/render.sh <ausgabeordner> <svg>…` (headless Chrome) als PNG rendern und visuell prüfen. PNGs nicht ins Repo.
- Bilder von Microsoft Learn nicht kopieren, nur verlinken.

## Präsentationen
- Pro Tag eine Präsentation (`praesentationen/tag-<n>-<thema>.pptx`): Titel, Rückblick-Quiz, Ziele, Ablauf, Aufträge, Abschluss mit Exit-Ticket, Ausblick.
- Pro Theorie-Kapitel eine Input-Präsentation (`praesentationen/input-<nn>-<thema>.pptx`): Diagramme aus `theorie/img`, Alltagsvergleich, Selbsttest (Antworten in den Sprechernotizen), Quellen, «Jetzt du»-Folie.
- Nie von Hand bearbeiten: Inhalte in `tools/praesentationen-inhalt.js` ändern und neu erzeugen (Anleitung `tools/README.md`). Danach PNG-Export mit PowerPoint und Sichtprüfung.
- Folienregeln: Titel links, keine Akzentlinien unter Titeln, Fliesstext mind. 16 pt, eine Botschaft pro Folie, Sprechernotizen für die Kursleitung.

## Branding PAT Cloud Solutions
- README und Seiten in `kurs/` beginnen mit dem Banner `assets/branding/kurs-banner.svg`.
- Aufträge und Lösungen beginnen mit der Kopfzeile `<sub>PAT Cloud Solutions · Einführung in Cloud Computing mit Microsoft Azure · Tag <n></sub>`.
- Farben: #27303A (dunkel), #006FAD (blau), #DEE2FB (hell), #6F6F6F, #F7F7F7, #0E0E0E. Schrift: Righteous (Titel).
- Das Original-Logo ist schwarz (#0E0E0E) und im Dark Mode unsichtbar. Darum das Banner mit dunklem Hintergrund verwenden.
- Fusszeile im README: © PAT Cloud Solutions, Nutzung gemäss Vertrag.
- Banner und `<sub>`-Kopfzeile sind nur für die GitHub-Ansicht. Auf der Website (MkDocs) entfernt `tools/website/hooks.py` sie automatisch, weil Logo und Titel dort in der Kopfzeile stehen. Trotzdem in jede neue Datei einfügen.

## Schreibregeln
- Schweizer Hochdeutsch mit «ss», Du-Form.
- Fachbegriffe: Deutsch (Englisch) beim ersten Auftreten pro Seite, danach Deutsch – Glossar und Ausnahmen in CLAUDE.md und `tools/begriffe.py`.
- Oben: Titel, Kurstag, Stand-Datum (nicht bei Aufträgen), Dauer, Lernziele.
- Unten: Quellen mit Link (Microsoft Learn bevorzugt).
- Screenshots als Platzhalter: `![Beschreibung](bilder/tag<n>-<name>.png)` mit Hinweis, was der Screenshot zeigen soll.

## Vertragliche Punkte für jede Unterlage
- **Kosten:** Azure-Verbrauchskosten sind nicht im Pauschalpreis. Jedes Lab endet mit einem Aufräumschritt (Ressourcengruppe löschen). Keine Dienste, die das Student-Guthaben schnell aufbrauchen.
- **Datenschutz:** Keine echten oder besonders schützenswerten Personendaten und keine produktiven Geheimnisse in Labs; fiktive Namen und Firmen verwenden. Keine Screenshots mit Personendaten.
- **Rechte:** Unterlagen bleiben Eigentum des Auftragnehmers; der Auftraggeber erhält ein einfaches Nutzungsrecht für interne Schulung. Microsoft-Learn- und Drittinhalte nur mit Quellenangabe, Bilder mit klarer Lizenz.
- **Umfang:** Nur Inhalte aus dem Tagesplan oben. Zusätzliche Themen nur als Ausblick, sonst braucht es eine schriftliche Vereinbarung.

## Abgabe-Checkliste
- [ ] Quellen vorhanden; Stand-Datum vorhanden (ausser bei Aufträgen)
- [ ] Kein «ß», durchgehend Du-Form
- [ ] Lernziele mit K-Stufe formuliert
- [ ] Lab enthält Voraussetzungen, Zeitbedarf, Aufräumschritt
- [ ] Alle Befehle in Azure for Students lauffähig (Region, VM-Grösse)
- [ ] Musterlösung getrennt von Aufgaben
- [ ] Keine Personendaten, keine vertraulichen Auftraggeber-Infos

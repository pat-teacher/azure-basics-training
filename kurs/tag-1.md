<img src="../assets/branding/kurs-banner.svg" alt="PAT Cloud Solutions" width="100%">

# Tag 1: Grundlagen Virtualisierung

Stand: 25.10.2026 · 8 Lektionen · heute noch ohne Azure, nur auf deinem Laptop

## Darum geht es heute
Bevor du in die Cloud gehst, lernst du, was dahintersteckt: **virtuelle Maschinen (VMs)**. Du erstellst heute selbst VMs auf deinem Laptop – zuerst von Hand, dann automatisch mit einer Datei. Du misst, wie viel Zeit dir die Automatisierung spart. Am Schluss bereitest du deinen SSH-Schlüssel für die Cloud vor.

## Am Ende des Tages kannst du …
- erklären, was ein Hypervisor macht, und Typ 1 und Typ 2 zuordnen. (K2)
- mit Multipass eine VM erstellen, starten, stoppen und löschen. (K3)
- einer VM CPU, RAM und Festplatte zuweisen und es prüfen. (K3)
- eine VM von Hand und automatisch mit einer cloud-init-Datei einrichten. (K3)
- ein SSH-Schlüsselpaar erstellen. (K3)
- ⭐ den Unterschied zwischen VM und Container beschreiben. (K2)

## So läuft der Tag

| Lektion | Was passiert | Was du tust |
|---------|--------------|-------------|
| L1 | **Kurseinführung:** Ziel und Aufbau des Kurses | dich vorstellen, zuhören, Fragen stellen |
| L1 | Einstieg Tag 1: Was weisst du schon? | erzählen, was du über VMs schon weisst |
| L1 | **Input:** Was ist Virtualisierung? | zuhören, Fragen stellen |
| L2 | [Auftrag 1.0](../auftraege/tag-1/1.0-lernjournal.md) | allein: Repository für dein Lernjournal anlegen |
| L2–L3 | [Auftrag 1.1](../auftraege/tag-1/1.1-hypervisor-und-dein-laptop.md) | mit Partner: Laptop prüfen, Hypervisoren zuordnen |
| L3 | **Demo:** Multipass | zuschauen |
| L3–L4 | [Auftrag 1.2](../auftraege/tag-1/1.2-multipass-und-erste-vm.md) und [1.3](../auftraege/tag-1/1.3-ressourcen-einer-vm.md) | allein: Multipass installieren, erste VMs erstellen |
| L5 | [Auftrag 1.4](../auftraege/tag-1/1.4-server-von-hand.md) | allein: Server von Hand einrichten, Zeit messen |
| L5 | **Input:** Automatisch statt von Hand – cloud-init | zuhören |
| L6 | [Auftrag 1.5](../auftraege/tag-1/1.5-erste-automatische-vm.md) | allein: VM mit cloud-init erstellen, prüfen und vergleichen |
| L7 | **Kurz-Input:** SSH-Schlüssel | zuhören |
| L7 | [Auftrag 1.6](../auftraege/tag-1/1.6-ssh-schluessel.md), ⭐ [1.7](../auftraege/tag-1/1.7-container-mit-docker.md) | allein: Schlüsselpaar (Key Pair) erstellen; Schnelle: Docker |
| L8 | Zeit zum Fertigmachen | offene Aufträge abschliessen (vor allem 1.6) |
| L8 | Abschluss und Ausblick auf Tag 2 | aufräumen, Exit-Ticket ausfüllen |

## Deine Aufträge

| ✓ | Nr. | Auftrag | Zeit | Form |
|---|-----|---------|------|------|
| ☐ | 1.0 | [Dein Lernjournal auf GitHub oder GitLab](../auftraege/tag-1/1.0-lernjournal.md) | 25 Min. | allein |
| ☐ | 1.1 | [Hypervisor und dein Laptop](../auftraege/tag-1/1.1-hypervisor-und-dein-laptop.md) | 30 Min. | Partner |
| ☐ | 1.2 | [Multipass und deine erste VM](../auftraege/tag-1/1.2-multipass-und-erste-vm.md) | 60 Min. | allein |
| ☐ | 1.3 | [Wie viel CPU und RAM bekommt eine VM?](../auftraege/tag-1/1.3-ressourcen-einer-vm.md) | 30 Min. | allein |
| ☐ | 1.4 | [Einen Server von Hand einrichten](../auftraege/tag-1/1.4-server-von-hand.md) | 25 Min. | allein |
| ☐ | 1.5 | [Deine erste automatische VM mit cloud-init](../auftraege/tag-1/1.5-erste-automatische-vm.md) | 45 Min. | allein |
| ☐ | 1.6 | [SSH-Schlüssel für die Cloud vorbereiten](../auftraege/tag-1/1.6-ssh-schluessel.md) | 20 Min. | allein |
| ☐ | ⭐ 1.7 | [Container mit Docker](../auftraege/tag-1/1.7-container-mit-docker.md) | 30 Min. | allein, freiwillig |

## Ins Lernjournal gehört heute
In dein Repository `lernjournal-azure`, Ordner `tag-1`, pro Auftrag ein Unterordner (siehe [Auftrag 1.0](../auftraege/tag-1/1.0-lernjournal.md)):
- dein erster Eintrag mit Screenshot der Mitgliederliste (1.0)
- deine Laptop-Werte und die Zuordnung Typ 1 / Typ 2 (1.1)
- Screenshot von `multipass list` (1.2)
- die Tabelle mit CPU, RAM und Festplatte (1.3)
- deine gemessene Zeit für den Server von Hand (1.4)
- deine cloud-init-Datei, der Nachweis, dass sie gewirkt hat, und die Vergleichstabelle (1.5)
- Screenshot deines öffentlichen Schlüssels (1.6)

## Bevor du gehst
- [ ] Alle VMs gelöscht: `multipass delete --purge --all`, dann zeigt `multipass list` `No instances found.`
- [ ] SSH-Schlüssel **nicht** gelöscht – du brauchst ihn an Tag 3. Bis dahin vergeht etwas Zeit: Lass den Ordner `.ssh` auf deinem Laptop unverändert.
- [ ] Erkenntnisse des Tages in `tag-1/README.md` eingetragen.
- [ ] [Exit-Ticket](organisation.md#exit-ticket) ausgefüllt: «Was ist der grösste Unterschied zwischen deiner VM und einer VM in der Cloud?»

## Das brauchst du
- Zugang zu deinem E-Mail-Postfach (für das Konto bei GitHub oder GitLab)
- Laptop mit Windows Pro oder Education, Virtualisierung aktiviert
- Recht, Programme zu installieren (für Multipass)
- Internet (Multipass lädt Ubuntu selbst herunter)

## Zum Nachlesen
- Theorie: [1 Virtualisierung](../theorie/01-virtualisierung.md)
- Folien: [Kurseinführung](../praesentationen/kurs-einfuehrung.pptx) · [Tag 1](../praesentationen/tag-1-virtualisierung.pptx) · [Input Virtualisierung](../praesentationen/input-01-virtualisierung.pptx)
- Lösungen zum Vergleichen: [Lösungen Tag 1](../loesungen/tag-1/)

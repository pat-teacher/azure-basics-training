<img src="../assets/branding/kurs-banner.svg" alt="PAT Cloud Solutions" width="100%">

# Tag 1: Grundlagen Virtualisierung

Stand: 19.10.2026 · 8 Lektionen · heute noch ohne Azure, nur auf deinem Laptop

## Darum geht es heute
Bevor du in die Cloud gehst, lernst du, was dahintersteckt: **virtuelle Maschinen (VMs)**. Du erstellst heute selbst VMs auf deinem Laptop – zuerst von Hand mit einem Befehl, dann automatisch mit einer Datei. Am Schluss bereitest du deinen SSH-Schlüssel für die Cloud vor.

## Am Ende des Tages kannst du …
- erklären, was ein Hypervisor macht, und Typ 1 und Typ 2 zuordnen. (K2)
- mit Multipass eine VM erstellen, starten, stoppen und löschen. (K3)
- einer VM CPU, RAM und Festplatte zuweisen und es prüfen. (K3)
- eine VM mit einer cloud-init-Datei automatisch einrichten. (K3)
- ein SSH-Schlüsselpaar erstellen. (K3)
- ⭐ den Unterschied zwischen VM und Container beschreiben. (K2)

## So läuft der Tag

| Lektion | Was passiert | Was du tust |
|---------|--------------|-------------|
| L1 | Start: Kurs, Woche, Lernjournal | Lernjournal anlegen |
| L1 | **Input:** Was ist Virtualisierung? | zuhören, Fragen stellen |
| L2 | [Auftrag 1.1](../auftraege/tag-1/1.1-hypervisor-und-dein-laptop.md) | mit Partner: Laptop prüfen, Hypervisoren zuordnen |
| L2 | **Demo:** Multipass | zuschauen |
| L3–L4 | [Auftrag 1.2](../auftraege/tag-1/1.2-multipass-und-erste-vm.md) und [1.3](../auftraege/tag-1/1.3-ressourcen-einer-vm.md) | allein: Multipass installieren, erste VMs erstellen |
| L5 | **Input:** Automatisch statt von Hand – cloud-init | zuhören |
| L5–L6 | [Auftrag 1.4](../auftraege/tag-1/1.4-erste-automatische-vm.md) | allein: VM mit cloud-init erstellen und prüfen |
| L7 | **Kurz-Input:** SSH-Schlüssel | zuhören |
| L7 | [Auftrag 1.5](../auftraege/tag-1/1.5-ssh-schluessel.md), ⭐ [1.6](../auftraege/tag-1/1.6-container-mit-docker.md) | allein: Schlüsselpaar (Key Pair) erstellen; Schnelle: Docker |
| L8 | **Input:** Vom Hypervisor zum Hyperscaler | zuhören |
| L8 | Abschluss | aufräumen, Exit-Ticket ausfüllen |

## Deine Aufträge

| ✓ | Nr. | Auftrag | Zeit | Form |
|---|-----|---------|------|------|
| ☐ | 1.1 | [Hypervisor und dein Laptop](../auftraege/tag-1/1.1-hypervisor-und-dein-laptop.md) | 30 Min. | Partner |
| ☐ | 1.2 | [Multipass und deine erste VM](../auftraege/tag-1/1.2-multipass-und-erste-vm.md) | 60 Min. | allein |
| ☐ | 1.3 | [Wie viel CPU und RAM bekommt eine VM?](../auftraege/tag-1/1.3-ressourcen-einer-vm.md) | 30 Min. | allein |
| ☐ | 1.4 | [Deine erste automatische VM mit cloud-init](../auftraege/tag-1/1.4-erste-automatische-vm.md) | 60 Min. | allein |
| ☐ | 1.5 | [SSH-Schlüssel für die Cloud vorbereiten](../auftraege/tag-1/1.5-ssh-schluessel.md) | 20 Min. | allein |
| ☐ | ⭐ 1.6 | [Container mit Docker](../auftraege/tag-1/1.6-container-mit-docker.md) | 30 Min. | allein, freiwillig |

## Ins Lernjournal gehört heute
- deine Laptop-Werte und die Zuordnung Typ 1 / Typ 2 (1.1)
- Screenshot von `multipass list` (1.2)
- die Tabelle mit CPU, RAM und Festplatte (1.3)
- deine cloud-init-Datei und der Nachweis, dass sie gewirkt hat (1.4)
- Screenshot deines öffentlichen Schlüssels (1.5)

## Bevor du gehst
- [ ] Alle VMs gelöscht: `multipass delete --purge --all`, dann zeigt `multipass list` `No instances found.`
- [ ] SSH-Schlüssel **nicht** gelöscht – du brauchst ihn an Tag 3.
- [ ] [Exit-Ticket](organisation.md#exit-ticket) ausgefüllt: «Was ist der grösste Unterschied zwischen deiner VM und einer VM in der Cloud?»

## Das brauchst du
- Laptop mit Windows Pro oder Education, Virtualisierung aktiviert
- Recht, Programme zu installieren (für Multipass)
- Internet (Multipass lädt Ubuntu selbst herunter)

## Zum Nachlesen
- Theorie: [1 Virtualisierung](../theorie/01-virtualisierung.md), [2 Cloud-Grundlagen](../theorie/02-cloud-grundlagen.md) (Input am Schluss)
- Folien: [Tag 1](../praesentationen/tag-1-virtualisierung.pptx) · [Input Virtualisierung](../praesentationen/input-01-virtualisierung.pptx) · [Input Cloud-Grundlagen](../praesentationen/input-02-cloud-grundlagen.pptx)
- Lösungen zum Vergleichen: [Lösungen Tag 1](../loesungen/tag-1/)

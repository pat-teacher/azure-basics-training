<img src="../assets/branding/kurs-banner.svg" alt="PAT Cloud Solutions" width="100%">

# Tag 1: Grundlagen Virtualisierung

Stand: 19.10.2026 · 8 Lektionen · ohne Azure

## Ziele des Tages
- Du kannst erklären, was ein Hypervisor macht, und Typ 1 und Typ 2 zuordnen. (K2)
- Du kannst mit Multipass eine VM erstellen, starten, stoppen und löschen. (K3)
- Du kannst einer VM CPU, RAM und Festplatte zuweisen und es prüfen. (K3)
- Du kannst eine VM mit einer cloud-init-Datei automatisch einrichten. (K3)
- Du kannst ein SSH-Schlüsselpaar erstellen. (K3)
- ⭐ Du kannst den Unterschied zwischen VM und Container beschreiben. (K2)

## Ablauf

| Lektion | Phase (AVIVA) | Inhalt | Form | Material |
|---------|---------------|--------|------|----------|
| L1 | **A**nkommen | Begrüssung, Kursziele, Ablauf der Woche, Lernjournal einrichten | Plenum | [Organisation](organisation.md) |
| L1 | **V**orwissen aktivieren (5') | Kurzumfrage: Wer hat schon eine VM benutzt? Wo laufen Server in deinem Lehrbetrieb? | Plenum | Umfrage |
| L1 | **I**nformieren 1 (15') | **Was ist Virtualisierung?** Hardware, Hypervisor, VM; Typ 1 und Typ 2 | Input + Demo | [Theorie 1](../theorie/01-virtualisierung.md) |
| L2 | **V**erarbeiten | [Auftrag 1.1: Hypervisor und dein Laptop](../auftraege/tag-1/1.1-hypervisor-und-dein-laptop.md) | Partner | Laptop |
| L2 | **I**nformieren 2 (10') | **Live-Demo Multipass:** `launch`, `list`, `shell`, `delete` | Demo | – |
| L3–L4 | **V**erarbeiten | [Auftrag 1.2: Multipass und deine erste VM](../auftraege/tag-1/1.2-multipass-und-erste-vm.md) | Einzel | Multipass |
| L4 | **V**erarbeiten | [Auftrag 1.3: Wie viel CPU und RAM bekommt eine VM?](../auftraege/tag-1/1.3-ressourcen-einer-vm.md) | Einzel | |
| L5 | **I**nformieren 3 (15') | **Automatisch statt von Hand:** Was ist cloud-init? Aufbau der Datei | Input + Demo | [Theorie 1](../theorie/01-virtualisierung.md#automatisch-einrichten-mit-cloud-init) |
| L5–L6 | **V**erarbeiten | [Auftrag 1.4: Deine erste automatische VM mit cloud-init](../auftraege/tag-1/1.4-erste-automatische-vm.md) | Einzel | Notepad |
| L7 | **V**erarbeiten | [Auftrag 1.5: SSH-Schlüssel für die Cloud vorbereiten](../auftraege/tag-1/1.5-ssh-schluessel.md) | Einzel | |
| L7 | ⭐ **V**erarbeiten | [Auftrag 1.6: Container mit Docker](../auftraege/tag-1/1.6-container-mit-docker.md) | Einzel | |
| L8 | **I**nformieren 4 (15') | **Vom Hypervisor zum Hyperscaler:** Was passiert, wenn man tausende Hypervisoren zusammenschaltet? Brücke zu Tag 2 | Input | [Theorie 2](../theorie/02-cloud-grundlagen.md) |
| L8 | **A**uswerten | Aufräumen, Quiz *(folgt)*, Exit-Ticket: «Was ist der grösste Unterschied zwischen deiner VM und einer VM in der Cloud?» | Einzel | |

**Aufräumen am Tagesende:** `multipass list` – alle VMs löschen mit `multipass delete --purge --all`. Den SSH-Schlüssel (`~\.ssh`) **behalten**.

## Präsentationen
- Tagesablauf: [tag-1-virtualisierung.pptx](../praesentationen/tag-1-virtualisierung.pptx)
- Input: [input-01-virtualisierung.pptx](../praesentationen/input-01-virtualisierung.pptx)
- Input: [input-02-cloud-grundlagen.pptx](../praesentationen/input-02-cloud-grundlagen.pptx)

## Vorbereitung Kursleitung
Wenig Aufwand – es müssen keine Dateien verteilt werden. Multipass lädt Ubuntu selbst herunter.
- Mit dem Auftraggeber klären: Windows **Pro/Education/Enterprise** auf den Laptops und **Adminrechte**, um Multipass zu installieren (oder Multipass vorinstallieren lassen). <!-- prüfen: mit Auftraggeber klären -->
- Vor dem Kurs auf einem Kurs-Laptop einmal Auftrag 1.2 durchspielen (Netzwerk, Proxy, Firewall).
- Beim ersten `launch` laden alle gleichzeitig ca. 600 MB – evtl. gestaffelt starten lassen.

## Quellen
- Microsoft Azure: [Was ist Virtualisierung?](https://azure.microsoft.com/de-de/resources/cloud-computing-dictionary/what-is-virtualization)
- Canonical: [Multipass-Dokumentation](https://documentation.ubuntu.com/multipass/en/latest/)
- TBZ M346: [KN01 Virtualisierung & erste automatisierte VM](https://gitlab.com/ch-tbz-it/Stud/m346/m346/-/blob/main/Kompetenznachweise/KN01.md) (Vorlage, für ICT-Fachleute vereinfacht)

## Lösungen
Für die Kursleitung und zum Vergleichen: [loesungen/tag-1/](../loesungen/tag-1/)

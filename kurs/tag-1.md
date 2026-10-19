<img src="../assets/branding/kurs-banner.svg" alt="PAT Cloud Solutions" width="100%">

# Tag 1: Grundlagen Virtualisierung

Stand: 19.10.2026 · 8 Lektionen · ohne Azure

## Ziele des Tages
- Du kannst erklären, was ein Hypervisor macht, und Typ 1 von Typ 2 unterscheiden. (K2)
- Du kannst auf deinem Laptop eine Linux-VM installieren und ihre Ressourcen (CPU, RAM, Disk) festlegen. (K3)
- Du kannst die Netzwerkmodi NAT und Bridge vergleichen und dich per SSH mit deiner VM verbinden. (K3/K4)
- Du kannst mit Snapshots einen früheren Zustand der VM wiederherstellen. (K3)
- ⭐ Du kannst den Unterschied zwischen VM und Container beschreiben. (K2)

## Ablauf

| Lektion | Phase (AVIVA) | Inhalt | Form | Material |
|---------|---------------|--------|------|----------|
| L1 | **A**nkommen | Begrüssung, Kursziele, Ablauf der Woche, Lernjournal einrichten | Plenum | [Organisation](organisation.md) |
| L1 | **V**orwissen aktivieren (5') | Kurzumfrage: Wer hat schon eine VM, VirtualBox oder Docker benutzt? Wo laufen VMs in deinem Lehrbetrieb? | Plenum | Umfrage |
| L1 | **I**nformieren 1 (15') | **Was ist Virtualisierung?** Physische Hardware vs. VM, Hypervisor Typ 1 / Typ 2, Beispiele | Input + Demo | [Theorie 1](../theorie/01-virtualisierung.md) |
| L2 | **V**erarbeiten | [Auftrag 1.1: Hypervisor und dein Laptop](../auftraege/tag-1/1.1-hypervisor-und-dein-laptop.md) | Partner | Laptop |
| L3–L4 | **V**erarbeiten | [Auftrag 1.2: Ubuntu-Server-VM installieren](../auftraege/tag-1/1.2-ubuntu-vm-installieren.md) | Einzel | ISO, VirtualBox |
| L5 | **I**nformieren 2 (15') | **VM-Netzwerk:** NAT, Bridge, Host-only; Portweiterleitung; SSH-Schlüssel | Input + Demo | [Theorie 1](../theorie/01-virtualisierung.md#netzwerk-einer-lokalen-vm), [SSH](../theorie/04-azure-compute.md#anmelden-mit-ssh-schlüssel) |
| L5–L6 | **V**erarbeiten | [Auftrag 1.3: Netzwerk und SSH](../auftraege/tag-1/1.3-netzwerk-und-ssh.md) | Einzel, Partner für Tests | |
| L7 | **V**erarbeiten | [Auftrag 1.4: Snapshot, Klon und Ressourcen](../auftraege/tag-1/1.4-snapshot-und-klon.md) | Einzel | |
| L7 | ⭐ **V**erarbeiten | [Auftrag 1.5: Container mit Docker](../auftraege/tag-1/1.5-container-mit-docker.md) | Einzel | |
| L8 | **I**nformieren 3 (15') | **Vom Hypervisor zum Hyperscaler:** Was passiert, wenn man tausende Hypervisoren zusammenschaltet? Brücke zu Tag 2 | Input | [Theorie 2](../theorie/02-cloud-grundlagen.md) |
| L8 | **A**uswerten | Aufräumen (Auftrag 1.4, Schritt 7), Quiz *(folgt)*, Exit-Ticket: «Was ist der grösste Unterschied zwischen deiner VM und einer VM in der Cloud?» | Einzel | |

## Präsentationen
- Tagesablauf: [tag-1-virtualisierung.pptx](../praesentationen/tag-1-virtualisierung.pptx)
- Input: [input-01-virtualisierung.pptx](../praesentationen/input-01-virtualisierung.pptx)
- Input: [input-02-cloud-grundlagen.pptx](../praesentationen/input-02-cloud-grundlagen.pptx)

## Vorbereitung Kursleitung
- VirtualBox oder Hyper-V auf den Laptops <!-- prüfen: mit Auftraggeber klären, ob Installationsrechte vorhanden sind -->
- ISO-Datei Ubuntu Server LTS auf USB-Sticks (ca. 3 GB)
- Client-Isolation im Schul-WLAN testen (Auftrag 1.3, Teil C) <!-- prüfen -->

## Quellen
- Microsoft Azure: [Was ist Virtualisierung?](https://azure.microsoft.com/de-de/resources/cloud-computing-dictionary/what-is-virtualization)
- Microsoft Learn: [Einführung in Hyper-V unter Windows](https://learn.microsoft.com/de-de/virtualization/hyper-v-on-windows/about/)

## Lösungen
Für die Kursleitung und zum Vergleichen: [loesungen/tag-1/](../loesungen/tag-1/)

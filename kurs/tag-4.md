<img src="../assets/branding/kurs-banner.svg" alt="PAT Cloud Solutions" width="100%">

# Tag 4: Azure Networking

Stand: 19.10.2026 · 8 Lektionen

## Ziele des Tages
- Du kannst einen Adressraum in Subnetze aufteilen (CIDR). (K3)
- Du kannst ein VNet mit mehreren Subnetzen bereitstellen und VMs darin platzieren. (K3)
- Du kannst mit NSG-Regeln den Verkehr nach Port und IP-Adresse filtern und die Wirkung testen. (K3)
- Du kannst begründen, warum eine Verbindung funktioniert oder blockiert wird. (K4)

## Ablauf

| Lektion | Phase | Inhalt | Form |
|---------|-------|--------|------|
| L1 | Einstieg | Rückblick Tag 3, Quiz | Plenum |
| L1 | Input 1 (20') | **VNet und Subnetting:** Adressraum, CIDR, reservierte Adressen in Azure, private vs. öffentliche IP | Input + Demo |
| L2 | Hands-on | Auftrag 4.1: Subnetting-Training für die «Velo Zürich AG» (Papier/Rechner) | Partner |
| L3 | Hands-on | Auftrag 4.2: VNet mit zwei Subnetzen (`snet-web`, `snet-intern`) | Einzel |
| L4 | Input 2 (15') | **Network Security Groups:** Regeln, Priorität, Standardregeln, NSG am Subnetz vs. an der NIC | Input + Demo |
| L4–L5 | Hands-on | Auftrag 4.3: Zwei VMs im VNet, Ping und SSH zwischen den Subnetzen testen | Partner |
| L6 | Hands-on | Auftrag 4.4: NSG-Regeln – HTTP für alle, SSH nur von der Schul-IP, intern gesperrt | Partner |
| L7 | Hands-on | Auftrag 4.5: Fehlersuche – «Warum komme ich nicht auf meine VM?» (vorbereitete Fehler) | Partner |
| L7 | ⭐ Hands-on | Auftrag 4.6: IP-Flussüberprüfung (Network Watcher) und effektive Sicherheitsregeln | Einzel |
| L7 | ⭐ Hands-on | Auftrag 4.7: Challenge Lab zu bedingtem Zugriff (Conditional Access) (Learn on Demand, siehe [Organisation](organisation.md#themen-mit-microsoft-entra-id-challenge-labs)) <!-- prüfen: passendes Lab im Katalog wählen --> | Partner |
| L8 | Abschluss | Netzplan der eigenen Umgebung zeichnen, aufräumen, Exit-Ticket | Einzel |

## Präsentationen
- Tagesablauf: [tag-4-networking.pptx](../praesentationen/tag-4-networking.pptx)
- Input: [input-06-azure-networking.pptx](../praesentationen/input-06-azure-networking.pptx)

## Theorie
- [6 Azure Networking](../theorie/06-azure-networking.md) (Inputs 1 und 2)

## Material
- Microsoft Learn: [Einführung in Azure Virtual Networks](https://learn.microsoft.com/de-de/training/modules/introduction-to-azure-virtual-networks/)
- Microsoft Learn: [Konfigurieren von Netzwerksicherheitsgruppen](https://learn.microsoft.com/de-de/training/modules/configure-network-security-groups/)

> Aufträge und Lösungen für Tag 4 folgen.

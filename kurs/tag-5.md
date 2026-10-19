<img src="../assets/branding/kurs-banner.svg" alt="PAT Cloud Solutions" width="100%">

# Tag 5: Automatisierung mit Bicep und cloud-init

Stand: 19.10.2026 · 8 Lektionen

## Ziele des Tages
- Du kannst den Unterschied zwischen manueller Bereitstellung, Scripting und Infrastructure as Code erklären. (K2)
- Du kannst eine VM beim Erstellen mit cloud-init automatisch konfigurieren. (K3)
- Du kannst eine Umgebung mit VNet, NSG und VM in Bicep beschreiben und bereitstellen. (K3)
- Du kannst zeigen, dass aus einer Bicep-Datei ein ARM-Template entsteht. (K2)

## Ablauf

| Lektion | Phase | Inhalt | Form |
|---------|-------|--------|------|
| L1 | Einstieg | Rückblick der Woche: Was hast du bisher von Hand gemacht? | Plenum |
| L1 | Input 1 (20') | **Infrastructure as Code:** Script vs. deklarativ, ARM und Bicep, cloud-init | Input + Demo |
| L2 | Hands-on | Auftrag 5.1: Ubuntu-VM mit cloud-init (nginx, eigene Startseite) | Partner |
| L3 | Hands-on | Auftrag 5.2: Erstes Bicep-File – Storage Account; daraus ARM-Template erzeugen und vergleichen | Einzel |
| L4 | Hands-on | Auftrag 5.3: Bicep für VNet, Subnetz und NSG (Infrastruktur von Tag 4 als Code) | Einzel |
| L5–L7 | Abschlussprojekt | **Webserver der «Velo Zürich AG»:** VNet, NSG und VM mit cloud-init vollständig per Bicep, dokumentiert | Partner |
| L8 | Abschluss | Kurzpräsentationen (5' pro Team), Kursfeedback, Aufräumen | Plenum |

## Präsentationen
- Tagesablauf: [tag-5-automatisierung.pptx](../praesentationen/tag-5-automatisierung.pptx)
- Input: [input-07-automatisierung.pptx](../praesentationen/input-07-automatisierung.pptx)

## Theorie
- [7 Automatisierung: Bicep und cloud-init](../theorie/07-automatisierung.md) (Input 1)

## Material
- Visual Studio Code mit Bicep-Erweiterung oder Cloud Shell Editor
- Microsoft Learn: [Einführung in Bicep](https://learn.microsoft.com/de-de/training/modules/introduction-to-infrastructure-as-code-using-bicep/)
- Microsoft Learn: [cloud-init-Unterstützung für VMs in Azure](https://learn.microsoft.com/de-de/azure/virtual-machines/linux/using-cloud-init)

> Aufträge, Abschlussprojekt und Lösungen für Tag 5 folgen.

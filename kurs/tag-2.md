<img src="../assets/branding/kurs-banner.svg" alt="PAT Cloud Solutions" width="100%">

# Tag 2: Public Cloud und Azure Grundlagen

Stand: 19.10.2026 · 8 Lektionen · heute zum ersten Mal in Azure

## Darum geht es heute
Gestern hast du VMs auf deinem Laptop gebaut. Heute siehst du, wie ein Cloud-Anbieter wie Microsoft das im grossen Stil macht. Du lernst, wie Azure aufgebaut ist, und erstellst deine ersten Ressourcen – im Portal und mit der Kommandozeile.

## Am Ende des Tages kannst du …
- IaaS, PaaS und SaaS unterscheiden und Beispiele zuordnen. (K2)
- den Aufbau von Azure erklären: Region, Verfügbarkeitszone (Availability Zone), Abonnement (Subscription), Ressourcengruppe (Resource Group), Ressource. (K2)
- Ressourcen im Azure-Portal und mit der Azure CLI erstellen, finden und löschen. (K3)

## So läuft der Tag

| Lektion | Was passiert | Was du tust |
|---------|--------------|-------------|
| L1 | Rückblick Tag 1 | Quiz mit deinem Partner |
| L1 | **Input:** Vom Hypervisor zum Hyperscaler, IaaS/PaaS/SaaS | zuhören, Fragen stellen |
| L2 | Auftrag 2.1 | mit Partner: Dienste zuordnen |
| L3 | **Input:** Aufbau von Azure, Rundgang durchs Portal | zuhören, mitschauen |
| L3–L4 | Aufträge 2.2 und 2.3 | allein: Abonnement erkunden, erste Ressourcengruppe im Portal |
| L5 | **Input:** Cloud Shell und Azure CLI | zuhören, mittippen |
| L5–L6 | Auftrag 2.4 | allein: Ressourcengruppe mit der CLI |
| L7 | Auftrag 2.5, ⭐ 2.6, ⭐ 2.7 | mit Partner: Regionen recherchieren; Schnelle: Microsoft Learn oder Challenge Lab |
| L8 | Abschluss | aufräumen, Exit-Ticket ausfüllen |

## Deine Aufträge

| ✓ | Nr. | Auftrag | Form |
|---|-----|---------|------|
| ☐ | 2.1 | IaaS, PaaS oder SaaS? Dienste zuordnen *(folgt)* | Partner |
| ☐ | 2.2 | Dein Azure-Abonnement erkunden: Guthaben, erlaubte Regionen, Kosten *(folgt)* | allein |
| ☐ | 2.3 | Erste Ressourcengruppe im Portal mit Tags *(folgt)* | allein |
| ☐ | 2.4 | Dieselbe Ressourcengruppe mit der Azure CLI *(folgt)* | allein |
| ☐ | 2.5 | Azure-Regionen recherchieren *(folgt)* | Partner |
| ☐ | ⭐ 2.6 | Microsoft-Learn-Modul [Kernkomponenten der Azure-Architektur](https://learn.microsoft.com/de-de/training/modules/describe-core-architectural-components-of-azure/) | allein, freiwillig |
| ☐ | ⭐ 2.7 | Challenge Lab «Azure RBAC konfigurieren» ([so geht's](organisation.md#themen-mit-microsoft-entra-id-challenge-labs)) | Partner, freiwillig |

## Ins Lernjournal gehört heute
- deine Zuordnung IaaS/PaaS/SaaS (2.1)
- welche Regionen dein Abonnement erlaubt (2.2)
- Screenshot deiner Ressourcengruppe mit Tags im Portal (2.3)
- die CLI-Befehle, die du verwendet hast (2.4)

## Bevor du gehst
- [ ] Alle Ressourcengruppen von heute gelöscht: `az group list -o table` zeigt keine `rg-tag2-…` mehr.
- [ ] [Exit-Ticket](organisation.md#exit-ticket) ausgefüllt: «Erkläre in zwei Sätzen, was eine Ressourcengruppe ist.»

## Das brauchst du
- Laptop mit Webbrowser
- dein Azure-for-Students-Konto (Login vorher testen: [portal.azure.com](https://portal.azure.com))

## Zum Nachlesen
- Theorie: [2 Cloud-Grundlagen](../theorie/02-cloud-grundlagen.md), [3 Aufbau von Azure](../theorie/03-azure-aufbau.md)
- Folien: [Tag 2](../praesentationen/tag-2-azure-grundlagen.pptx) · [Input Cloud-Grundlagen](../praesentationen/input-02-cloud-grundlagen.pptx) · [Input Aufbau von Azure](../praesentationen/input-03-azure-aufbau.pptx)
- Microsoft Learn: [Beschreiben von Cloud Computing](https://learn.microsoft.com/de-de/training/modules/describe-cloud-compute/)

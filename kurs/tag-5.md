<img src="../assets/branding/kurs-banner.svg" alt="PAT Cloud Solutions" width="100%">

# Tag 5: Automatisierung mit Bicep und cloud-init

Stand: 19.10.2026 · 8 Lektionen

## Darum geht es heute
Diese Woche hast du vieles von Hand gemacht. Heute beschreibst du eine ganze Umgebung in Dateien und stellst sie mit einem einzigen Befehl bereit. Am Nachmittag baust du im Abschlussprojekt den Webserver der «Velo Zürich AG» und stellst ihn kurz vor.

## Am Ende des Tages kannst du …
- erklären, was «Infrastruktur als Code (Infrastructure as Code)» bedeutet. (K2)
- eine VM in Azure beim ersten Start mit cloud-init einrichten. (K3)
- eine Umgebung mit VNet, NSG und VM in Bicep beschreiben und bereitstellen. (K3)
- zeigen, dass aus einer Bicep-Datei ein ARM-Template entsteht. (K2)

## So läuft der Tag

| Lektion | Was passiert | Was du tust |
|---------|--------------|-------------|
| L1 | Rückblick der Woche | sammeln: Was hast du von Hand gemacht? |
| L1 | **Input:** Infrastruktur als Code, Bicep, cloud-init | zuhören, mitschauen |
| L2 | Auftrag 5.1 | mit Partner: VM mit cloud-init in Azure |
| L3 | Auftrag 5.2 | allein: erste Bicep-Datei |
| L4 | Auftrag 5.3 | allein: Netzwerk von Tag 4 als Bicep |
| L5–L7 | Abschlussprojekt | mit Partner: Webserver der «Velo Zürich AG» per Bicep |
| L8 | Präsentationen und Abschluss | 5 Minuten präsentieren, Feedback geben, aufräumen |

## Deine Aufträge

| ✓ | Nr. | Auftrag | Form |
|---|-----|---------|------|
| ☐ | 5.1 | Ubuntu-VM mit cloud-init in Azure *(folgt)* | Partner |
| ☐ | 5.2 | Erste Bicep-Datei: Speicherkonto (Storage Account) *(folgt)* | allein |
| ☐ | 5.3 | Bicep für VNet, Subnetz (Subnet) und NSG *(folgt)* | allein |
| ☐ | Projekt | Webserver der «Velo Zürich AG» *(folgt)* | Partner |

## Ins Lernjournal gehört heute
- deine cloud-init-Datei und deine Bicep-Dateien
- Screenshot der Website deines Abschlussprojekts
- drei Sätze: Was nimmst du aus dieser Woche mit?

## Bevor du gehst
- [ ] **Alle** Ressourcengruppen (Resource Group) der Woche gelöscht: `az group list -o table` ist leer.
- [ ] Kursfeedback ausgefüllt.

## Das brauchst du
- dein Azure-for-Students-Konto und deinen SSH-Schlüssel
- Visual Studio Code mit Bicep-Erweiterung oder den Editor in der Cloud Shell

## Zum Nachlesen
- Theorie: [7 Automatisierung](../theorie/07-automatisierung.md)
- Folien: [Tag 5](../praesentationen/tag-5-automatisierung.pptx) · [Input Automatisierung](../praesentationen/input-07-automatisierung.pptx)
- Microsoft Learn: [Einführung in Bicep](https://learn.microsoft.com/de-de/training/modules/introduction-to-infrastructure-as-code-using-bicep/) · [cloud-init in Azure](https://learn.microsoft.com/de-de/azure/virtual-machines/linux/using-cloud-init)

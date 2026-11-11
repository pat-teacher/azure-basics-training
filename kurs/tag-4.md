<img src="../assets/branding/kurs-banner.svg" alt="PAT Cloud Solutions" width="100%">

# Tag 4: Azure Networking

8 Lektionen

## Darum geht es heute
Heute baust du ein eigenes Netzwerk in Azure. Du teilst es in Bereiche auf und legst fest, wer deine VMs erreichen darf und wer nicht. Am Nachmittag suchst du Fehler: Warum kommt eine Verbindung nicht an?

## Am Ende des Tages kannst du …
- einen Adressbereich in Subnetze (Subnets) aufteilen. (K3)
- ein VNet mit mehreren Subnetzen (Subnets) bereitstellen und VMs darin platzieren. (K3)
- mit Sicherheitsregeln (Security Rules) einer NSG festlegen, wer deine VM über welchen Port erreicht. (K3)
- mit einer Checkliste herausfinden, warum eine Verbindung blockiert wird. (K4)

## So läuft der Tag

| Lektion | Was passiert | Was du tust |
|---------|--------------|-------------|
| L1 | Rückblick Tag 3 | Quiz mit deinem Partner |
| L1 | **Input:** VNet und Subnetze (Subnets) | zuhören, mitrechnen |
| L2 | Auftrag 4.1 | mit Partner: Subnetze (Subnets) berechnen |
| L3 | Auftrag 4.2 | allein: VNet mit zwei Subnetzen (Subnets) |
| L4 | **Input:** Netzwerksicherheitsgruppen (NSG) | zuhören, mitschauen |
| L4–L5 | Auftrag 4.3 | mit Partner: zwei VMs im VNet, Verbindungen testen |
| L6 | Auftrag 4.4 | mit Partner: Sicherheitsregeln (Security Rules) der NSG einrichten |
| L7 | Auftrag 4.5, ⭐ 4.6, ⭐ 4.7 | mit Partner: Fehlersuche; Schnelle: Network Watcher oder Challenge Lab |
| L8 | Auftrag 4.8, Abschluss | allein: Azure CLI und VS Code für Tag 5 installieren; Netzplan zeichnen, aufräumen, Exit-Ticket |

## Deine Aufträge

| ✓ | Nr. | Auftrag | Zeit | Form |
|---|-----|---------|------|------|
| ☐ | 4.1 | [Subnetting-Training für die «Velo Zürich AG»](../auftraege/tag-4/4.1-subnetting.md) | 45 Min. | Partner |
| ☐ | 4.2 | [VNet mit zwei Subnetzen (Subnets)](../auftraege/tag-4/4.2-vnet-mit-subnetzen.md) | 30 Min. | allein |
| ☐ | 4.3 | [Zwei VMs im VNet, Verbindungen testen](../auftraege/tag-4/4.3-zwei-vms-im-vnet.md) | 60 Min. | Partner |
| ☐ | 4.4 | [Sicherheitsregeln (Security Rules): Web für alle, SSH nur von der Schule](../auftraege/tag-4/4.4-sicherheitsregeln.md) | 45 Min. | Partner |
| ☐ | 4.5 | [Fehlersuche: «Warum komme ich nicht auf meine VM?»](../auftraege/tag-4/4.5-fehlersuche.md) | 45 Min. + 10 Min. Netzplan | Partner |
| ☐ | ⭐ 4.6 | [Network Watcher und effektive Sicherheitsregeln (Effective Security Rules)](../auftraege/tag-4/4.6-network-watcher.md) | 30 Min. | allein, freiwillig |
| ☐ | ⭐ 4.7 | [Challenge Lab zu bedingtem Zugriff (Conditional Access)](../auftraege/tag-4/4.7-challenge-lab-bedingter-zugriff.md) | ca. 45 Min. | Partner, freiwillig |
| ☐ | 4.8 | [Werkzeuge für Tag 5: Azure CLI und Visual Studio Code installieren](../auftraege/tag-4/4.8-werkzeuge-fuer-tag-5.md) | 20 Min. | allein |

4.2 bis 4.5 bauen aufeinander auf. Du räumst erst am Ende von 4.5 auf (oder nach ⭐ 4.6).

## Bevor du gehst
- [ ] Alle Ressourcengruppen (Resource Groups) von heute gelöscht.
- [ ] Auftrag 4.8 erledigt: `az account show --output table` zeigt auf deinem Laptop **Azure for Students**.
- [ ] Lernjournal: Einträge zu allen Aufträgen von heute, Erkenntnisse in `tag-4/README.md`.
- [ ] [Exit-Ticket](organisation.md#exit-ticket) ausgefüllt: «Sicherheitsregel (Security Rule) 100 sagt Deny, Sicherheitsregel (Security Rule) 200 sagt Allow für Port 80. Ist die Website erreichbar?»

## Das brauchst du
- dein Azure-for-Students-Konto
- deinen SSH-Schlüssel
- Papier oder Rechner für Subnetting

## Zum Nachlesen
- Theorie: [6 Azure Networking](../theorie/06-azure-networking.md)
- Folien: [Tag 4](../praesentationen/tag-4-networking.pptx) · [Input Networking](../praesentationen/input-06-azure-networking.pptx)
- Microsoft Learn: [Einführung in Azure Virtual Networks](https://learn.microsoft.com/de-de/training/modules/introduction-to-azure-virtual-networks/)

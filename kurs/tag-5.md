<img src="../assets/branding/kurs-banner.svg" alt="PAT Cloud Solutions" width="100%">

# Tag 5: Automatisierung mit Bicep und cloud-init

8 Lektionen

## Darum geht es heute
Im Kurs hast du vieles von Hand gemacht. Heute beschreibst du eine ganze Umgebung in Dateien und stellst sie mit einem einzigen Befehl bereit. Am Nachmittag baust du im Abschlussprojekt den Webserver der «Velo Zürich AG». Wer will, zeigt die Lösung am Schluss der Klasse.

## Am Ende des Tages kannst du …
- erklären, was «Infrastruktur als Code (Infrastructure as Code)» bedeutet. (K2)
- eine VM in Azure beim ersten Start mit cloud-init einrichten. (K3)
- eine Umgebung mit VNet, NSG und VM in Bicep beschreiben und bereitstellen. (K3)
- zeigen, dass aus einer Bicep-Datei ein ARM-Template entsteht. (K2)

## So läuft der Tag

| Lektion | Was passiert | Was du tust |
|---------|--------------|-------------|
| L1 | Rückblick Tag 4 und auf den Kurs | Quiz mit deinem Partner; sammeln: Was hast du von Hand gemacht? |
| L1 | **Input:** Infrastruktur als Code (Infrastructure as Code), Bicep, cloud-init | zuhören, mitschauen |
| L2 | Auftrag 5.1 | mit Partner: VM mit cloud-init in Azure |
| L3 | Auftrag 5.2 | allein: erste Bicep-Datei |
| L4 | Auftrag 5.3 | allein: Netzwerk von Tag 4 als Bicep (⭐ 5.4 OpenTofu: für Schnelle oder nach dem Kurs) |
| L5–L7 | Abschlussprojekt | mit Partner: Webserver der «Velo Zürich AG» per Bicep |
| L8 | Lösungen zeigen und Abschluss | wer will: Lösung in 4 Minuten zeigen; Feedback geben, aufräumen |

## Deine Aufträge

| ✓ | Nr. | Auftrag | Zeit | Form |
|---|-----|---------|------|------|
| ☐ | 5.1 | [Ubuntu-VM mit cloud-init in Azure](../auftraege/tag-5/5.1-vm-mit-cloud-init.md) | 45 Min. | Partner |
| ☐ | 5.2 | [Erste Bicep-Datei: Speicherkonto (Storage Account)](../auftraege/tag-5/5.2-erste-bicep-datei.md) | 45 Min. | allein |
| ☐ | 5.3 | [Das Netzwerk von Tag 4 als Bicep](../auftraege/tag-5/5.3-netzwerk-als-bicep.md) | 45 Min. | allein |
| ☐ | ⭐ 5.4 | [Herausforderung: dieselbe Idee mit OpenTofu (Terraform)](../auftraege/tag-5/5.4-opentofu.md) | ca. 60 Min. | allein, freiwillig |
| ☐ | Projekt | [Abschlussprojekt: Webserver der «Velo Zürich AG»](../abschlussprojekt/auftrag.md) | L5–L7 | Partner |

5.2 und 5.3 verwenden dieselbe Ressourcengruppe (Resource Group). Das Abschlussprojekt baut auf deinen Dateien aus 5.1 und 5.3 auf.

## Bevor du gehst
- [ ] **Alle** Ressourcengruppen (Resource Groups) des Kurses gelöscht: `az group list --output table` zeigt höchstens noch `NetworkWatcherRG`.
- [ ] Lernjournal: Einträge zu allen Aufträgen von heute, Erkenntnisse in `tag-5/README.md`.
- [ ] [Exit-Ticket](organisation.md#exit-ticket) ausgefüllt: «Was nimmst du aus diesem Kurs mit? Schreibe drei Sätze.»
- [ ] Kursfeedback ausgefüllt.

## Das brauchst du
- dein Azure-for-Students-Konto und deinen SSH-Schlüssel
- auf deinem Laptop aus Auftrag 4.8: **Azure CLI** und **Visual Studio Code** mit der Bicep-Erweiterung. Heute arbeitest du im Terminal von Visual Studio Code, nicht in der Cloud Shell. Deine Dateien bleiben so auf deinem Laptop und kommen ins Lernjournal.

## Zum Nachlesen
- Theorie: [7 Automatisierung](../theorie/07-automatisierung.md)
- Folien: [Tag 5](../praesentationen/tag-5-automatisierung.pptx) · [Input Automatisierung](../praesentationen/input-07-automatisierung.pptx)
- Microsoft Learn: [Einführung in Bicep](https://learn.microsoft.com/de-de/training/modules/introduction-to-infrastructure-as-code-using-bicep/) · [cloud-init in Azure](https://learn.microsoft.com/de-de/azure/virtual-machines/linux/using-cloud-init)

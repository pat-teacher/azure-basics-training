<p align="center">
  <img src="assets/branding/kurs-banner.svg" alt="PAT Cloud Solutions – Einführung in Cloud Computing mit Microsoft Azure" width="100%">
</p>

# Einführung in Cloud Computing mit Microsoft Azure

Ein Hands-on-Kurs von **[PAT Cloud Solutions](https://patcloudsolutions.ch)** für ICT-Lernende im Auftrag des Kantons Zürich.

Stand: 19.10.2026

## Worum es geht
In fünf Tagen baust du selbst: zuerst eine virtuelle Maschine auf deinem Laptop, dann Schritt für Schritt eine kleine Infrastruktur in Azure. Am Ende stellst du alles automatisch mit Bicep und cloud-init bereit.

Der Kurs ist **hands-on**: Du arbeitest den grössten Teil der Zeit selbst an Aufträgen. Zu den wichtigen Themen gibt es kurze Inputs (höchstens 20 Minuten). Bei Fragen hilft dir die Kursleitung als Coach.

## Kursablauf

| Tag | Schwerpunkt | Du baust … |
|-----|-------------|------------|
| [1](kurs/tag-1.md) | Grundlagen Virtualisierung | lokale VMs mit Multipass, deine erste automatische VM mit cloud-init |
| [2](kurs/tag-2.md) | Public Cloud und Azure Grundlagen | deine ersten Azure-Ressourcen im Portal und mit der Azure CLI |
| [3](kurs/tag-3.md) | Azure Compute und Storage | eine Linux-VM in Azure und einen Storage Account |
| [4](kurs/tag-4.md) | Azure Networking | ein VNet mit Subnetzen und NSG-Regeln |
| [5](kurs/tag-5.md) | Automatisierung mit Bicep und cloud-init | eine komplette Umgebung als Code, Abschlussprojekt |

## So arbeitest du mit diesem Repository

```
kurs/          Tagesplanung: Was passiert wann?
theorie/       Theorie zum Nachlesen, mit Grafiken und Selbsttest
praesentationen/  PowerPoint-Folien: Tagesablauf und Inputs
auftraege/     Deine Aufträge, pro Tag nummeriert
loesungen/     Lösungen – erst anschauen, wenn du es selbst versucht hast
assets/        Bilder und Branding
```

1. Öffne die Tagesplanung des Tages unter [kurs/](kurs/). Die passende Theorie findest du unter [theorie/](theorie/).
2. Bearbeite die Aufträge in der angegebenen Reihenfolge. Aufträge mit ⭐ sind Zusatzaufträge für Schnelle.
3. Halte deine Ergebnisse in deinem Lernjournal fest (Befehle, Screenshots, Erkenntnisse).
4. Lösche nach jedem Azure-Auftrag deine Ressourcen. Das schont dein Guthaben.

> [!IMPORTANT]
> Die [Lösungen](loesungen/) sind zum Vergleichen da, nicht zum Abschreiben. Du lernst am meisten, wenn du zuerst selbst probierst und erst bei einem Problem nachschaust.

## Voraussetzungen
- Laptop mit Windows Pro oder Education, aktivierter Hardware-Virtualisierung und dem Recht, Programme zu installieren (für Multipass an Tag 1)
- Aktives Azure-for-Students-Abonnement
- Webbrowser, Terminal (PowerShell oder Windows Terminal), optional Visual Studio Code

Details: [kurs/organisation.md](kurs/organisation.md)

---

<sub>© 2026 PAT Cloud Solutions · Kursunterlagen für die interne Schulung im Auftrag des Kantons Zürich, Nutzung gemäss Vertrag. Inhalte von Microsoft Learn sind mit Quelle verlinkt und unterliegen deren Lizenzbedingungen.</sub>

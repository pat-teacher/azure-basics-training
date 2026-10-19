<sub>PAT Cloud Solutions · Einführung in Cloud Computing mit Microsoft Azure · Kursleitung</sub>

# Hinweise für die Kursleitung

Stand: 19.10.2026

Die Tagesplanungen unter [kurs/](../kurs/organisation.md) sind für die Lernenden geschrieben. Hier stehen die Angaben, die nur die Kursleitung braucht: wann welcher Input kommt, welche Folien dazu gehören und was vorzubereiten ist.

## Exit-Tickets
- Pro Tag ein Microsoft Forms mit **einer** offenen Frage (Frage steht in der Tagesplanung unter «Bevor du gehst»). Link im Kurskanal teilen. <!-- prüfen -->
- Am Abend kurz durchsehen: Was ist angekommen? Welche Missverständnisse gibt es?
- Am nächsten Morgen 2–3 Antworten ohne Namen vorlesen und offene Punkte klären (Teil des Rückblicks in L1).

## Tag 1: Grundlagen Virtualisierung

| Wann | Input | Dauer | Folien | Danach |
|------|-------|-------|--------|--------|
| L1, nach Begrüssung und Vorwissen | Was ist Virtualisierung? Hardware, Hypervisor, VM, Typ 1/2 | 15' | Input 1, Folien 1–7 | Auftrag 1.1 |
| L2, nach Auftrag 1.1 | Live-Demo Multipass: `launch`, `list`, `shell`, `delete` | 10' | Input 1, «Multipass: eine VM mit einem Befehl» | Aufträge 1.2, 1.3 |
| L5, Beginn | Automatisch statt von Hand: cloud-init | 15' | Input 1, «cloud-init» | Auftrag 1.4 |
| L7, Beginn | SSH-Schlüssel: Schloss und Schlüssel | 5' | Input 1, «SSH-Schlüssel» | Auftrag 1.5, ⭐ 1.6 |
| L8, Beginn | Vom Hypervisor zum Hyperscaler | 15' | Input 2, Folien 1–2 | Aufräumen, Exit-Ticket |

**Vorbereitung**
- Mit dem Auftraggeber klären: Windows **Pro/Education/Enterprise** und **Adminrechte** für Multipass (oder vorinstallieren lassen). <!-- prüfen -->
- Vorher auf einem Kurs-Laptop Auftrag 1.2 durchspielen (Netzwerk, Proxy, Firewall).
- Vor der Demo in L2 selbst schon eine VM erstellt haben, damit nicht auf den Download gewartet wird.
- Erster `launch` lädt ca. 600 MB pro Laptop – evtl. reihenweise starten lassen.
- Laptops mit «Virtualisierung: Deaktiviert» oder Windows Home in Auftrag 1.1 sofort sammeln.

## Tag 2: Public Cloud und Azure Grundlagen

| Wann | Input | Dauer | Folien |
|------|-------|-------|--------|
| L1, nach Rückblick | Vom Hypervisor zum Hyperscaler, Cloud-Merkmale, IaaS/PaaS/SaaS, Public/Private/Hybrid | 20' | Input 2 |
| L3, Beginn | Aufbau von Azure, Rundgang durchs Portal | 15' | Input 3, Teil «Aufbau» |
| L5, Beginn | Cloud Shell und Azure CLI | 15' | Input 3, Teil «Werkzeuge» |

**Vorbereitung**
- Alle Lernenden haben sich vorab bei Azure for Students angemeldet.
- Für ⭐ 2.7: Trainingsschlüssel für Learn on Demand bereitstellen und Lab der Klasse zuweisen.

## Tag 3: Azure Compute und Storage

| Wann | Input | Dauer | Folien |
|------|-------|-------|--------|
| L1, nach Rückblick | Virtuelle Maschinen in Azure: Bestandteile, Grössen, Kosten | 20' | Input 4 |
| L5, Beginn | Azure Storage: Storage Account, Blob, Redundanz | 15' | Input 5 |

**Vorbereitung**
- Erlaubte Regionen und VM-Grössen im Student-Abo prüfen. <!-- prüfen -->

## Tag 4: Azure Networking

| Wann | Input | Dauer | Folien |
|------|-------|-------|--------|
| L1, nach Rückblick | VNet und Subnetze, CIDR, IP-Adressen | 20' | Input 6, Teil «VNet» |
| L4, Beginn | Netzwerksicherheitsgruppen (NSG) | 15' | Input 6, Teil «NSG» |

**Vorbereitung**
- Öffentliche IP der Schule ermitteln (für die SSH-Regel in 4.4).
- Für 4.5: Umgebung mit vorbereiteten Fehlern bereitstellen.
- Für ⭐ 4.7: passendes Challenge Lab wählen. <!-- prüfen -->

## Tag 5: Automatisierung mit Bicep und cloud-init

| Wann | Input | Dauer | Folien |
|------|-------|-------|--------|
| L1, nach Rückblick | Infrastructure as Code, Bicep, cloud-init in Azure | 20' | Input 7 |

**Vorbereitung**
- Bewertungsraster für das Abschlussprojekt ausdrucken oder teilen.
- Zeitplan für die Kurzpräsentationen (5' pro Team) festlegen.

## Lösungen
- [Lösungen Tag 1](tag-1/README.md)

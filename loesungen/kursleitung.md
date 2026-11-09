<sub>PAT Cloud Solutions · Einführung in Cloud Computing mit Microsoft Azure · Kursleitung</sub>

# Hinweise für die Kursleitung

Die Tagesplanungen unter [kurs/](../kurs/organisation.md) sind für die Lernenden geschrieben. Hier stehen die Angaben, die nur die Kursleitung braucht: wann welcher Input kommt, welche Folien dazu gehören und was vorzubereiten ist.

## Exit-Tickets
- Pro Tag ein Microsoft Forms mit **einer** offenen Frage (Frage steht in der Tagesplanung unter «Bevor du gehst»). Link im Kurskanal teilen. <!-- prüfen -->
- Am Abend kurz durchsehen: Was ist angekommen? Welche Missverständnisse gibt es?
- Am nächsten Kurstag 2–3 Antworten ohne Namen mit Missverständnissen auswählen und zeigen (Rückblick in L1). Beispiel: Tag 2, Folien 4–5 «Exit-Ticket Tag 1: Was stimmt hier nicht?» und «die Auflösung». Die Antworten auf der Folie für jeden Kurs anpassen.

## Tag 1: Grundlagen Virtualisierung

| Wann | Input | Dauer | Folien | Danach |
|------|-------|-------|--------|--------|
| L1, Beginn | Kurseinführung: Vorstellungsrunde, Ziel des Kurses, Kursziele, Aufbau, Zusammenarbeit, Spielregeln | 20' | Kurseinführung (ganz) | Tag 1 |
| L1, nach der Kurseinführung | Einstieg Tag 1: Vorwissen, Ziele und Ablauf des Tages | 5' | Tag 1, «Start» und «Heute» | Input 1 |
| L1, nach dem Einstieg | Was ist Virtualisierung? Hardware, Hypervisor, VM, Typ 1/2 | 15' | Input 1, Folien 1–7 | Auftrag 1.0, 1.1 |
| L3, nach Auftrag 1.1 | Live-Demo Multipass: `launch`, `list`, `shell`, `delete` | 10' | Input 1, «Multipass: eine VM mit einem Befehl» | Aufträge 1.2, 1.3 |
| L5, nach Auftrag 1.4 | Automatisch statt von Hand: cloud-init. Einstieg: 2–3 gemessene Zeiten aus 1.4 abfragen und auf 10 Server hochrechnen | 15' | Input 1, «cloud-init» | Auftrag 1.5 |
| L7, nach Abschluss von 1.5 | SSH-Schlüssel: Schloss und Schlüssel | 5' | Input 1, «SSH-Schlüssel» | Auftrag 1.6, ⭐ 1.7 |
| L8, Schluss | Ausblick (kein Input): «Was passiert, wenn man tausende Hypervisoren zusammenschaltet?» Frage stehen lassen, Antwort an Tag 2 | 3' | Tag 1, «Nächstes Mal: ab in die Cloud» | Aufräumen, Exit-Ticket |

**Vorbereitung**
- Konto `pat-teacher` auf GitHub und GitLab bereithalten. Nach Auftrag 1.0 die Einladungen annehmen (Details in [Lösung 1.0](tag-1/1.0-lernjournal.md)).
- Mit dem Auftraggeber klären, ob die Lernenden ein Konto bei GitHub oder GitLab anlegen dürfen (externer Anbieter, evtl. Minderjährige). <!-- prüfen -->
- Mit dem Auftraggeber klären: Windows **Pro/Education/Enterprise** und **Adminrechte** für Multipass (oder vorinstallieren lassen). <!-- prüfen -->
- Vorher auf einem Kurs-Laptop Auftrag 1.2 durchspielen (Netzwerk, Proxy, Firewall).
- Reihenfolge der Folien in L1: Kurseinführung → Tag 1 (Start, Heute) → Input 1. Die Vorstellungsrunde knapp halten (30 Sekunden pro Person), sonst reicht L1 nicht.
- Vor der Demo in L3 selbst schon eine VM erstellt haben, damit nicht auf den Download gewartet wird.
- Erster `launch` lädt ca. 600 MB pro Laptop – evtl. reihenweise starten lassen.
- L8 ist der Zeitpuffer für Auftrag 1.2 (Installation, Download) und 1.5. Mit Auftrag 1.0 ist L2–L4 knapp (ca. 20 Min. zu viel): Wer bei 1.2 nicht fertig wird, beendet 1.3 in L8. Wer 1.6 nicht schafft, holt es dort nach – der Schlüssel muss bis Tag 3 vorhanden sein. Der Input «Vom Hypervisor zum Hyperscaler» kommt erst an Tag 2, L1.
- Laptops mit «Virtualisierung: Deaktiviert» oder Windows Home in Auftrag 1.1 sofort sammeln.

## Tag 2: Public Cloud und Azure Grundlagen

Drei Präsentationen, in dieser Reihenfolge: **Tag 2** (`tag-2-azure-grundlagen.pptx`), **Input 2** (`input-02-cloud-grundlagen.pptx`), **Input 3** (`input-03-azure-aufbau.pptx`). Input 3 wird zweimal geöffnet: Teil «Aufbau» in L3, Teil «Werkzeuge» in L5. Jeder Input endet mit einer Folie «Jetzt du», die den nächsten Auftrag ankündigt.

| Wann | Input | Dauer | Folien | Danach |
|------|-------|-------|--------|--------|
| L1, Beginn | Rückblick-Quiz zu zweit, danach die Lösungen zeigen | 5' | Tag 2, Folien 1–3 | Exit-Ticket |
| L1, nach dem Quiz | Exit-Ticket Tag 1: Die Lernenden finden zuerst selbst heraus, was an den drei Antworten A–C nicht stimmt. Danach kommt die Auflösung | 7' | Tag 2, Folien 4–5 | Ziele |
| L1, nach dem Exit-Ticket | Ziele, Ablauf und Aufträge des Tages | 3' | Tag 2, Folien 6–8 | Input 2 |
| L1, nach dem Einstieg | Frage vom Schluss von Tag 1 «Was passiert, wenn man tausende Hypervisoren zusammenschaltet?» zu zweit vermuten lassen, Auflösung mit der nächsten Folie: Hyperscaler. Dann Cloud-Merkmale, Servicemodelle (Service Models) mit Pizza, öffentliche, private und hybride Cloud (Public, Private, Hybrid Cloud), geteilte Verantwortung (Shared Responsibility), Selbsttest | 25' | Input 2, Folien 1–13 | Auftrag 2.1 |
| L2, nach Auftrag 2.1 | Besprechung 2.1: strittige Zeilen aus Schritt 1, 2–3 Empfehlungen aus Schritt 5 | 10' | Input 2, Folie 5 «Servicemodelle» | Lernjournal, ⭐ von 2.1 |
| L3, Beginn | Aufbau von Azure: Regionen und Zonen, Hierarchie, Ressourcengruppe (Resource Group), Azure Resource Manager. Live-Demo Portal: Ressourcengruppe (Resource Group) bis Reiter Tags ausfüllen, nicht erstellen | 17' | Input 3, Folien 1–9 | Aufträge 2.2, 2.3 |
| L4, Beginn | Kursregion abfragen: «Wer hat Switzerland North nicht in der Liste?» Ersatzregionen an die Wandtafel | 5' | Input 3, Folie 9 | Auftrag 2.3 |
| L4, Schluss | Aktivitätsprotokoll (Activity Log) zeigen: «Jede Aktion läuft über den Resource Manager.» | 5' | Portal | 2.2/2.3 fertig, aufräumen |
| L5, Beginn | Werkzeuge: Live-Demo Cloud Shell (erster Start ohne Speicherkonto (Storage Account)) und Azure CLI (`az group create`, `list`, `delete`, `--help`, `-o table`). Ausblick RBAC in einem Satz, Selbsttest | 15' | Input 3, Folien 10–18 | Aufträge 2.4, 2.5 |
| L7, Beginn | Challenge Labs erklären, Trainingsschlüssel teilen | 5' | Tag 2, Folie 9 | Puffer 2.1–2.5, ⭐ 2.6, ⭐ 2.7, ⭐ 2.8 |
| L8, Beginn | Besprechung 2.5, Schritt 3 (Switzerland North: Schweiz und Zonen) | 10' | – | Aufräumkontrolle |
| L8, Schluss | Aufräumkontrolle: alle zeigen `az group list -o table` ohne `rg-tag2-…`. Ausblick Tag 3: SSH-Schlüssel von Tag 1 bereithalten | 10' | Tag 2, Folien 10–11 | Lernjournal, Exit-Ticket |

**Vorbereitung**
- Alle Lernenden haben sich vorab bei Azure for Students angemeldet (Login testen lassen, siehe Tag 1, Folie «Nächstes Mal»).
- Mit einem eigenen Konto für Azure for Students vorab prüfen: erlaubte Regionen (Richtlinie > Zuweisungen), Anzeige des Guthabens (Credit) im Education Hub, Dialog beim ersten Start der Cloud Shell. Pfade in 2.2 und 2.4 bei Abweichungen anpassen. <!-- prüfen -->
- Für die Demos in L3 und L5 im Browser bereit: Portal (Sprache Englisch; die Aufträge nennen Deutsch und Englisch), Cloud Shell schon einmal gestartet, damit die Demo nicht beim Einrichten hängt. Für die Demo des ersten Starts ein zweites Browserprofil oder Inkognito-Fenster verwenden.
- Wandtafel oder Whiteboard für die Kursregionen (L4).
- Zeitplan: 2.1 bis ca. Mitte L2, 2.2 in L3, 2.3 in L4, 2.4 bis ca. L6 Beginn, 2.5 zu zweit in L6. L7 ist Puffer. ⭐ 2.7 nur für Teams, die 2.5 in L6 beendet haben (Lab braucht ca. 40'); sie dürfen in L8 bis 20' weiterarbeiten.
- ⭐ 2.8 ist die Herausforderung für Lernstarke, die allein arbeiten wollen: Schleife in der Bash, `--query`, Tags ergänzen statt ersetzen, Sperre (Lock). Ohne Kosten und ohne Trainingsschlüssel. Vorab mit dem eigenen Konto testen, ob `az lock create` geht. Bei der Aufräumkontrolle in L8 zusätzlich `az lock list --output table` zeigen lassen. <!-- prüfen -->
- Für ⭐ 2.7: Trainingsschlüssel der Klasse [AZ-104](https://msle.learnondemand.net/Class/777740) im Kurskanal teilen (für 2.6 optional [AZ-900](https://msle.learnondemand.net/Class/777739)). Die Lernenden registrieren sich über «Mit dem Schulungsschlüssel registrieren», nicht über «Einloggen». Name des RBAC-Labs in der Klasse nachsehen und in Auftrag 2.7 eintragen. <!-- prüfen -->
- Mit dem Auftraggeber klären: Dürfen die Lernenden ein Konto bei Azure for Students (Mindestalter, «accredited institution») und bei Skillable anlegen? Wie bei GitHub/GitLab an Tag 1. <!-- prüfen -->

**Wenn es klemmt**
- Lernende ohne funktionierendes Abonnement (Subscription) arbeiten ab 2.2 bei einem Partner mit und holen es nach.
- Region nicht erlaubt → Fehler `RequestDisallowedByPolicy` (evtl. `RequestDisallowedByAzure`). Lösung: Kursregion aus 2.2 verwenden. Viele Konten für Azure for Students haben keine Einschränkung (getestet am 08.11.2026: Ressourcengruppe (Resource Group) und Speicherkonto (Storage Account) in Brazil South ohne Fehler). <!-- prüfen: Verhalten bei einem eingeschränkten Konto, insbesondere ob schon die Ressourcengruppe abgelehnt wird -->
- In L4 kontrollieren, dass alle die Kursregion aus 2.2 verwenden (Schritt 4 oder 4b).
- In 2.4: Platzhalter `<kuerzel>` nicht ersetzt → `syntax error near unexpected token`.
- Heute entstehen keine kostenpflichtigen Ressourcen. Die Aufräumkontrolle in L8 übt trotzdem die Routine für Tag 3.

## Tag 3: Azure Compute und Storage

| Wann | Input | Dauer | Folien | Danach |
|------|-------|-------|--------|--------|
| L1, Beginn | Rückblick-Quiz zu zweit | 5' | Tag 3, Folien 1–2 | Exit-Ticket |
| L1, nach dem Quiz | Exit-Ticket Tag 2: Die Lernenden finden zuerst selbst heraus, was an den drei Antworten A–C nicht stimmt. Danach kommt die Auflösung mit der richtigen Aussage | 7' | Tag 3, Folien 3–4 | Ziele |
| L1, nach dem Exit-Ticket | Ziele, Ablauf und Aufträge des Tages | 3' | Tag 3, Folien 5–7 | Input 4 |
| L1, nach dem Einstieg | Virtuelle Maschinen (Virtual Machines) in Azure: Bestandteile, Vergleich mit Tag 1, Grösse (Size), Status und Kosten, SSH-Schlüssel von Tag 1, Speicher der VM (OS-Datenträger (OS Disk), Datenfestplatte (Data Disk), temporärer Datenträger (Temporary Disk)), Selbsttest. Live-Demo: VM-Assistent im Portal bis **Überprüfen + erstellen** (Review + create) (nach Folie 7) | 20' | Input 4, Folien 1–12 | Kosten im Griff |
| L1, vor Auftrag 3.1 | Kosten im Griff: kleine Grössen, nur eine VM gleichzeitig, immer aufräumen | 3' | Tag 3, Folie 8 | Aufträge 3.1, 3.2 |
| L3/L4, nach Auftrag 3.2 | Kurz im Plenum: «Beendet» oder «Beendet (Zuordnung aufgehoben)»? Was kostet was? (aus 3.2). Kontrolle, dass alle `rg-tag3-portal-…` gelöscht haben | 5' | Input 4, Folie 5 | Auftrag 3.3 |
| L5, Beginn | Azure Storage: Speicherkonto (Storage Account) mit den vier Diensten Blob, Files, Queue, Table (nur Blob praktisch), Container und Blob, Redundanz (Redundancy), Zugriffsebenen (Access Tiers), Persistenz, Selbsttest | 15' | Input 5, Folien 1–11 | Auftrag 3.4, direkt danach 3.5 im selben Speicherkonto (Storage Account) |
| L7, wenn die meisten 3.5 fertig haben | Kurz im Plenum: Vergleich VM mit nginx (3.3) und statische Website (Static Website) (3.5), Bezug zu IaaS/PaaS | 5' | Input 2 (Tag 2), Folie 6 «Merkhilfe Pizza» | ⭐ 3.6, aufräumen |
| L8 | Aufräumkontrolle: alle zeigen `az group list -o table` ohne `rg-tag3-…`. Kostenanalyse (Cost Analysis) anschauen (zeigt erst die Kosten von Tag 2, Verzögerung 8–24 Stunden), Exit-Ticket, Ausblick Tag 4 | 15' | Tag 3, Folien 9–10 | – |

**Vorbereitung**
- **Port 22 im Schulnetz testen:** Ausgehendes SSH vom Kurs-Laptop zu einer Azure-VM muss gehen, sonst scheitern 3.1 und 3.3. Ausweichmöglichkeit: Mobile-Hotspot. <!-- prüfen -->
- Mit einem eigenen Konto für Azure for Students vorab prüfen: `Standard_B1s` und Image Ubuntu 24.04 in der Kursregion verfügbar, Feldnamen im VM-Assistenten (englisches Portal, die Aufträge nennen Deutsch und Englisch), Menüpfade **Endpunkte** (Endpoints) und **Statische Website** (Static Website) im Speicherkonto (Storage Account). <!-- prüfen -->
- Lernende ohne SSH-Schlüssel von Tag 1 (Auftrag 1.6) vor L2 erfassen. Sie holen Schritt 1–2 von 1.6 in 5 Minuten nach.
- Für die Demo in L1 den VM-Assistenten im Portal offen haben, aber nicht erstellen.
- Zeitplan: 3.1 in L2, 3.2 zu zweit in L3, 3.3 in L3–L4. Nach Input 5 (L5) arbeiten alle allein: 3.4 in L5–L6 (40'), **direkt danach 3.5** in L6–L7 (30'). 3.5 baut auf dem Speicherkonto (Storage Account) aus 3.4 auf: Wer weitermacht, räumt in 3.4, Schritt 9 nicht auf. ⭐ 3.6 nur, wer 3.5 fertig hat; es braucht ebenfalls dasselbe Speicherkonto (Storage Account) mit `preisliste.txt`. Aufgeräumt wird erst nach 3.5 bzw. 3.6.

**Wenn es klemmt**
- Nur **eine VM gleichzeitig**: Das Kontingent an vCPUs (Quota) im Student-Abo ist klein. 3.2 endet mit dem Löschen der Portal-VM, 3.3 mit dem Löschen der CLI-VM.
- `SkuNotAvailable` → `Standard_B2ats_v2` statt `Standard_B1s`.
- `Permission denied (publickey)` → fast immer Benutzer `ubuntu` statt `azureuser`.
- Speicherkonto (Storage Account): Name «bereits vergeben» → zwei Ziffern anhängen. «Keine Berechtigung» beim Öffnen des Containers → **Zu Zugriffsschlüssel wechseln** (Switch to Access key).
- Wer in L7 nicht fertig ist: 3.5 hat Vorrang vor ⭐ 3.6. Speicherkonten (Storage Accounts) kosten fast nichts, VMs schon. Bei Zeitnot zuerst die VMs aufräumen.

## Tag 4: Azure Networking

| Wann | Input | Dauer | Folien |
|------|-------|-------|--------|
| L1, nach Rückblick | VNet und Subnetze (Subnets), CIDR, IP-Adressen | 20' | Input 6, Teil «VNet» |
| L4, Beginn | Netzwerksicherheitsgruppen (NSG) | 15' | Input 6, Teil «NSG» |

**Vorbereitung**
- Öffentliche IP (Public IP) der Schule ermitteln (für die SSH-Regel in 4.4).
- Für 4.5: Umgebung mit vorbereiteten Fehlern bereitstellen.
- Für ⭐ 4.7: passendes Challenge Lab wählen. <!-- prüfen -->
- **Auftrag 4.8 (L8, ca. 20'):** Die Lernenden installieren Azure CLI und Visual Studio Code mit Bicep-Erweiterung für Tag 5, z. B. mit `winget install --exact --id Microsoft.AzureCLI` und `winget install --exact --id Microsoft.VisualStudioCode`. Adminrechte sind vorhanden (wie bei Multipass an Tag 1). Bewusst an Tag 4, damit Probleme bis Tag 5 gelöst werden können. Vor L8 kontrollieren, wer nicht fertig ist. <!-- prüfen: winget auf den Kurs-Laptops verfügbar, Installation im Schulnetz -->

**Planungsentscheid Werkzeuge:** Tag 2–4 arbeiten mit der Cloud Shell (keine Installation nötig). Ab Tag 5 arbeiten die Lernenden mit der lokal installierten Azure CLI im Terminal von Visual Studio Code. Grund: Bicep- und cloud-init-Dateien müssen gespeichert bleiben und ins Lernjournal. Die Cloud Shell ohne Speicherkonto (Storage Account) verliert Dateien beim Schliessen.

## Tag 5: Automatisierung mit Bicep und cloud-init

| Wann | Input | Dauer | Folien |
|------|-------|-------|--------|
| L1, nach Rückblick | Infrastruktur als Code (Infrastructure as Code), Bicep, cloud-init in Azure | 20' | Input 7 |

**Vorbereitung**
- Zu Beginn kontrollieren: Bei allen zeigt `az account show --output table` im Terminal von Visual Studio Code **Azure for Students** (Auftrag 4.8). Wer nicht angemeldet ist: `az login`. Wer die Installation nicht geschafft hat, arbeitet mit dem Partner oder ausnahmsweise in der Cloud Shell und speichert die Dateien sofort im Lernjournal.
- Bewertungsraster für das Abschlussprojekt ausdrucken oder teilen.
- Zeitplan für die Kurzpräsentationen (5' pro Team) festlegen.

## Lösungen
- [Lösungen Tag 1](tag-1/README.md)
- [Lösungen Tag 2](tag-2/README.md)

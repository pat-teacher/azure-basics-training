<sub>PAT Cloud Solutions · Einführung in Cloud Computing mit Microsoft Azure · Kursleitung</sub>

# Hinweise für die Kursleitung

Stand: 08.11.2026

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
| L4, Schluss | Aktivitätsprotokoll zeigen: «Jede Aktion läuft über den Resource Manager.» | 5' | Portal | 2.2/2.3 fertig, aufräumen |
| L5, Beginn | Werkzeuge: Live-Demo Cloud Shell (erster Start ohne Speicherkonto (Storage Account)) und Azure CLI (`az group create`, `list`, `delete`, `--help`, `-o table`). Ausblick RBAC in einem Satz, Selbsttest | 15' | Input 3, Folien 10–18 | Aufträge 2.4, 2.5 |
| L7, Beginn | Challenge Labs erklären, Trainingsschlüssel teilen | 5' | Tag 2, Folie 9 | Puffer 2.1–2.5, ⭐ 2.6, ⭐ 2.7 |
| L8, Beginn | Besprechung 2.5, Schritt 3 (Switzerland North: Schweiz und Zonen) | 10' | – | Aufräumkontrolle |
| L8, Schluss | Aufräumkontrolle: alle zeigen `az group list -o table` ohne `rg-tag2-…`. Ausblick Tag 3: SSH-Schlüssel von Tag 1 bereithalten | 10' | Tag 2, Folien 10–11 | Lernjournal, Exit-Ticket |

**Vorbereitung**
- Alle Lernenden haben sich vorab bei Azure for Students angemeldet (Login testen lassen, siehe Tag 1, Folie «Nächstes Mal»).
- Mit einem eigenen Konto für Azure for Students vorab prüfen: erlaubte Regionen (Richtlinie > Zuweisungen), Anzeige des Guthabens im Education Hub, Dialog beim ersten Start der Cloud Shell. Pfade in 2.2 und 2.4 bei Abweichungen anpassen. <!-- prüfen -->
- Für die Demos in L3 und L5 im Browser bereit: Portal (Sprache Deutsch), Cloud Shell schon einmal gestartet, damit die Demo nicht beim Einrichten hängt. Für die Demo des ersten Starts ein zweites Browserprofil oder Inkognito-Fenster verwenden.
- Wandtafel oder Whiteboard für die Kursregionen (L4).
- Zeitplan: 2.1 bis ca. Mitte L2, 2.2 in L3, 2.3 in L4, 2.4 bis ca. L6 Beginn, 2.5 zu zweit in L6. L7 ist Puffer. ⭐ 2.7 nur für Teams, die 2.5 in L6 beendet haben (Lab braucht ca. 40'); sie dürfen in L8 bis 20' weiterarbeiten.
- Für ⭐ 2.7: Trainingsschlüssel der Klasse [AZ-104](https://msle.learnondemand.net/Class/777740) im Kurskanal teilen (für 2.6 optional [AZ-900](https://msle.learnondemand.net/Class/777739)). Die Lernenden registrieren sich über «Mit dem Schulungsschlüssel registrieren», nicht über «Einloggen». Name des RBAC-Labs in der Klasse nachsehen und in Auftrag 2.7 eintragen. <!-- prüfen -->
- Mit dem Auftraggeber klären: Dürfen die Lernenden ein Konto bei Azure for Students (Mindestalter, «accredited institution») und bei Skillable anlegen? Wie bei GitHub/GitLab an Tag 1. <!-- prüfen -->

**Wenn es klemmt**
- Lernende ohne funktionierendes Abonnement (Subscription) arbeiten ab 2.2 bei einem Partner mit und holen es nach.
- Häufigster Fehler in 2.3 und 2.4: `RequestDisallowedByPolicy` → Region nicht erlaubt, Kursregion aus 2.2 verwenden.
- In 2.4: Platzhalter `<kuerzel>` nicht ersetzt → `syntax error near unexpected token`.
- Heute entstehen keine kostenpflichtigen Ressourcen. Die Aufräumkontrolle in L8 übt trotzdem die Routine für Tag 3.

## Tag 3: Azure Compute und Storage

| Wann | Input | Dauer | Folien |
|------|-------|-------|--------|
| L1, nach Rückblick | Virtuelle Maschinen (Virtual Machines) in Azure: Bestandteile, Grössen, Kosten | 20' | Input 4 |
| L5, Beginn | Azure Storage: Speicherkonto (Storage Account), Blob, Redundanz | 15' | Input 5 |

**Vorbereitung**
- Erlaubte Regionen und VM-Grössen im Student-Abo prüfen. <!-- prüfen -->

## Tag 4: Azure Networking

| Wann | Input | Dauer | Folien |
|------|-------|-------|--------|
| L1, nach Rückblick | VNet und Subnetze (Subnets), CIDR, IP-Adressen | 20' | Input 6, Teil «VNet» |
| L4, Beginn | Netzwerksicherheitsgruppen (NSG) | 15' | Input 6, Teil «NSG» |

**Vorbereitung**
- Öffentliche IP (Public IP) der Schule ermitteln (für die SSH-Regel in 4.4).
- Für 4.5: Umgebung mit vorbereiteten Fehlern bereitstellen.
- Für ⭐ 4.7: passendes Challenge Lab wählen. <!-- prüfen -->

## Tag 5: Automatisierung mit Bicep und cloud-init

| Wann | Input | Dauer | Folien |
|------|-------|-------|--------|
| L1, nach Rückblick | Infrastruktur als Code (Infrastructure as Code), Bicep, cloud-init in Azure | 20' | Input 7 |

**Vorbereitung**
- Bewertungsraster für das Abschlussprojekt ausdrucken oder teilen.
- Zeitplan für die Kurzpräsentationen (5' pro Team) festlegen.

## Lösungen
- [Lösungen Tag 1](tag-1/README.md)
- [Lösungen Tag 2](tag-2/README.md)

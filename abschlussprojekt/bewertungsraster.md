<sub>PAT Cloud Solutions · Einführung in Cloud Computing mit Microsoft Azure · Tag 5</sub>

# Bewertungsraster Abschlussprojekt

Zum Auftrag: [Abschlussprojekt: Webserver der «Velo Zürich AG»](auftrag.md)

Jedes Kriterium gibt 0 bis 3 Punkte. Bewertet wird das Team. Kriterium F (Präsentation) bewertet die Kursleitung pro Person. A–D bewertet die Kursleitung während der Präsentation, E und G nach L8, wenn der Nachweis des Aufräumens im Lernjournal steht.

| | Kriterium | 3 Punkte | 2 Punkte | 1 Punkt | 0 Punkte |
|---|-----------|----------|----------|---------|----------|
| A | **Bereitstellung** (Deployment), M1 und M6 | ein Befehl erstellt alles, `output` zeigt die URL | ein Befehl, aber kleine Nacharbeit von Hand nötig | mehrere Bicep-Dateien oder mehrere Befehle nötig | nicht bereitgestellt |
| B | **Netzwerk** (M2, M3) | VNet, Subnetz (Subnet) und NSG wie verlangt, SSH nur von der Schul-IP | alles vorhanden, eine Sicherheitsregel (Security Rule) zu offen oder falsch | VNet und Subnetz (Subnet), aber NSG fehlt | fehlt |
| C | **VM und cloud-init** (M4, M5) | Website mit Firmenname und Kürzeln, `cloud-init status` ist `done` | Website lädt, Startseite unvollständig | VM läuft, nginx fehlt | keine VM |
| D | **Sicherheit** (M7) | kein Geheimnis in Dateien und Doku, Anmeldung nur mit Schlüssel | – | Passwort-Anmeldung möglich | privater Schlüssel (Private Key) oder Passwort in einer Datei |
| E | **Dokumentation** (M8) | alle Punkte aus «Abgabe», verständlich, mit Architekturbild | ein bis zwei Punkte fehlen | mehrere Punkte fehlen | keine Dokumentation |
| F | **Präsentation** | Architektur erklärt, Live-Demo klappt, Fragen beantwortet, Zeit eingehalten | ein Teil fehlt oder wackelt | nur Erklärung oder nur Demo | keine Präsentation |
| G | **Aufräumen** (M8) | Nachweis: alle Ressourcengruppen (Resource Groups) des Kurses gelöscht | Projekt gelöscht, andere vergessen | – | nicht aufgeräumt |

**Maximum:** 21 Punkte. Zusätzlich gibt jede erfüllte Kann-Anforderung K1–K4 einen Bonuspunkt, höchstens 3.

**Erfüllt** ist das Projekt ab **12 Punkten** und wenn bei D nicht 0 Punkte stehen.

Falls eine Note verlangt ist: Note = Punkte ÷ 21 × 5 + 1, auf halbe Noten gerundet, höchstens 6.

## Rückmeldung an das Team

| | Punkte | Bemerkung |
|---|:---:|-----------|
| A Bereitstellung (Deployment) | | |
| B Netzwerk | | |
| C VM und cloud-init | | |
| D Sicherheit | | |
| E Dokumentation | | |
| F Präsentation | | |
| G Aufräumen | | |
| Bonus Kann-Anforderungen | | |
| **Total** | | |

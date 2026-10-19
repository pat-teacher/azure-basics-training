---
name: berufsschule-didaktik-ict
description: Didaktik für ICT-Berufsschulunterricht: Lernziele nach K-Stufen, Lektionsplan nach AVIVA, Theorie-Inputs, Methoden, Differenzierung, Quizfragen und Bewertungsraster. Verwenden beim Planen von Lektionen oder beim Erstellen von Lernkontrollen.
---

# Didaktik für ICT-Lernende

## Lernziele
Formuliere Lernziele als beobachtbares Verhalten mit K-Stufe (Bloom):
| Stufe | Bedeutung | Verben |
|------|-----------|--------|
| K1 | Wissen | nennen, aufzählen |
| K2 | Verstehen | erklären, beschreiben, zuordnen |
| K3 | Anwenden | bereitstellen, konfigurieren, ausführen |
| K4 | Analysieren | vergleichen, Fehler finden, begründen |
| K5 | Beurteilen | bewerten, auswählen, empfehlen |

Beispiel: «Du kannst eine Linux-VM mit der Azure CLI bereitstellen und per SSH darauf zugreifen. (K3)»
Pro Tag 3 bis 5 Lernziele, Schwerpunkt K1 bis K3. K4 nur gezielt (z. B. Fehlersuche mit Checkliste), K5 höchstens im Abschlussprojekt.

## Niveau ICT-Fachleute EFZ
- Aufträge kleinschrittig: ein Schritt = eine Handlung + Kontrolle mit erwarteter Ausgabe.
- Befehle immer vorgeben und in einem Satz erklären. Selbst herleiten nur in ⭐-Aufgaben.
- Fragen geschlossen (zuordnen, ankreuzen, Lückentext) oder kurz offen (1–3 Sätze).
- Höchstens 5–6 Grundaufträge pro Tag; Vertiefung als ⭐.
- Fachbegriffe sparsam, beim ersten Auftreten erklären; Glossar-Charakter in der Theorie.

## Lektionsplan nach AVIVA (nur für die Planung der Kursleitung)
AVIVA dient der eigenen Planung. In den Tagesplanungen für die Lernenden (`kurs/tag-<n>.md`) erscheinen die Phasen nicht.

| Phase | Zweck | Anteil |
|-------|-------|--------|
| **A**nkommen/Einstimmen | Ziel und Ablauf zeigen, Bezug zur Praxis | 5–10 % |
| **V**orwissen aktivieren | Was weisst du schon? Kurzumfrage, Brainstorming | 5–10 % |
| **I**nformieren | Theorie-Input, Demo | 20–30 % |
| **V**erarbeiten | Lab, Aufgaben, Partnerarbeit | 40–50 % |
| **A**uswerten | Quiz, Reflexion, offene Fragen | 10 % |

Vorlage:
```
| Zeit | Phase | Inhalt | Methode/Sozialform | Material |
|------|-------|--------|--------------------|----------|
```

## Theorie-Inputs
- Höchstens 20 Minuten am Stück, dann eine Aktivität.
- Jedes neue Konzept mit einem Alltagsvergleich einführen, z. B.:
  - IaaS/PaaS/SaaS: Pizza selber machen, liefern lassen, im Restaurant essen
  - Region/Verfügbarkeitszone: Stadt und Quartiere mit eigenem Stromnetz
  - Ressourcengruppe: Ordner für alles, was zu einem Projekt gehört
  - NSG: Türsteher mit Gästeliste
  - Bicep: Bauplan statt Handarbeit
- Danach immer die Live-Demo im Portal oder in der CLI.

## Methoden
- Think-Pair-Share, Partnerarbeit (Driver/Navigator im Lab), Gruppenpuzzle für Theorieblöcke, Kurzpräsentationen.
- Wechsel der Sozialform mindestens alle 45 Minuten.

## Differenzierung
- Jede Aufgabe hat **Grundaufgaben** (alle) und **Zusatzaufgaben** (für Schnelle, mit ⭐ markiert).
- Für Langsamere: Hilfekarten mit Tipps in steigender Stärke (Tipp 1: Hinweis, Tipp 2: Befehl, Tipp 3: Lösung).

## Quizfragen
- 8 bis 12 Fragen pro Tag, gemischt: Multiple Choice (4 Optionen, 1 richtig), Zuordnung, kurze offene Fragen.
- Falsche Antworten plausibel (typische Missverständnisse), keine «alle oben genannten».
- Lösung mit kurzer Begründung in separatem Abschnitt.
- Format kompatibel mit Kahoot/Forms: Frage, Optionen, richtige Antwort, Zeit.

## Bewertungsraster Abschlussprojekt
| Kriterium | 3 Punkte | 2 Punkte | 1 Punkt | 0 Punkte |
|-----------|----------|----------|---------|----------|
| Funktion | Lösung läuft vollständig | kleine Mängel | teilweise lauffähig | läuft nicht |
| Architektur | begründete Dienstwahl | sinnvoll, ohne Begründung | teilweise passend | unpassend |
| IaC/Automatisierung | vollständig mit Bicep/CLI | teilweise | nur Portal, dokumentiert | fehlt |
| Sicherheit/Kosten | NSG mit eingeschränkter Quell-IP, passende VM-Grösse, Aufräumen dokumentiert | zwei davon | eins davon | keins |
| Dokumentation | vollständig und nachvollziehbar | kleine Lücken | lückenhaft | fehlt |
| Präsentation | klar, Zeit eingehalten, Fragen beantwortet | meist klar | unstrukturiert | fehlt |
Note = Punkte / Maximum × 5 + 1, auf halbe Noten gerundet.

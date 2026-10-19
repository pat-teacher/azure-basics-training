# Werkzeuge

Stand: 19.10.2026

Skripte, mit denen die Grafiken und Präsentationen des Kurses erzeugt werden. Die erzeugten Dateien liegen im Repo; die Skripte brauchst du nur, wenn du etwas änderst.

## Diagramme (`theorie/img/*.svg`)
```bash
python tools/diagramme.py theorie/img          # alle eigenen Diagramme neu erzeugen
sh tools/render.sh <ausgabeordner> theorie/img/<name>.svg   # PNG-Vorschau mit headless Chrome
```

## Präsentationen (`praesentationen/*.pptx`)
- Inhalte und Sprechernotizen: [praesentationen-inhalt.js](praesentationen-inhalt.js)
- Layouts und Folientypen: [praesentationen.js](praesentationen.js)

Voraussetzungen: Node.js, Google Chrome, Pakete `pptxgenjs`, `sharp`, `react`, `react-dom`, `react-icons` in einem Arbeitsordner (nicht im Repo).

```bash
# 1. Arbeitsordner vorbereiten (einmalig)
mkdir -p <arbeit>/assets/icons && cd <arbeit>
npm init -y && npm install pptxgenjs@3.12.0 sharp react react-dom react-icons

# 2. Bilder: Diagramme, Logo und Wolke als PNG (2x), dann Titel abschneiden (-folie.png)
sh <repo>/tools/folien/render2x.sh <arbeit>/assets <repo>/theorie/img/*.svg <repo>/theorie/img/tbz/*.svg
#    Logo hell/dunkel und Wolke: assets/branding/*.svg mit angepasster Füllfarbe ebenso rendern
cp <repo>/theorie/img/tbz/*.png <arbeit>/assets/
node <repo>/tools/folien/zuschneiden.js <arbeit>/assets
node <repo>/tools/folien/icons.js           # erzeugt assets/icons/*.png

# 3. Präsentationen bauen (im Repo)
NODE_PATH=<arbeit>/node_modules node tools/praesentationen.js <arbeit>/assets praesentationen <pptx-skill>/scripts/apply_theme.js
```

Prüfen: Folien mit PowerPoint als PNG exportieren und mit `tools/folien/uebersicht.js` eine Übersicht pro Präsentation erzeugen.

## Gestaltung
- Farben PAT Cloud Solutions: #27303A (dunkel), #006FAD (blau), #DEE2FB (hell), #F7F7F7, #6F6F6F.
- Schrift: Calibri (Righteous ist auf den meisten Rechnern nicht installiert).
- Motiv: weisses Icon im blauen Kreis. Titel- und Schlussfolien dunkel, Kapitel blau, Inhalt weiss.

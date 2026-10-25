# Werkzeuge

Stand: 19.10.2026

Skripte, mit denen die Grafiken und Präsentationen des Kurses erzeugt werden. Die erzeugten Dateien liegen im Repo; die Skripte brauchst du nur, wenn du etwas änderst.

## Website (GitHub Pages)
Die Website wird bei jedem Push auf `main` automatisch gebaut und veröffentlicht ([.github/workflows/pages.yml](../.github/workflows/pages.yml)).
- Aufbau und Navigation: [mkdocs.yml](../mkdocs.yml) – neue Seiten hier unter `nav` eintragen.
- [website/build.py](website/build.py) kopiert die Inhalte nach `_website/`, [website/hooks.py](website/hooks.py) gleicht GitHub-Markdown an (Hinweisboxen, Listen, `<details>`, Ordner-Links).
- Farben und Schrift: [../assets/website/pat.css](../assets/website/pat.css).
- Lösungen sind auf der Website erreichbar, aber nicht in der Navigation (nur über die Links bei den Aufträgen).

Lokal testen:
```bash
pip install -r tools/website/requirements.txt
python tools/website/build.py && mkdocs serve      # http://127.0.0.1:8000
```

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
#    nur einzelne Präsentationen: Dateinamen anhängen, z. B. … apply_theme.js kurs-einfuehrung.pptx
```

Prüfen: Folien mit PowerPoint als PNG exportieren und mit `tools/folien/uebersicht.js` eine Übersicht pro Präsentation erzeugen.

## Gestaltung
- Farben PAT Cloud Solutions: #27303A (dunkel), #006FAD (blau), #DEE2FB (hell), #F7F7F7, #6F6F6F.
- Schrift: Calibri (Righteous ist auf den meisten Rechnern nicht installiert).
- Motiv: weisses Icon im blauen Kreis.
- **Nur helle Folienhintergründe:** Titel-, Schluss- und Inhaltsfolien weiss, Kapitel sehr hellgrau (#F7F7F7). Keine Zierbalken oder Streifen. Hervorhebungen über Akzentfarbe in Flächen oder Text, nie über einen dunklen Hintergrund.
- Die Wolke (`cloud-laptop.svg`, #DEE2FB) erscheint als blasse Grafik; das Logo immer in der dunklen Variante (`logo-dunkel.png`).

"""Stellt die Website-Quellen in _website/ zusammen (für mkdocs build).

Aufruf im Repo-Hauptordner:  python tools/website/build.py && mkdocs build
"""
import pathlib
import shutil

ROOT = pathlib.Path(__file__).resolve().parents[2]
OUT = ROOT / "_website"
ORDNER = ["kurs", "theorie", "auftraege", "loesungen", "praesentationen", "assets"]

if OUT.exists():
    shutil.rmtree(OUT)
OUT.mkdir()

for name in ORDNER:
    shutil.copytree(ROOT / name, OUT / name)

# README des Repos wird zur Startseite
shutil.copy(ROOT / "README.md", OUT / "index.md")

# Logo in Weiss für die dunkle Kopfzeile der Website
logo = (ROOT / "assets/branding/logo-patcloudsolutions.svg").read_text(encoding="utf-8")
(OUT / "assets/branding/logo-hell.svg").write_text(logo.replace("#0E0E0E", "#FFFFFF"), encoding="utf-8")

print(f"Website-Quellen bereit: {OUT}")

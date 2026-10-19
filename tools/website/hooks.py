"""MkDocs-Hooks: GitHub-Markdown so anpassen, dass es auf der Website gleich aussieht."""
import os
import re

ORDNER_LINK = re.compile(r"\]\(((?:\.\./)*[\w\-/.]*?[\w\-]+)/\)")
ERSATZ = {"kurs": "organisation.md"}  # Ordner ohne README → diese Seite

# GitHub-Hinweise (> [!NOTE]) → Material-Admonitions mit deutschem Titel
HINWEISE = {
    "NOTE": ("note", "Hinweis"),
    "TIP": ("tip", "Tipp"),
    "IMPORTANT": ("important", "Wichtig"),
    "WARNING": ("warning", "Achtung"),
    "CAUTION": ("caution", "Vorsicht"),
}
HINWEIS_BLOCK = re.compile(r"^> \[!(\w+)\]\n((?:>.*(?:\n|$))*)", re.MULTILINE)


def _hinweis(m):
    art, titel = HINWEISE.get(m.group(1).upper(), ("note", m.group(1).title()))
    zeilen = [re.sub(r"^> ?", "", z) for z in m.group(2).splitlines()]
    inhalt = "\n".join(("    " + z) if z.strip() else "" for z in zeilen)
    return f'!!! {art} "{titel}"\n\n{inhalt}\n'


LISTENPUNKT = re.compile(r"^\s*(?:[-*+]|\d+\.)\s")


def _leerzeile_vor_listen(markdown):
    """GitHub erkennt Listen direkt nach einem Absatz, Python-Markdown braucht eine Leerzeile."""
    aus, im_code, vorher = [], False, ""
    for zeile in markdown.split("\n"):
        if zeile.lstrip().startswith("```"):
            im_code = not im_code
        elif (not im_code and LISTENPUNKT.match(zeile) and vorher.strip()
              and not LISTENPUNKT.match(vorher) and not vorher.startswith((" ", "\t", "|", ">"))):
            aus.append("")
        aus.append(zeile)
        vorher = zeile if not im_code else ""
    return "\n".join(aus)


def on_page_markdown(markdown, page, config, **kwargs):
    # <details> soll Markdown im Inhalt rendern (Selbsttests mit `Code`)
    markdown = markdown.replace("<details>", '<details markdown="1">')
    markdown = _leerzeile_vor_listen(markdown)

    markdown = HINWEIS_BLOCK.sub(_hinweis, markdown)

    # Links auf Ordner (z. B. loesungen/tag-1/) zeigen auf deren README
    basis = os.path.dirname(os.path.join(config["docs_dir"], page.file.src_path))

    def ersetzen(m):
        ziel = m.group(1)
        ordner = os.path.normpath(os.path.join(basis, ziel))
        if os.path.exists(os.path.join(ordner, "README.md")):
            return f"]({ziel}/README.md)"
        name = ERSATZ.get(os.path.basename(ordner))
        if name and os.path.exists(os.path.join(ordner, name)):
            return f"]({ziel}/{name})"
        return m.group(0)

    return ORDNER_LINK.sub(ersetzen, markdown)

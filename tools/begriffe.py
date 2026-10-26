"""Fachbegriffe: Deutsch mit Englisch in Klammern beim ersten Auftreten pro Seite.

Aufruf:  python tools/begriffe.py [--pruefen] <datei.md>...
  ohne --pruefen: ergänzt den englischen Begriff beim ersten Auftreten (wenn er auf der Seite noch fehlt)
  mit  --pruefen: listet nur auf, wo er fehlt

Ausgelassen werden Überschriften, Codeblöcke, `Inline-Code`, Link-Ziele, Bilder, HTML und Kommentare.
"""
import re
import sys

# deutscher Begriff (Regex, inkl. Beugung)  →  englischer Begriff
GLOSSAR = [
    (r"[Nn]etzwerksicherheitsgruppe(?:n)?", "Network Security Group"),
    (r"[Nn]etzwerkschnittstelle(?:n)?", "Network Interface"),
    (r"[Rr]essourcengruppe(?:n)?", "Resource Group"),
    (r"Abonnements?", "Subscription"),
    (r"Verfügbarkeitszone(?:n)?", "Availability Zone"),
    (r"Regionspaar(?:e|en)?", "Region Pair"),
    (r"Verwaltungsgruppe(?:n)?", "Management Group"),
    (r"Mandant(?:en)?", "Tenant"),
    (r"[Vv]irtuelle[nrs]? Maschine(?:n)?", "Virtual Machine"),
    (r"[Vv]irtuelle[nrs]? Netzwerk(?:e|es)?", "Virtual Network"),
    (r"Subnetz(?:e|en|es)?", "Subnet"),
    (r"[Öö]ffentliche[nrs]? IP(?:-Adresse(?:n)?)?", "Public IP"),
    (r"Speicherkont(?:o|os|en)", "Storage Account"),
    (r"[Vv]erwaltete[nrs]? Datenträger", "Managed Disk"),
    (r"OS-Datenträger", "OS Disk"),
    (r"Blob-Speicher", "Blob Storage"),
    (r"Zugriffsebene(?:n)?", "Access Tier"),
    (r"Zugriffsschlüssel", "Access Key"),
    (r"Kostenanalyse", "Cost Analysis"),
    (r"Überbuchung", "Overcommitment"),
    (r"Infrastruktur als Code", "Infrastructure as Code"),
    (r"[Gg]eteilte[n]? Verantwortung", "Shared Responsibility"),
    (r"[Öö]ffentliche[nr]? Cloud", "Public Cloud"),
    (r"[Hh]ybride[nr]? Cloud", "Hybrid Cloud"),
    (r"[Bb]edingte[rnm]? Zugriff", "Conditional Access"),
    (r"[Rr]ollenbasierte[n]? Zugriffssteuerung", "Role-Based Access Control"),
    (r"Bereitstellungsmodell(?:e|en)?", "Deployment Model"),
    (r"Servicemodell(?:e|en)?", "Service Model"),
    (r"[Bb]enutzerdefinierte[n]? Daten", "Custom Data"),
    (r"[Ee]igene[sm]? Rechenzentrum", "On Premises"),
    (r"Schlüsselpaar(?:e)?", "Key Pair"),
    (r"[Öö]ffentliche[nr]? Schlüssel", "Public Key"),
    (r"[Pp]rivate[nr]? Schlüssel", "Private Key"),
    (r"Host-Schlüssel", "Host Key"),
    (r"Fingerabdruck", "Fingerprint"),
    (r"Adressraum", "Address Space"),
    (r"Standardregeln", "Default Rules"),
    (r"Diensttags?", "Service Tag"),
    (r"[Ss]tatische[n]? Website", "Static Website"),
]

GESCHUETZT = re.compile(r"`[^`]*`|\[[^\]]*\]\([^)]*\)|<!--.*?-->|<[^>]+>|https?://\S+")


def bearbeiten(text, pruefen=False):
    zeilen = text.split("\n")
    im_code = False
    fehlend = []
    for deutsch, englisch in GLOSSAR:
        if re.search(r"\(" + re.escape(englisch), text):
            continue  # englischer Begriff steht schon auf der Seite
        muster = re.compile(r"(?<![\w-])(" + deutsch + r")(?![\w-])(\*\*)?")
        im_code = False
        for i, z in enumerate(zeilen):
            if z.lstrip().startswith("```"):
                im_code = not im_code
                continue
            if im_code or z.lstrip().startswith(("#", "![", "<", "    ")):
                continue
            geschuetzt = [m.span() for m in GESCHUETZT.finditer(z)]
            treffer = None
            for m in muster.finditer(z):
                if not any(a <= m.start() < b for a, b in geschuetzt):
                    treffer = m
                    break
            if not treffer:
                continue
            ende = treffer.end()
            if z[ende:ende + 2] == " (":
                break  # schon eine Klammer dahinter
            fehlend.append((i + 1, treffer.group(1), englisch))
            if not pruefen:
                zeilen[i] = z[:ende] + f" ({englisch})" + z[ende:]
                text = "\n".join(zeilen)
            break
    return "\n".join(zeilen), fehlend


if __name__ == "__main__":
    args = sys.argv[1:]
    pruefen = "--pruefen" in args
    for pfad in [a for a in args if a != "--pruefen"]:
        alt = open(pfad, encoding="utf-8").read()
        neu, fehlend = bearbeiten(alt, pruefen)
        for zeile, de, en in fehlend:
            print(f"{pfad}:{zeile}: {de} -> ({en})")
        if not pruefen and neu != alt:
            open(pfad, "w", encoding="utf-8").write(neu)

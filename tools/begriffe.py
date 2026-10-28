"""Fachbegriffe: Deutsch mit Englisch in Klammern, bei jedem Auftreten.

Aufruf:  python tools/begriffe.py [--pruefen] <datei.md>...
  ohne --pruefen: ergänzt den englischen Begriff überall, wo er fehlt
  mit  --pruefen: listet nur auf, wo er fehlt

Ausgelassen werden Überschriften, Codeblöcke, `Inline-Code`, Links, Bilder, HTML, Kommentare,
Text in Klammern und «Anführungszeichen» sowie fette Beschriftungen von Bedienelementen.
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
    (r"private[nr]? Cloud", "Private Cloud"),  # gross geschrieben ist «Private Cloud» auch deutsch
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

# Mehrzahl: englischer Begriff → deutsche Mehrzahlformen; dann wird das Englische mit «s» ergänzt
MEHRZAHL = {
    "Network Security Group": r"[Nn]etzwerksicherheitsgruppen",
    "Network Interface": r"[Nn]etzwerkschnittstellen",
    "Resource Group": r"[Rr]essourcengruppen",
    "Subscription": r"Abonnements",
    "Availability Zone": r"Verfügbarkeitszonen",
    "Region Pair": r"Regionspaare(?:n)?",
    "Management Group": r"Verwaltungsgruppen",
    "Virtual Machine": r"[Vv]irtuelle[n]? Maschinen",
    "Virtual Network": r"[Vv]irtuelle[n]? Netzwerke",
    "Subnet": r"Subnetze(?:n)?",
    "Storage Account": r"Speicherkont(?:os|en)",
    "Access Tier": r"Zugriffsebenen",
    "Deployment Model": r"Bereitstellungsmodelle(?:n)?",
    "Service Model": r"Servicemodelle(?:n)?",
    "Key Pair": r"Schlüsselpaare",
    "Service Tag": r"Diensttags",
}
GENITIV = re.compile(r"(?:des|eines|deines|meines|seines|ihres|dieses)\s+$")


def englisch_fuer(deutsch, englisch, davor):
    """Englischer Begriff in Einzahl oder Mehrzahl, passend zur deutschen Form."""
    mehrzahl = MEHRZAHL.get(englisch)
    if mehrzahl and re.fullmatch(mehrzahl, deutsch) and not GENITIV.search(davor):
        return englisch + "s"
    return englisch


GESCHUETZT = re.compile(r"`[^`]*`|\[[^\]]*\]\([^)]*\)|<!--.*?-->|<[^>]+>|https?://\S+")


def bearbeiten(text, pruefen=False):
    zeilen = text.split("\n")
    im_code = False
    fehlend = []
    for i, z in enumerate(zeilen):
        if z.lstrip().startswith("```"):
            im_code = not im_code
            continue
        if im_code or z.lstrip().startswith(("#", "![", "<", "    ")):
            continue
        geschuetzt = [m.span() for m in GESCHUETZT.finditer(z)]
        # in Klammern, «Zitaten» und fetten Bedienelementen (**Neu erstellen**) nichts einfügen
        klammern = [m.span() for m in re.finditer(r"\([^)]*\)|«[^»]*»", z)]
        fett = [m.span() for m in re.finditer(r"\*\*[^*]+\*\*", z)]
        einfuegen = []
        for deutsch, englisch in GLOSSAR:
            muster = re.compile(r"(?<![\w-])(" + deutsch + r")(?![\w-])(\*\*)?")
            for m in muster.finditer(z):
                a = m.start()
                if any(x <= a < y for x, y in geschuetzt + klammern):
                    continue
                if any(x < a < y and m.end() != y for x, y in fett):
                    continue  # Begriff ist Teil einer fetten Beschriftung
                if z[m.end():m.end() + 2] == " (":
                    continue  # schon eine Klammer dahinter
                einfuegen.append((m.end(), m.group(1), englisch_fuer(m.group(1), englisch, z[:a])))
        for ende, de, en in sorted(einfuegen, reverse=True):
            fehlend.append((i + 1, de, en))
            if not pruefen:
                z = z[:ende] + f" ({en})" + z[ende:]
        zeilen[i] = z
    fehlend.sort()
    return "\n".join(zeilen), fehlend


if __name__ == "__main__":
    args = sys.argv[1:]
    pruefen = "--pruefen" in args
    for pfad in [a for a in args if a != "--pruefen"]:
        alt = open(pfad, encoding="utf-8", newline="").read()
        neu, fehlend = bearbeiten(alt, pruefen)
        for zeile, de, en in fehlend:
            print(f"{pfad}:{zeile}: {de} -> ({en})")
        if not pruefen and neu != alt:
            open(pfad, "w", encoding="utf-8", newline="").write(neu)

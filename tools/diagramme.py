"""Erzeugt die Kursdiagramme (SVG) im PAT-Cloud-Solutions-Stil."""
import os, sys

OUT = sys.argv[1]
DARK, BLUE, LIGHT, LIGHT2, GREY, BG, WHITE = "#27303A", "#006FAD", "#DEE2FB", "#D5D8F4", "#6F6F6F", "#F7F7F7", "#FFFFFF"
OK, NO = "#2E7D32", "#B3261E"
FONT = "'Segoe UI', Arial, Helvetica, sans-serif"


def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


class Svg:
    def __init__(self, w, h, title):
        self.w, self.h, self.parts = w, h, []
        self.parts.append(f'<rect width="{w}" height="{h}" fill="{WHITE}"/>')
        self.parts.append(f'<rect x="0" y="{h-5}" width="{w}" height="5" fill="{BLUE}"/>')
        self.text(20, 30, title, 18, DARK, "bold", "start")

    def box(self, x, y, w, h, fill=WHITE, stroke=DARK, sw=1.5, rx=8, dash=False):
        d = ' stroke-dasharray="6 4"' if dash else ""
        self.parts.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"{d}/>')

    def text(self, x, y, s, size=14, fill=DARK, weight="normal", anchor="middle"):
        self.parts.append(f'<text x="{x}" y="{y}" font-size="{size}" fill="{fill}" font-weight="{weight}" text-anchor="{anchor}">{esc(s)}</text>')

    def label(self, x, y, w, h, lines, fill=WHITE, stroke=DARK, color=DARK, dash=False, sw=1.5, size=14):
        """Box mit zentriertem, mehrzeiligem Text. Erste Zeile fett."""
        self.box(x, y, w, h, fill, stroke, sw, dash=dash)
        n = len(lines)
        lh = size + 5
        y0 = y + h / 2 - (n - 1) * lh / 2 + size / 3
        for i, ln in enumerate(lines):
            self.text(x + w / 2, y0 + i * lh, ln, size if i == 0 else size - 2, color, "bold" if i == 0 else "normal")

    def arrow(self, x1, y1, x2, y2, color=DARK, dash=False, both=False, sw=2):
        mid = {DARK: "aD", BLUE: "aB", OK: "aO", NO: "aN", GREY: "aG"}[color]
        d = ' stroke-dasharray="7 5"' if dash else ""
        s = f' marker-start="url(#{mid})"' if both else ""
        self.parts.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="{sw}"{d}{s} marker-end="url(#{mid})"/>')

    def save(self, name, aria):
        markers = "".join(
            f'<marker id="{i}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="{c}"/></marker>'
            for i, c in (("aD", DARK), ("aB", BLUE), ("aO", OK), ("aN", NO), ("aG", GREY)))
        svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {self.w} {self.h}" width="{self.w}" height="{self.h}" '
               f'font-family="{FONT}" role="img" aria-label="{esc(aria)}">\n<defs>{markers}</defs>\n'
               + "\n".join(self.parts) + "\n</svg>\n")
        with open(os.path.join(OUT, name), "w", encoding="utf-8") as f:
            f.write(svg)


# 1 VM-Netzwerkmodi --------------------------------------------------------
s = Svg(1000, 470, "VM-Netzwerk: NAT und Netzwerkbrücke")
for ox, mode, vmip, vmsub, dev, partner_ok in ((0, "NAT (Standard)", "172.27.0.5", "privates Netz des Hypervisors", "NAT", False),
                                               (490, "Netzwerkbrücke", "192.168.1.57", "eigene IP im WLAN", "Netzwerkbrücke", True)):
    s.text(40 + ox, 62, mode, 16, BLUE, "bold", "start")
    s.label(340 + ox, 76, 120, 40, ["Internet"], LIGHT2, BLUE)
    s.box(30 + ox, 130, 440, 300, BG, GREY, dash=True)
    s.text(45 + ox, 152, "Schul-WLAN 192.168.1.0/24", 12, GREY, "normal", "start")
    s.box(50 + ox, 165, 250, 245, LIGHT, DARK)
    s.text(175 + ox, 188, "Dein Laptop · 192.168.1.20", 13, DARK, "bold")
    s.label(75 + ox, 202, 200, 36, [dev], WHITE, BLUE)
    s.label(75 + ox, 310, 200, 80, ["VM", vmip, vmsub], WHITE, DARK)
    s.arrow(110 + ox, 310, 110 + ox, 240)
    s.arrow(275 + ox, 220, 395 + ox, 118, BLUE)
    s.label(330 + ox, 250, 120, 60, ["Laptop", "Partner/in"], WHITE, GREY)
    if partner_ok:
        s.arrow(330 + ox, 300, 278 + ox, 345, OK)
        s.text(395 + ox, 330, "erreicht VM direkt*", 12, OK, "bold")
    else:
        s.arrow(330 + ox, 300, 278 + ox, 345, NO, dash=True)
        s.text(395 + ox, 330, "erreicht VM nicht ✗", 12, NO, "bold")
        s.text(200 + ox, 276, "nur dein Laptop erreicht die VM", 11, GREY)
s.text(20, 455, "* sofern das WLAN keine Client-Isolation hat", 11, GREY, "normal", "start")
s.save("vm-netzwerkmodi.svg", "Vergleich NAT und Netzwerkbrücke bei einer lokalen VM")

# 2 Azure-Hierarchie --------------------------------------------------------
s = Svg(920, 500, "Aufbau von Azure: vom Mandanten bis zur Ressource")
rows = [
    ("Microsoft Entra ID", "Mandant (Tenant)", "Identitäten: Benutzer, Gruppen, Anmeldung", DARK, WHITE, False),
    ("Verwaltungsgruppen", "Management Groups", "fassen mehrere Abonnements zusammen (optional)", LIGHT2, DARK, False),
    ("Abonnement", "Subscription", "Abrechnung, Kosten- und Quotengrenze · bei dir: Azure for Students", LIGHT, DARK, True),
    ("Ressourcengruppe", "Resource Group", "«Ordner» für alles, was zusammengehört · z. B. rg-tag3-mm", LIGHT, DARK, True),
]
for i, (t, en, desc, fill, col, hl) in enumerate(rows):
    y = 55 + i * 85
    s.label(30, y, 330, 58, [t, en], fill, BLUE if hl else DARK, col, sw=3 if hl else 1.5)
    s.text(385, y + 34, desc, 13, DARK, "normal", "start")
    s.arrow(195, y + 58, 195, y + 85)
for j, r in enumerate(["vm-web-mm", "sttag3mm", "vnet-tag4-mm"]):
    s.label(30 + j * 115, 395, 105, 44, [r], WHITE, BLUE, size=12)
s.text(385, 422, "Ressourcen: VM, Speicherkonto, VNet … – jede gehört zu genau einer Ressourcengruppe", 13, DARK, "normal", "start")
s.text(30, 475, "Blau umrandet: damit arbeitest du im Kurs. Löschst du eine Ressourcengruppe, löschst du alles darin.", 13, BLUE, "bold", "start")
s.save("azure-hierarchie.svg", "Hierarchie in Azure: Mandant, Verwaltungsgruppen, Abonnement, Ressourcengruppe, Ressourcen")

# 3 Regionen und Zonen -------------------------------------------------------
s = Svg(1000, 440, "Regionen, Verfügbarkeitszonen und Regionspaare")
s.box(20, 48, 960, 340, BG, GREY, dash=True)
s.text(35, 70, "Geografie Schweiz – die Daten bleiben im Land", 13, GREY, "bold", "start")
s.box(40, 85, 600, 285, LIGHT, BLUE, 2)
s.text(340, 108, "Region Switzerland North (Zürich)", 15, DARK, "bold")
for i in range(3):
    x = 58 + i * 195
    s.box(x, 122, 180, 232, WHITE, DARK)
    s.text(x + 90, 145, f"Verfügbarkeitszone {i+1}", 13, DARK, "bold")
    s.text(x + 90, 163, "eigener Strom, Kühlung, Netz", 11, GREY)
    s.label(x + 20, 180, 140, 70, ["Rechenzentrum"], LIGHT2, GREY, size=12)
    s.label(x + 20, 265, 140, 70, ["Rechenzentrum"], LIGHT2, GREY, size=12)
s.box(700, 85, 260, 285, LIGHT, BLUE, 2)
s.text(830, 108, "Region Switzerland West", 15, DARK, "bold")
s.text(830, 126, "(Genf)", 13, DARK)
s.label(735, 190, 190, 80, ["Rechenzentren", "eingeschränkter Zugang"], LIGHT2, GREY, size=12)
s.arrow(642, 228, 698, 228, BLUE, both=True)
s.text(670, 218, "Paar", 12, BLUE, "bold")
s.text(500, 412, "Zonen schützen vor dem Ausfall eines Rechenzentrums. Regionspaare schützen vor dem Ausfall einer ganzen Region.", 13, DARK)
s.save("azure-regionen.svg", "Region Switzerland North mit drei Verfügbarkeitszonen und Regionspaar Switzerland West")

# 4 Bestandteile einer VM ----------------------------------------------------
s = Svg(1000, 460, "Woraus besteht eine Azure-VM?")
s.box(20, 48, 960, 380, BG, GREY, dash=True)
s.text(35, 70, "Ressourcengruppe rg-tag3-mm", 13, GREY, "bold", "start")
s.label(380, 85, 240, 90, ["Virtuelle Maschine (VM)", "vm-web-mm · Standard_B1s", "CPU + RAM (Compute)"], DARK, DARK, WHITE)
s.label(50, 225, 220, 70, ["OS-Datenträger (OS Disk)", "verwaltet, z. B. 30 GB"], LIGHT, DARK)
s.label(50, 325, 220, 60, ["Datenträger", "optional, für Daten"], WHITE, GREY, dash=True)
s.label(390, 230, 220, 70, ["Netzwerkschnittstelle (NIC)", "private IP 10.0.0.4"], LIGHT, DARK)
s.label(380, 345, 240, 62, ["Virtuelles Netzwerk + Subnetz", "10.0.0.0/16 · 10.0.0.0/24"], LIGHT, DARK)
s.label(740, 100, 210, 70, ["Öffentliche IP (Public IP)", "z. B. 20.203.x.x"], LIGHT, DARK)
s.label(740, 230, 210, 70, ["NSG", "Netzwerksicherheitsgruppe", "z. B. Port 22 erlaubt"], WHITE, BLUE, sw=2, size=14)
s.arrow(420, 175, 270, 240)
s.arrow(500, 175, 500, 230)
s.arrow(500, 300, 500, 345)
s.arrow(380, 160, 272, 345, GREY, dash=True)
s.arrow(610, 250, 740, 140)
s.arrow(740, 265, 612, 265, BLUE)
s.text(676, 285, "schützt", 12, BLUE, "bold")
s.text(960, 448, "Kostet laufend: VM (solange zugeordnet), Datenträger, öffentliche IP", 12, GREY, "normal", "end")
s.save("azure-vm-bestandteile.svg", "Bestandteile einer Azure-VM: Compute, Datenträger, NIC, VNet, öffentliche IP und NSG")

# 5 Storage Account ----------------------------------------------------------
s = Svg(1000, 430, "Aufbau eines Speicherkontos (Storage Account)")
s.box(20, 48, 960, 360, LIGHT, BLUE, 2)
s.text(40, 76, "Speicherkonto sttag3mm", 16, DARK, "bold", "start")
s.text(40, 98, "global eindeutiger Name (3–24 Zeichen, klein) · Redundanz (LRS, ZRS, GRS …) · Zugriffsebene (Hot, Cool, Cold, Archive)", 12, DARK, "normal", "start")
cols = [("Blob-Speicher", "blob", "Objekte: Bilder, Backups, Websites"),
        ("Azure Files", "file", "Netzlaufwerk (SMB/NFS)"),
        ("Warteschlangen (Queue)", "queue", "Nachrichten zwischen Apps"),
        ("Tabellen (Table)", "table", "einfache NoSQL-Tabellen")]
for i, (t, ep, d) in enumerate(cols):
    x = 40 + i * 235
    hl = i == 0
    s.box(x, 115, 215, 275, WHITE, BLUE if hl else GREY, 3 if hl else 1.5)
    s.text(x + 107, 140, t, 15, DARK, "bold")
    s.text(x + 107, 158, d, 11, GREY)
    s.text(x + 107, 176, f"<name>.{ep}.core.windows.net", 11, BLUE)
    if hl:
        s.label(x + 15, 190, 185, 36, ["Container: bilder"], LIGHT, DARK, size=13)
        s.label(x + 30, 236, 155, 28, ["logo.png"], WHITE, GREY, size=12)
        s.label(x + 30, 270, 155, 28, ["foto.jpg"], WHITE, GREY, size=12)
        s.label(x + 15, 310, 185, 36, ["Container: $web"], LIGHT, DARK, size=13)
        s.label(x + 30, 352, 155, 28, ["index.html"], WHITE, GREY, size=12)
    elif i == 1:
        s.label(x + 15, 190, 185, 36, ["Freigabe: daten"], LIGHT2, GREY, size=13)
        s.label(x + 30, 236, 155, 28, ["Ordner / Datei"], WHITE, GREY, size=12)
    elif i == 2:
        s.label(x + 15, 190, 185, 36, ["Warteschlange"], LIGHT2, GREY, size=13)
        for k in range(3):
            s.label(x + 30 + k * 55, 240, 45, 26, ["msg"], WHITE, GREY, size=11)
    else:
        s.label(x + 15, 190, 185, 36, ["Tabelle"], LIGHT2, GREY, size=13)
        for r in range(3):
            for c in range(3):
                s.box(x + 30 + c * 52, 236 + r * 24, 50, 22, WHITE, GREY, 1, 2)
s.text(147, 402, "★ im Kurs", 12, BLUE, "bold")
s.save("azure-storage-aufbau.svg", "Speicherkonto mit Blob-Speicher, Azure Files, Warteschlangen und Tabellen")

# 6 Redundanz ----------------------------------------------------------------
s = Svg(1000, 380, "Redundanz im Speicherkonto: LRS, ZRS, GRS")
def copies(x, y, n=3):
    for k in range(n):
        s.label(x, y + k * 34, 70, 28, ["Kopie"], BLUE, BLUE, WHITE, size=12)
# LRS
s.box(20, 55, 230, 250, BG, GREY, dash=True); s.text(135, 78, "LRS – lokal", 15, DARK, "bold")
s.box(60, 95, 150, 180, LIGHT, DARK); s.text(135, 115, "1 Rechenzentrum", 12)
copies(100, 130)
# ZRS
s.box(270, 55, 310, 250, BG, GREY, dash=True); s.text(425, 78, "ZRS – zonenredundant", 15, DARK, "bold")
for k in range(3):
    x = 285 + k * 98
    s.box(x, 95, 88, 180, LIGHT, DARK); s.text(x + 44, 115, f"Zone {k+1}", 12)
    copies(x + 9, 165, 1)
# GRS
s.box(600, 55, 380, 250, BG, GREY, dash=True); s.text(790, 78, "GRS – georedundant", 15, DARK, "bold")
s.box(615, 95, 150, 180, LIGHT, DARK); s.text(690, 115, "primäre Region", 12)
copies(655, 130)
s.box(815, 95, 150, 180, LIGHT, DARK); s.text(890, 115, "sekundäre Region", 12)
copies(855, 130)
s.arrow(767, 185, 813, 185, BLUE, dash=True)
s.text(790, 175, "asynchron", 10, BLUE)
for x, t in ((135, "schützt vor Festplattenausfall"), (425, "+ Ausfall eines Rechenzentrums"), (790, "+ Ausfall einer ganzen Region")):
    s.text(x, 330, t, 13, DARK, "bold")
s.text(500, 360, "Je mehr Schutz, desto teurer. Für Übungen reicht LRS.", 12, GREY)
s.save("azure-redundanz.svg", "Vergleich der Redundanzoptionen LRS, ZRS und GRS")

# 7 VNet mit NSG -------------------------------------------------------------
s = Svg(1000, 560, "VNet, Subnetze und NSG")
s.label(400, 45, 200, 42, ["Internet"], LIGHT2, BLUE)
s.box(20, 110, 960, 410, BG, GREY, dash=True)
s.text(35, 132, "VNet vnet-tag4-mm · Adressraum 10.10.0.0/16", 13, DARK, "bold", "start")
for ox, sn, nsg, rules, vm, ip in (
        (0, "Subnetz snet-web · 10.10.1.0/24", "NSG nsg-web (eingehend)",
         [("100", "Allow", "TCP 80 von Internet", OK), ("110", "Allow", "TCP 22 von <Schul-IP>", OK),
          ("65000", "Allow", "VirtualNetwork (Standard)", GREY), ("65500", "Deny", "alles andere (Standard)", NO)],
         "vm-web-mm", "10.10.1.4 · öffentliche IP"),
        (480, "Subnetz snet-intern · 10.10.2.0/24", "NSG nsg-intern (eingehend)",
         [("65000", "Allow", "VirtualNetwork (Standard)", GREY), ("65500", "Deny", "alles andere (Standard)", NO)],
         "vm-db-mm", "10.10.2.4 · keine öffentliche IP")):
    s.box(40 + ox, 145, 440, 355, LIGHT, DARK)
    s.text(55 + ox, 167, sn, 13, DARK, "bold", "start")
    s.box(60 + ox, 180, 400, 150, WHITE, BLUE, 2)
    s.text(75 + ox, 202, nsg, 13, BLUE, "bold", "start")
    for k, (prio, act, what, col) in enumerate(rules):
        y = 228 + k * 25
        s.text(80 + ox, y, prio, 12, DARK, "bold", "start")
        s.text(140 + ox, y, act, 12, col, "bold", "start")
        s.text(195 + ox, y, what, 12, DARK, "normal", "start")
    s.label(150 + ox, 395, 220, 70, [vm, ip], DARK, DARK, WHITE)
s.arrow(470, 87, 260, 393, OK)
s.text(320, 360, "HTTP 80 ✓", 12, OK, "bold")
s.arrow(560, 87, 850, 178, NO, dash=True)
s.text(700, 98, "aus dem Internet ✗", 12, NO, "bold", "start")
s.arrow(372, 430, 628, 430, OK, dash=True)
s.text(500, 420, "innerhalb VNet ✓", 12, OK, "bold")
s.text(500, 545, "Regeln werden nach Priorität geprüft: kleine Zahl zuerst. Die erste passende Regel entscheidet.", 13, DARK)
s.save("azure-vnet-nsg.svg", "VNet mit zwei Subnetzen, NSG-Regeln und erlaubten sowie blockierten Verbindungen")

# 8 Weg einer Anfrage --------------------------------------------------------
s = Svg(1000, 280, "Der Weg einer Anfrage zu deiner VM – und wo sie scheitern kann")
steps = [("Internet", "Browser, ssh"), ("Öffentliche IP", "richtige IP?"), ("NSG am Subnetz", "Regel für Port + Quelle?"),
         ("NSG an der NIC", "falls vorhanden: auch hier?"), ("Firewall im OS", "ufw – meist aus"), ("Dienst", "läuft nginx / sshd?")]
for i, (t, q) in enumerate(steps):
    x = 20 + i * 163
    hl = i in (2, 3)
    s.label(x, 80, 138, 60, [t], LIGHT if hl else WHITE, BLUE if hl else DARK, sw=2.5 if hl else 1.5, size=13)
    s.text(x + 69, 170, q, 12, GREY)
    if i < len(steps) - 1:
        s.arrow(x + 138, 110, x + 163, 110)
s.text(500, 225, "Fehlersuche: Prüfe die Stationen der Reihe nach von links nach rechts.", 13, DARK, "bold")
s.text(500, 248, "Eine NSG muss den Verkehr in beiden Ebenen (Subnetz und NIC) erlauben, sonst wird er blockiert.", 12, GREY)
s.save("anfrage-weg.svg", "Stationen einer Anfrage von Internet bis zum Dienst auf der VM")

# 9 IaC-Ablauf ---------------------------------------------------------------
s = Svg(1000, 470, "Drei Wege zur selben Infrastruktur")
s.label(20, 60, 260, 62, ["Azure-Portal", "klicken – gut zum Lernen"], WHITE, GREY)
s.label(20, 160, 260, 62, ["Azure CLI / Skript", "imperativ: Schritt für Schritt"], WHITE, DARK)
s.label(20, 260, 260, 62, ["Bicep-Datei", "deklarativ: Zielzustand"], LIGHT, BLUE, sw=2.5)
s.label(20, 360, 260, 50, ["ARM-Template (JSON)"], WHITE, GREY, dash=True, size=13)
s.arrow(150, 322, 150, 358, GREY)
s.text(160, 344, "az bicep build", 11, GREY, "normal", "start")
s.label(360, 140, 220, 120, ["Azure Resource Manager", "(ARM)", "prüft Rechte und", "erstellt Ressourcen"], DARK, DARK, WHITE)
s.arrow(280, 91, 360, 170)
s.arrow(280, 191, 360, 200)
s.arrow(280, 291, 360, 235, BLUE)
s.box(650, 50, 330, 250, BG, GREY, dash=True)
s.text(665, 72, "Ressourcengruppe", 13, GREY, "bold", "start")
s.label(670, 90, 135, 46, ["VNet"], LIGHT, DARK, size=13)
s.label(825, 90, 135, 46, ["NSG"], LIGHT, DARK, size=13)
s.label(670, 175, 290, 56, ["VM vm-web-mm"], DARK, DARK, WHITE)
s.arrow(580, 200, 648, 200)
s.label(650, 340, 330, 80, ["cloud-init", "beim ersten Start der VM:", "Pakete, Dateien, Befehle"], LIGHT, BLUE, sw=2)
s.arrow(815, 231, 815, 338, BLUE, dash=True)
s.text(825, 290, "benutzerdefinierte Daten", 11, BLUE, "normal", "start")
s.text(500, 455, "Bicep baut das Haus – cloud-init richtet es beim Einzug ein.", 14, DARK, "bold")
s.save("iac-ablauf.svg", "Portal, CLI und Bicep laufen über den Azure Resource Manager; cloud-init richtet die VM beim ersten Start ein")

print("ok")

# 10 Servicemodelle ----------------------------------------------------------
s = Svg(1000, 470, "Servicemodelle: Wer verwaltet was?")
layers = ["Daten und Zugriffe", "Anwendung", "Laufzeit, Middleware", "Betriebssystem", "Virtualisierung", "Server", "Speicher", "Netzwerk"]
models = [("Eigenes Rechenzentrum", 8), ("IaaS", 4), ("PaaS", 2), ("SaaS", 1)]  # Anzahl Schichten, die du verwaltest (von oben)
for i, (m, mine) in enumerate(models):
    x = 40 + i * 235
    s.text(x + 105, 70, m, 16, DARK, "bold")
    for k, ly in enumerate(layers):
        y = 85 + k * 38
        you = k < mine
        s.label(x, y, 210, 32, [ly], BLUE if you else LIGHT, BLUE if you else GREY, WHITE if you else DARK, size=13)
s.box(40, 405, 22, 18, BLUE, BLUE, 1, 3); s.text(70, 419, "du verwaltest", 13, DARK, "normal", "start")
s.box(200, 405, 22, 18, LIGHT, GREY, 1, 3); s.text(230, 419, "der Anbieter verwaltet", 13, DARK, "normal", "start")
s.arrow(520, 414, 960, 414, GREY)
s.text(520, 440, "mehr Kontrolle", 12, GREY, "normal", "start")
s.text(960, 440, "weniger Aufwand", 12, GREY, "normal", "end")
s.save("servicemodelle.svg", "Verantwortung bei On Premises, IaaS, PaaS und SaaS")

# 11 VM vs Container ---------------------------------------------------------
s = Svg(1000, 400, "Virtuelle Maschinen und Container im Vergleich")
for ox, title in ((20, "Virtuelle Maschinen"), (520, "Container")):
    s.text(ox + 230, 62, title, 16, BLUE, "bold")
    s.label(ox, 330, 460, 40, ["Hardware"], LIGHT2, GREY, size=13)
s.label(20, 285, 460, 40, ["Hypervisor"], DARK, DARK, WHITE, size=13)
for k in range(3):
    x = 20 + k * 155
    s.box(x, 80, 150, 200, WHITE, BLUE, 2)
    s.text(x + 75, 100, f"VM {k+1}", 13, BLUE, "bold")
    s.label(x + 10, 110, 130, 40, ["App"], LIGHT, DARK, size=13)
    s.label(x + 10, 158, 130, 40, ["Bibliotheken"], LIGHT, DARK, size=13)
    s.label(x + 10, 206, 130, 64, ["Gast-OS", "mit eigenem Kernel"], DARK, DARK, WHITE, size=13)
s.label(520, 285, 460, 40, ["Host-Betriebssystem mit Kernel (geteilt)"], DARK, DARK, WHITE, size=13)
s.label(520, 240, 460, 40, ["Container-Engine (z. B. Docker)"], LIGHT2, DARK, size=13)
for k in range(3):
    x = 520 + k * 155
    s.box(x, 130, 150, 105, WHITE, BLUE, 2)
    s.text(x + 75, 148, f"Container {k+1}", 13, BLUE, "bold")
    s.label(x + 10, 155, 130, 34, ["App"], LIGHT, DARK, size=13)
    s.label(x + 10, 194, 130, 34, ["Bibliotheken"], LIGHT, DARK, size=13)
s.text(250, 390, "jede VM bringt ein ganzes Betriebssystem mit", 12, GREY)
s.text(750, 390, "Container teilen sich den Kernel – klein und schnell", 12, GREY)
s.save("vm-vs-container.svg", "Vergleich: VMs mit eigenem Betriebssystem, Container mit geteiltem Kernel")

# 12 SSH mit Schlüsselpaar ---------------------------------------------------
s = Svg(1000, 540, "Anmelden mit SSH-Schlüssel: so funktioniert es")
def nr(x, y, n):
    s.parts.append(f'<circle cx="{x}" cy="{y}" r="11" fill="{BLUE}"/>')
    s.text(x, y + 5, str(n), 13, WHITE, "bold")
s.box(30, 50, 300, 400, LIGHT, DARK)
s.text(180, 76, "Dein Laptop", 15, DARK, "bold")
s.text(180, 95, "C:\\Users\\<du>\\.ssh\\", 12, GREY)
s.label(55, 110, 250, 64, ["id_ed25519.pub", "öffentlicher Schlüssel = Schloss"], WHITE, BLUE, sw=2)
s.label(55, 300, 250, 78, ["id_ed25519", "privater Schlüssel = Schlüssel", "bleibt hier – nie weitergeben"], DARK, DARK, WHITE)
s.text(180, 420, "beide erstellt mit ssh-keygen", 12, GREY)
s.box(670, 50, 300, 400, LIGHT, DARK)
s.text(820, 76, "Server", 15, DARK, "bold")
s.text(820, 95, "vm1 (Tag 1) oder Azure-VM (Tag 3)", 12, GREY)
s.label(695, 110, 250, 64, ["~/.ssh/authorized_keys", "Liste der erlaubten Schlösser"], WHITE, BLUE, sw=2)
s.label(695, 300, 250, 78, ["Prüfung", "passt die Lösung zum Schloss?", "ja → angemeldet ✓"], WHITE, OK, OK, sw=2)
s.arrow(305, 142, 693, 142, BLUE, dash=True)
nr(350, 126, 1); s.text(368, 131, "einmal: Schloss auf den Server kopieren", 12, BLUE, "bold", "start")
s.arrow(330, 215, 668, 215)
nr(350, 200, 2); s.text(368, 205, "ssh ubuntu@<IP>: «Ich habe den Schlüssel dazu»", 12, DARK, "normal", "start")
s.arrow(670, 265, 332, 265)
nr(350, 250, 3); s.text(368, 255, "Server stellt eine Prüfaufgabe (Zufallszahl)", 12, DARK, "normal", "start")
s.arrow(305, 330, 693, 330, OK)
nr(350, 315, 4); s.text(368, 320, "Laptop löst sie mit dem privaten Schlüssel", 12, OK, "bold", "start")
s.text(500, 485, "Der private Schlüssel verlässt deinen Laptop nie. Über das Netz geht nur die Lösung der Prüfaufgabe.", 14, DARK, "bold")
s.text(500, 512, "Wer nur das Schloss (den öffentlichen Schlüssel) kennt, kann die Aufgabe nicht lösen. Darum darf es jeder sehen.", 12, GREY)
s.save("ssh-schluessel.svg", "SSH-Anmeldung: öffentlicher Schlüssel liegt auf dem Server, der Laptop löst die Prüfaufgabe mit dem privaten Schlüssel")

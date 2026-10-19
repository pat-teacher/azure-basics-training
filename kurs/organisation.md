<img src="../assets/branding/kurs-banner.svg" alt="PAT Cloud Solutions" width="100%">

# Organisation

Stand: 19.10.2026

## Kursziele
Nach dem Kurs kannst du:
1. Virtualisierung, Hypervisoren und virtuelle Maschinen erklären und die Grundprinzipien einer Cloud-Plattform beschreiben. (K2)
2. die Betriebsmodelle IaaS, PaaS und SaaS unterscheiden und Beispiele zuordnen. (K2)
3. die zentralen Azure-Ressourcen in Storage, Compute und Network erklären. (K2)
4. einfache Azure-Umgebungen mit Storage Account, VM, VNet, Subnetzen und NSG bereitstellen, konfigurieren und wieder löschen. (K3)
5. eine VM automatisiert mit Scripting (Azure CLI), ARM/Bicep und Cloud-Init bereitstellen. (K3)

## Tagesrhythmus
Jeder Tag hat 8 Lektionen à 45 Minuten. Ungefähr so verteilt:

| Anteil | Was | Wie |
|--------|-----|-----|
| ca. 15 % | Einstieg, Rückblick, Abschluss | Quiz, Exit-Ticket, Fragen |
| ca. 15 % | Inputs | 2–3 kurze Inputs à max. 20 Min., immer mit Live-Demo |
| ca. 70 % | Hands-on | Aufträge einzeln oder zu zweit, Kursleitung coacht |

<!-- prüfen: Unterrichtszeiten und Pausen nach Bestätigung durch den Auftraggeber eintragen -->

## Azure-Zugang
- Du arbeitest mit deinem **Azure-for-Students-Abonnement**.
- Für einzelne Aufträge setzt die Kursleitung zusätzlich **Labs im Azure Education Hub** ein. Du bekommst dafür eine Einladung per E-Mail.
- Das Guthaben ist begrenzt. Deshalb gilt in jedem Azure-Auftrag:
  - VM-Grösse aus der Liste «Für kostenlose Dienste berechtigt» (Free services eligible) wählen, z. B. `Standard_B1s` oder `Standard_B2ats_v2`. <!-- prüfen: Stand 19.10.2026, Liste im Portal kontrollieren -->
  - Nur eine VM gleichzeitig laufen lassen.
  - Am Ende jedes Auftrags die Ressourcengruppe löschen.

## Namen und Tags
| Ressource | Schema | Beispiel (Kürzel `mm`) |
|-----------|--------|------------------------|
| Ressourcengruppe | `rg-tag<n>-<kuerzel>` | `rg-tag3-mm` |
| Virtuelle Maschine | `vm-<zweck>-<kuerzel>` | `vm-web-mm` |
| Virtuelles Netzwerk | `vnet-tag<n>-<kuerzel>` | `vnet-tag4-mm` |
| Subnetz | `snet-<zweck>` | `snet-web` |
| NSG | `nsg-<zweck>` | `nsg-web` |
| Storage Account | `sttag<n><kuerzel>` (klein, ohne Bindestrich) | `sttag3mm` |

`<kuerzel>` = deine Initialen. Jede Ressourcengruppe bekommt die Tags `kurs=azure-basics`, `tag=<n>`, `owner=<kuerzel>`.

## Lernjournal
Halte pro Auftrag fest:
- was du gemacht hast (Befehle, wichtige Einstellungen)
- einen Screenshot als Nachweis (ohne persönliche Daten wie E-Mail oder Abo-ID)
- was nicht geklappt hat und wie du es gelöst hast

## Zusammenarbeit
- **Partnerarbeit:** Eine Person tippt (Driver), die andere liest den Auftrag und kontrolliert (Navigator). Nach jedem Auftrag wechselt ihr.
- **Hilfe holen:** Zuerst 10 Minuten selbst probieren, dann Partner fragen, dann Kursleitung.

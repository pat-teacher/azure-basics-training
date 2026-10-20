<img src="../assets/branding/kurs-banner.svg" alt="PAT Cloud Solutions" width="100%">

# Organisation

Stand: 19.10.2026

## Kursziele
Nach dem Kurs kannst du:
1. Virtualisierung, Hypervisoren und virtuelle Maschinen (Virtual Machine) erklären und die Grundprinzipien einer Cloud-Plattform beschreiben. (K2)
2. die Betriebsmodelle IaaS, PaaS und SaaS unterscheiden und Beispiele zuordnen. (K2)
3. die zentralen Azure-Ressourcen für Speicher (Storage), Rechenleistung (Compute) und Netzwerk (Network) erklären. (K2)
4. einfache Azure-Umgebungen mit Speicherkonto (Storage Account), VM, VNet, Subnetzen (Subnet) und NSG bereitstellen, konfigurieren und wieder löschen. (K3)
5. eine VM automatisiert mit Scripting (Azure CLI), ARM/Bicep und cloud-init bereitstellen. (K3)

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
  - Am Ende jedes Auftrags die Ressourcengruppe (Resource Group) löschen.

## Themen mit Microsoft Entra ID: Challenge Labs
Mit Azure for Students hast du keine Rechte in Microsoft Entra ID. Themen wie **Rollenbasierte Zugriffssteuerung (RBAC)** oder **bedingter Zugriff (Conditional Access)** übst du deshalb in den **Challenge Labs** von Microsoft Learn for Educators (Plattform [Learn on Demand / Skillable](https://msle.learnondemand.net/)):
1. Mit dem Trainingsschlüssel der Kursleitung anmelden und ein Skillable-Konto registrieren.
2. Unter **Meine Schulung** die Klasse öffnen und das angegebene Challenge Lab starten.
3. Du arbeitest in einer vorbereiteten Umgebung mit einem temporären Konto. Die Anleitung erscheint im zweiten Fenster.

> [!IMPORTANT]
> Challenge Labs sind zeitlich begrenzt und lassen sich nur wenige Male starten (meist 3). Starte ein Lab erst, wenn du Zeit hast, es fertig zu machen.

<!-- prüfen: Trainingsschlüssel und Lab-Auswahl im Microsoft Learn for Educators Portal bereitstellen; Themen ausserhalb des Vertragsumfangs nur als Zusatz (⭐) -->

## Namen und Tags
| Ressource | Schema | Beispiel (Kürzel `mm`) |
|-----------|--------|------------------------|
| Ressourcengruppe | `rg-tag<n>-<kuerzel>` | `rg-tag3-mm` |
| Virtuelle Maschine | `vm-<zweck>-<kuerzel>` | `vm-web-mm` |
| Virtuelles Netzwerk (Virtual Network) | `vnet-tag<n>-<kuerzel>` | `vnet-tag4-mm` |
| Subnetz | `snet-<zweck>` | `snet-web` |
| NSG | `nsg-<zweck>` | `nsg-web` |
| Speicherkonto | `sttag<n><kuerzel>` (klein, ohne Bindestrich) | `sttag3mm` |

`<kuerzel>` = deine Initialen. Jede Ressourcengruppe bekommt die Tags `kurs=azure-basics`, `tag=<n>`, `owner=<kuerzel>`.

## Lernjournal
Halte pro Auftrag fest:
- was du gemacht hast (Befehle, wichtige Einstellungen)
- einen Screenshot als Nachweis (ohne persönliche Daten wie E-Mail oder Abo-ID)
- was nicht geklappt hat und wie du es gelöst hast

## Exit-Ticket
Am Ende jedes Kurstages beantwortest du **eine kurze Frage** zum Tag – dein «Ticket zum Ausgang». Die Frage steht in der Tagesplanung unter «Bevor du gehst».

**So geht's**
- Du hast etwa 5 Minuten Zeit.
- Antworte in 1–3 Sätzen, in deinen eigenen Worten. Nicht nachschlagen – es geht darum, was du im Kopf hast.
- Gib die Antwort im Formular ab, das die Kursleitung im Kurskanal teilt. <!-- prüfen: Forms-Link pro Tag bereitstellen --> Schreib sie zusätzlich als letzten Eintrag des Tages in dein Lernjournal.
- Es gibt keine Note und keine falschen Antworten.

**Wozu ist das gut?**
- **Für dich:** Wenn du den Tag in eigenen Worten zusammenfasst, merkst du dir mehr. Und du merkst selbst, wo du noch unsicher bist.
- **Für die Kursleitung:** Sie sieht, was angekommen ist und wo es noch hakt. Am nächsten Morgen werden einige Antworten (ohne Namen) besprochen und offene Punkte geklärt.
- **Für den Kurs:** Ist eine Frage für viele unklar, wird der nächste Tag angepasst.

## Zusammenarbeit
- **Partnerarbeit:** Eine Person tippt (Driver), die andere liest den Auftrag und kontrolliert (Navigator). Nach jedem Auftrag wechselt ihr.
- **Hilfe holen:** Zuerst 10 Minuten selbst probieren, dann Partner fragen, dann Kursleitung.

<sub>PAT Cloud Solutions · Einführung in Cloud Computing mit Microsoft Azure · Theorie</sub>

# 1 Virtualisierung

Stand: 19.10.2026 · gehört zu [Tag 1](../kurs/tag-1.md)

## Lernziele
- Du kannst erklären, was Virtualisierung ist und welche Rolle ein Hypervisor spielt. (K2)
- Du kannst Typ-1- und Typ-2-Hypervisoren unterscheiden und Produkte zuordnen. (K2)
- Du kannst erklären, warum man einer VM mehr Ressourcen zuweisen kann, als physisch vorhanden sind (Overcommitment). (K2)
- Du kannst die Netzwerkmodi NAT und Netzwerkbrücke vergleichen. (K4)
- Du kannst den Unterschied zwischen VM und Container beschreiben. (K2)

## Was ist Virtualisierung?
Virtualisierung trennt Betriebssystem und Anwendungen von der physischen Hardware. Die Software-Schicht dazwischen heisst **Hypervisor**. Er teilt CPU, RAM, Disk und Netzwerk auf mehrere **virtuelle Maschinen (VMs)** auf. Jede VM verhält sich wie ein eigener Computer mit eigenem Betriebssystem, obwohl sich alle dieselbe Hardware teilen.

**Wozu?** Ein physischer Server ohne Virtualisierung ist oft nur zu 10–20 % ausgelastet. Mit Virtualisierung laufen viele VMs auf derselben Maschine. VMs lassen sich in Sekunden erstellen, klonen, verschieben und löschen. Genau das macht Cloud Computing erst möglich.

> **Alltagsvergleich:** Ein Mehrfamilienhaus. Das Gebäude (Hardware) ist eines, aber jede Wohnung (VM) hat eine eigene Tür, eigene Möbel und eigene Bewohner. Die Hausverwaltung (Hypervisor) teilt Wasser, Strom und Heizung zu.

## Typ 1 und Typ 2

![Hypervisor Typ 1 und Typ 2](img/tbz/Hypervisor.png)
<sub>Grafik: TBZ M346</sub>

| | Typ 1 (bare metal) | Typ 2 (hosted) |
|---|---|---|
| Läuft auf | direkt auf der Hardware | als Programm auf einem Betriebssystem |
| Leistung | hoch, kein Betriebssystem dazwischen | etwas tiefer |
| Typischer Einsatz | Rechenzentren, Cloud-Anbieter | Laptop, Tests, Schulung |
| Beispiele | Microsoft Hyper-V, VMware ESXi, KVM, Xen | VirtualBox, VMware Workstation, Parallels |

Die Grenze ist nicht immer scharf. Ein Beispiel: Schaltest du Hyper-V unter Windows ein, läuft der Hypervisor direkt auf der Hardware. Windows selbst läuft danach als besondere VM darauf. Hyper-V ist deshalb Typ 1. Auch **Azure** läuft auf einer angepassten Version von Hyper-V.

## Overcommitment (Überbuchung): mehr zuweisen, als da ist
Auf einem Laptop mit 8 logischen Prozessoren kannst du drei VMs mit je 4 vCPUs betreiben, zusammen also 12. Eine einzelne VM bekommt höchstens so viele vCPUs, wie der Host logische Prozessoren hat. Die Zuweisung ist ein **Versprechen, keine Reservation**.
- **CPU:** Virtuelle CPUs sind für den Host einfach Threads. Sie teilen sich die echten Kerne in kurzen Zeitscheiben. Das funktioniert gut, solange nicht alle VMs gleichzeitig volle Last haben.
- **RAM:** Reicht der echte Speicher nicht, lagert der Host Daten auf die Disk aus (Swap). Die Disk ist viel langsamer als der RAM. Brauchen alle VMs gleichzeitig viel Speicher, wird alles extrem langsam (Thrashing).

Cloud-Anbieter nutzen Overcommitment auch, aber kontrolliert und überwacht.

## Netzwerk einer lokalen VM

![NAT und Netzwerkbrücke](img/vm-netzwerkmodi.svg)

| Modus | Was passiert | Wann verwenden |
|-------|--------------|----------------|
| **NAT** | Die VM hat ein eigenes privates Netz (bei VirtualBox `10.0.2.x`). Sie erreicht das Internet, ist von aussen aber unsichtbar. Einzelne Ports kannst du gezielt weiterleiten. | Standard, sicher in fremden Netzen |
| **Netzwerkbrücke** | Die VM hängt direkt im selben Netz wie dein Laptop und bekommt eine eigene IP vom Router. | wenn andere Geräte die VM erreichen sollen |
| **Host-only** | Nur Laptop und VMs sehen sich, kein Internet. | isolierte Testnetze |

**SSH** (Secure Shell) ist der Standard, um sich auf Linux-Servern anzumelden. Wie das mit Schlüsseln funktioniert, steht in [Kapitel 4](04-azure-compute.md#anmelden-mit-ssh-schlüssel).

Die Portweiterleitung bei NAT ist die gleiche Idee wie eine Regel in einer Firewall: Du öffnest bewusst nur das, was nötig ist. In Azure übernimmt das die **Netzwerksicherheitsgruppe (NSG)** (Kapitel 6).

## Snapshots und Klone
- **Snapshot:** Speichert den Zustand der Disk zu einem Zeitpunkt. Stellst du ihn wieder her, ist alles weg, was danach passiert ist, auch gewollte Änderungen. Der Snapshot liegt auf demselben Laptop wie die VM. Ob er damit ein Backup ersetzt, überlegst du in Auftrag 1.4.
- **Klon:** Eine Kopie der ganzen VM. Ein **verknüpfter Klon** speichert nur die Unterschiede zum Original und braucht deshalb wenig Platz. Achtung: Hostname, SSH-Schlüssel und Machine-ID sind gleich wie beim Original.

## Container: die leichte Alternative

![Container und VM im Vergleich](img/vm-vs-container.svg)

Eine VM virtualisiert die **Hardware** und bringt ein ganzes Betriebssystem mit. Ein **Container** virtualisiert das **Betriebssystem**: Alle Container auf einem Host teilen sich denselben Kernel. Sie enthalten nur die Anwendung und ihre Bibliotheken.

| | VM | Container |
|---|---|---|
| Startzeit | Sekunden bis Minuten | Bruchteile einer Sekunde |
| Grösse | mehrere GB | wenige MB bis einige 100 MB |
| Eigener Kernel | ja | nein |
| Isolation | stark | gut, aber geteilter Kernel |

Ein **Image** ist die Vorlage, ein **Container** ist eine laufende Instanz davon. Fertige Images gibt es in **Registries** wie Docker Hub.

## Vom Hypervisor zum Hyperscaler
Was passiert, wenn man tausende Server mit Typ-1-Hypervisoren zusammenschaltet und über eine Web-API steuert? Dann hat man eine Cloud. Mehr dazu in [Kapitel 2](02-cloud-grundlagen.md).

## Selbsttest

<details><summary>1. Ein Kollege sagt: «Docker ist auch ein Hypervisor.» Stimmt das?</summary>

Nein. Docker isoliert Prozesse auf demselben Kernel (Container). Ein Hypervisor betreibt vollständige Gast-Betriebssysteme mit eigenem Kernel.
</details>

<details><summary>2. Dein Laptop hat 8 logische Prozessoren. Du startest drei VMs mit je 4 vCPUs. Wie ist das möglich?</summary>

Die 12 vCPUs sind für den Host Threads, die sich die 8 echten Kerne in Zeitscheiben teilen (Overcommitment). Echte Parallelität gibt es aber nur bis 8. Unter Volllast aller VMs wird es langsam.
</details>

<details><summary>3. Warum setzen Cloud-Anbieter Typ-1-Hypervisoren ein?</summary>

Weniger Verlust durch ein Betriebssystem dazwischen, bessere Kontrolle über die Isolation, direkte Verwaltung der Hardware. Bei zehntausenden Servern zählt jedes Prozent.
</details>

<details><summary>4. Deine VM im NAT-Modus ist von deinem Partner aus nicht erreichbar. Ist das ein Fehler?</summary>

Nein, das ist gewollt. NAT versteckt die VM. Wenn sie erreichbar sein soll: Netzwerkbrücke, oder eine Portweiterleitung mit der WLAN-IP deines Laptops als Host-IP statt `127.0.0.1`.
</details>

<details><summary>5. Du stellst einen Snapshot von heute Morgen wieder her. Was passiert mit dem Paket, das du am Mittag installiert hast?</summary>

Es ist weg. Der Snapshot setzt die ganze Disk auf den Zustand von heute Morgen zurück.
</details>

## Quellen
- TBZ M346: [Virtualisierung & Hypervisor](https://gitlab.com/ch-tbz-it/Stud/m346/m346/-/blob/main/Theorie/Virtualisierung.md) (Texte und Grafik übernommen und angepasst)
- TBZ M347: [Docker einfach erklärt](https://gitlab.com/ch-tbz-it/Stud/m347/-/blob/main/Container/docker/Readme.md) (Texte übernommen und angepasst)
- Microsoft: [Was ist Virtualisierung?](https://azure.microsoft.com/de-de/resources/cloud-computing-dictionary/what-is-virtualization)
- Microsoft Learn: [Hypervisor-Sicherheit in der Azure-Flotte](https://learn.microsoft.com/de-de/azure/security/fundamentals/hypervisor)
- Microsoft Learn: [Container im Vergleich zu virtuellen Computern](https://learn.microsoft.com/de-de/virtualization/windowscontainers/about/containers-vs-vm)

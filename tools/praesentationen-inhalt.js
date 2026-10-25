// Inhalte der Präsentationen. Bilder: <name>-folie.png = Diagramm ohne eigenen Titel (siehe tools/README.md)
// Stand: 25.10.2026

const ende = (title, sub, items) => ({ type: "end", title, sub, items });

// =============================================================================
// KURSEINFÜHRUNG (Tag 1, L1 – vor der Tagespräsentation)
// =============================================================================
const EINFUEHRUNG = [
  {
    file: "kurs-einfuehrung.pptx", title: "Kurseinführung: Einführung in Cloud Computing mit Microsoft Azure",
    sections: [
      { title: "Willkommen", slides: [
        { type: "title", title: "Einführung in Cloud Computing mit Microsoft Azure", sub: "Kurseinführung · 5 Kurstage · PAT Cloud Solutions",
          notes: "Begrüssung. Kursleitung und PAT Cloud Solutions kurz vorstellen. Die ganze Einführung dauert ca. 15 Minuten." },
        { type: "points", title: "Wer bist du?", items: [
          { icon: "FaUsers", h: "Name und Lehrbetrieb", t: "In welcher Firma machst du deine Lehre?" },
          { icon: "FaWrench", h: "Dein Alltag im Betrieb", t: "Was machst du dort am häufigsten?" },
          { icon: "FaFlagCheckered", h: "Deine Erwartung", t: "Was möchtest du nach dem Kurs können?" },
        ], notes: "Kurze Vorstellungsrunde, pro Person höchstens 30 Sekunden. Erwartungen notieren und an Tag 5 im Feedback wieder aufgreifen. Vorwissen zu VMs folgt im Einstieg von Tag 1." },
      ] },
      { title: "Ziel", slides: [
        { type: "statement", title: "Das Ziel des Kurses", icon: "FaFlagCheckered",
          quote: "Am letzten Kurstag stellst du eine komplette Umgebung in Azure mit einem einzigen Befehl bereit: Netzwerk, Firewall und Webserver.",
          points: ["Du startest auf deinem eigenen Laptop und gehst Schritt für Schritt in die Cloud.",
            "Die fiktive Firma «Velo Zürich AG» begleitet dich durch den ganzen Kurs.",
            "An Tag 5 baust du das im Abschlussprojekt zu zweit und stellst es kurz vor."],
          notes: "Das ist das Abschlussprojekt an Tag 5. Hier nur das Bild zeigen – Auftrag, Abgabe und Präsentation stehen in der Präsentation von Tag 5." },
        { type: "cards", title: "Nach dem Kurs kannst du …", cols: 3, items: [
          { icon: "FaLayerGroup", h: "Virtualisierung (K2)", t: "Hypervisor und VM erklären und beschreiben, wie eine Cloud-Plattform funktioniert." },
          { icon: "FaCubes", h: "IaaS, PaaS, SaaS (K2)", t: "die Betriebsmodelle unterscheiden und Beispiele zuordnen." },
          { icon: "FaServer", h: "Azure-Ressourcen (K2)", t: "die wichtigsten Ressourcen für Speicher, Rechenleistung und Netzwerk erklären." },
          { icon: "FaNetworkWired", h: "Azure-Umgebung (K3)", t: "Speicherkonto (Storage Account), VM, VNet, Subnetz (Subnet) und NSG bereitstellen und löschen." },
          { icon: "FaRocket", h: "Automatisierung (K3)", t: "eine VM mit Azure CLI, Bicep und cloud-init automatisch bereitstellen." },
        ], notes: "Die fünf Kursziele aus kurs/organisation.md. K2 = verstehen und erklären, K3 = selbst anwenden." },
      ] },
      { title: "Aufbau", slides: [
        { type: "table", title: "Der Kurs im Überblick", head: ["Tag", "Schwerpunkt", "Du baust …"], colW: [1, 4, 6], rows: [
          ["1", "Grundlagen Virtualisierung", "lokale VMs mit Multipass, deine erste automatische VM"],
          ["2", "Public Cloud und Azure Grundlagen", "deine ersten Azure-Ressourcen im Portal und mit der Azure CLI"],
          ["3", "Azure Compute und Storage", "eine Linux-VM in Azure und ein Speicherkonto"],
          ["4", "Azure Networking", "ein VNet mit Subnetzen und NSG-Regeln"],
          ["5", "Automatisierung mit Bicep und cloud-init", "eine komplette Umgebung als Code – Abschlussprojekt"],
        ], note: "Jeder Tag baut auf dem vorherigen auf: vom Laptop in die Cloud.",
          notes: "Roter Faden: von der VM auf dem eigenen Laptop zur automatisierten Umgebung in der Cloud." },
        { type: "table", title: "So läuft ein Kurstag", head: ["Anteil", "Was", "Wie"], colW: [1.6, 4, 6], rows: [
          ["ca. 15 %", "Einstieg, Rückblick, Abschluss", "Rückblick-Quiz zum letzten Kurstag, Exit-Ticket zum Schluss"],
          ["ca. 15 %", "Inputs", "2–3 kurze Inputs à max. 20 Min., immer mit Live-Demo"],
          ["ca. 70 %", "Hands-on", "Aufträge einzeln oder zu zweit, die Kursleitung coacht"],
        ], note: "8 Lektionen à 45 Minuten pro Kurstag. Die Kurstage sind verteilt – dein Lernjournal hilft dir beim Wiedereinstieg.",
          notes: "Kein Frontalunterricht. Fragen sind jederzeit willkommen. Unterrichtszeiten und Pausen hier ergänzen." },
      ] },
      { title: "Zusammenarbeit", slides: [
        { type: "cards", title: "So arbeiten wir", cols: 2, items: [
          { icon: "FaPencilAlt", h: "Lernjournal", t: "Pro Auftrag: Befehle, Screenshot als Nachweis (ohne persönliche Daten), was nicht geklappt hat." },
          { icon: "FaUsers", h: "Partnerarbeit", t: "Driver tippt, Navigator liest und kontrolliert. Nach jedem Auftrag wechseln." },
          { icon: "FaClock", h: "Hilfe holen", t: "10 Minuten selbst probieren, dann Partner fragen, dann Kursleitung." },
          { icon: "FaDoorOpen", h: "Exit-Ticket", t: "Am Ende jedes Tages eine kurze Frage, 1–3 Sätze. Keine Note." },
        ], notes: "Lernjournal-Format zeigen (Markdown, OneNote oder Word – nach Absprache)." },
        { type: "cards", title: "Deine Werkzeuge", cols: 3, items: [
          { icon: "FaLaptop", h: "Multipass", t: "Tag 1: VMs auf deinem Laptop – Ubuntu lädt es selbst herunter." },
          { icon: "FaTerminal", h: "Portal, Cloud Shell, Azure CLI", t: "Ab Tag 2: Azure im Browser und mit Befehlen steuern." },
          { icon: "FaCode", h: "Bicep und cloud-init", t: "Tag 5: Infrastruktur und Einrichtung in Dateien beschreiben." },
        ], notes: "Alles läuft im Browser oder kommt von selbst. Ausser Multipass ist nichts zu installieren." },
        { type: "cards", title: "Spielregeln für Azure", cols: 3, items: [
          { icon: "FaCoins", h: "Guthaben schonen", t: "Azure for Students hat begrenztes Guthaben. Erstelle nur, was der Auftrag verlangt." },
          { icon: "FaTrashAlt", h: "Immer aufräumen", t: "Am Ende jedes Azure-Auftrags die Ressourcengruppe (Resource Group) löschen." },
          { icon: "FaUserShield", h: "Keine echten Daten", t: "Nur die fiktive Firma «Velo Zürich AG». Keine persönlichen Daten auf Screenshots." },
        ], notes: "Gilt ab Tag 2. Heute arbeiten alle nur lokal mit Multipass." },
        ende("Los geht's", "Tag 1 · Grundlagen Virtualisierung"),
      ] },
    ],
  },
];

// =============================================================================
// TAGESPRÄSENTATIONEN
// =============================================================================
const TAGE = [
  // ---------------------------------------------------------------- Tag 1
  {
    file: "tag-1-virtualisierung.pptx", title: "Tag 1: Grundlagen Virtualisierung",
    sections: [
      { title: "Start", slides: [
        { type: "title", title: "Tag 1: Grundlagen Virtualisierung", sub: "Einführung in Cloud Computing mit Microsoft Azure",
          notes: "Direkt nach der Kurseinführung (kurs-einfuehrung.pptx). Überleitung: Heute bleiben wir noch auf dem Laptop – ab Tag 2 geht es in die Cloud." },
        { type: "points", title: "Was weisst du schon?", items: [
          { icon: "FaServer", h: "Wer hat schon eine virtuelle Maschine benutzt?", t: "Mit welchem Programm? Wofür?" },
          { icon: "FaBuilding", h: "Wo laufen VMs in deinem Lehrbetrieb?", t: "Server im Keller, Rechenzentrum, Cloud?" },
          { icon: "FaDocker", h: "Wer kennt Docker?", t: "Was ist der Unterschied zu einer VM? Eine Vermutung reicht." },
        ], notes: "Vorwissen aktivieren, 5 Minuten. Handzeichen oder Kurzumfrage (z. B. Forms/Mentimeter)." },
      ] },
      { title: "Heute", slides: [
        { type: "cards", title: "Deine Ziele heute", cols: 3, items: [
          { icon: "FaLayerGroup", h: "Hypervisor (K2)", t: "Du erklärst, was ein Hypervisor macht, und ordnest Typ 1 und Typ 2 zu." },
          { icon: "FaServer", h: "VMs mit Multipass (K3)", t: "Du erstellst, startest, stoppst und löschst VMs." },
          { icon: "FaMemory", h: "Ressourcen (K3)", t: "Du gibst einer VM CPU, RAM und Festplatte und prüfst es." },
          { icon: "FaRocket", h: "cloud-init (K3)", t: "Du richtest eine VM von Hand und automatisch mit einer Datei ein." },
          { icon: "FaKey", h: "SSH-Schlüssel (K3)", t: "Du erstellst ein Schlüsselpaar für die Cloud." },
        ], notes: "⭐-Ziel für Schnelle: Unterschied VM und Container beschreiben (Auftrag 1.7)." },
        { type: "table", title: "Ablauf", head: ["Lektion", "Phase", "Inhalt"], colW: [1.2, 2.2, 7.6], rows: [
          ["L1", "Kurseinführung, Input 1", "Ziel und Aufbau des Kurses · Was weisst du schon? · Was ist Virtualisierung?"],
          ["L2", "Hands-on, Demo", "Lernjournal anlegen · Auftrag 1.1: Hypervisor und dein Laptop · Live-Demo Multipass"],
          ["L3–L4", "Hands-on", "Auftrag 1.2: Multipass und deine erste VM · 1.3: CPU und RAM"],
          ["L5", "Hands-on, Input", "Auftrag 1.4: Server von Hand · Automatisch statt von Hand: cloud-init"],
          ["L6", "Hands-on", "Auftrag 1.5: Deine erste automatische VM"],
          ["L7", "Kurz-Input, Hands-on", "SSH-Schlüssel · Auftrag 1.6 · ⭐ 1.7: Container mit Docker"],
          ["L8", "Puffer, Abschluss", "Offene Aufträge fertig machen · Aufräumen · Exit-Ticket · Ausblick Tag 2"],
        ], notes: "Zeiten an den Stundenplan anpassen." },
        { type: "table", title: "Deine Aufträge", head: ["Nr.", "Auftrag", "Zeit", "Form"], colW: [1.2, 6.5, 1.4, 2.3], rows: [
          ["1.1", "Hypervisor und dein Laptop", "30 Min.", "Partner"],
          ["1.2", "Multipass und deine erste VM", "60 Min.", "Einzel"],
          ["1.3", "Wie viel CPU und RAM bekommt eine VM?", "30 Min.", "Einzel"],
          ["1.4", "Einen Server von Hand einrichten", "25 Min.", "Einzel"],
          ["1.5", "Deine erste automatische VM mit cloud-init", "45 Min.", "Einzel"],
          ["1.6", "SSH-Schlüssel für die Cloud vorbereiten", "20 Min.", "Einzel"],
          ["⭐ 1.7", "Container mit Docker", "30 Min.", "Einzel"],
        ], note: "Aufträge: auftraege/tag-1/ · Lösungen erst nach dem eigenen Versuch: loesungen/tag-1/",
          notes: "Ablage auf der Website zeigen. Hinweis: Lösungen sind zum Vergleichen da." },
        { type: "points", title: "Bevor du startest", items: [
          { icon: "FaMicrochip", h: "Virtualisierung aktiv?", t: "Task-Manager > Leistung > CPU > «Virtualisierung: Aktiviert»" },
          { icon: "FaLaptop", h: "Windows Pro oder Education?", t: "Dann ist Hyper-V eingebaut. Bei Windows Home: Kursleitung holen." },
          { icon: "FaHdd", h: "Genug Platz?", t: "Mindestens 15 GB frei. Multipass lädt Ubuntu selbst herunter." },
        ], notes: "Laptops mit deaktivierter Virtualisierung oder Windows Home sofort sammeln. Beim ersten launch evtl. reihenweise starten (Download ca. 600 MB)." },
        { type: "code", title: "Multipass in 6 Befehlen", codeW: 7.2, codeSize: 18,
          code: "multipass launch --name vm1\nmultipass list\nmultipass shell vm1\nmultipass exec vm1 -- free -h\nmultipass stop vm1\nmultipass delete --purge vm1",
          side: [
            { h: "launch", t: "VM erstellen und starten" },
            { h: "list", t: "alle VMs anzeigen" },
            { h: "shell / exec", t: "in der VM arbeiten / einen Befehl ausführen" },
            { h: "stop / delete", t: "VM stoppen / endgültig löschen" },
          ], notes: "Live-Demo vor Auftrag 1.2. Erste VM vorab erstellt haben, damit die Demo nicht auf den Download wartet." },
      ] },
      { title: "Abschluss", slides: [
        { type: "cards", title: "Abschluss", cols: 2, items: [
          { icon: "FaTrashAlt", h: "Aufräumen", t: "multipass delete --purge --all · Den SSH-Schlüssel behalten – du brauchst ihn an Tag 3!" },
          { icon: "FaDoorOpen", h: "Exit-Ticket", t: "Was ist der grösste Unterschied zwischen deiner VM und einer VM in der Cloud?" },
        ], notes: "Exit-Tickets einsammeln und an Tag 2 als Einstieg verwenden. Die Hyperscaler-Frage auf der nächsten Folie nur stellen, nicht beantworten – der Input folgt an Tag 2, L1." },
        ende("Nächstes Mal: ab in die Cloud", "Tag 2 · Public Cloud und Azure Grundlagen", [
          { icon: "FaCloud", h: "Hyperscaler", t: "Was passiert, wenn man tausende Hypervisoren zusammenschaltet?" },
          { icon: "FaKey", h: "Azure for Students", t: "Login testen: portal.azure.com" },
        ]),
      ] },
    ],
  },
  // ---------------------------------------------------------------- Tag 2
  {
    file: "tag-2-azure-grundlagen.pptx", title: "Tag 2: Public Cloud und Azure Grundlagen",
    sections: [
      { title: "Start", slides: [
        { type: "title", title: "Tag 2: Public Cloud und Azure Grundlagen", sub: "Einführung in Cloud Computing mit Microsoft Azure", notes: "Begrüssung, Stimmung abholen." },
        { type: "quiz", title: "Rückblick Tag 1", lead: "Beantworte die Fragen mit deinem Partner – 5 Minuten.", qs: [
          { h: "Typ 1 oder Typ 2?", q: "VirtualBox, Hyper-V, VMware ESXi – ordne zu." },
          { h: "Multipass", q: "Mit welchem Befehl erstellst du eine neue VM?" },
          { h: "cloud-init", q: "Wann arbeitet cloud-init seine Datei ab?" },
        ], notes: "Lösungen: Typ 2 / Typ 1 / Typ 1. multipass launch --name <name>. Nur beim ersten Start. Danach 2–3 Exit-Tickets vorlesen." },
      ] },
      { title: "Heute", slides: [
        { type: "cards", title: "Deine Ziele heute", cols: 3, items: [
          { icon: "FaCloud", h: "Servicemodelle (K2)", t: "Du unterscheidest IaaS, PaaS und SaaS und ordnest Beispiele zu." },
          { icon: "FaGlobeEurope", h: "Aufbau von Azure (K2)", t: "Du erklärst Region, Zone, Abonnement und Ressourcengruppe." },
          { icon: "FaTerminal", h: "Portal und CLI (K3)", t: "Du erstellst, findest und löschst Ressourcen im Portal und mit der Azure CLI." },
        ] },
        { type: "table", title: "Ablauf", head: ["Lektion", "Phase", "Inhalt"], colW: [1.2, 2.2, 7.6], rows: [
          ["L1", "Einstieg, Input 1", "Rückblick · Vom Hypervisor zum Hyperscaler, IaaS/PaaS/SaaS"],
          ["L2", "Hands-on", "Auftrag 2.1: IaaS, PaaS oder SaaS?"],
          ["L3", "Input 2, Hands-on", "Aufbau von Azure · Auftrag 2.2: Dein Abonnement erkunden"],
          ["L4", "Hands-on", "Auftrag 2.3: Erste Ressourcengruppe im Portal"],
          ["L5–L6", "Input 3, Hands-on", "Cloud Shell und Azure CLI · Auftrag 2.4: Ressourcengruppe mit der CLI"],
          ["L7", "Hands-on", "Auftrag 2.5: Regionen recherchieren · ⭐ 2.6 Learn-Modul · ⭐ 2.7 Challenge Lab RBAC"],
          ["L8", "Abschluss", "Aufräumen kontrollieren · Quiz · Exit-Ticket"],
        ] },
        { type: "table", title: "Deine Aufträge", head: ["Nr.", "Auftrag", "Form"], colW: [1.2, 8.0, 2.2], rows: [
          ["2.1", "IaaS, PaaS oder SaaS? Dienste zuordnen und begründen", "Partner"],
          ["2.2", "Dein Azure-Abonnement erkunden (Guthaben, erlaubte Regionen, Kostenanalyse)", "Einzel"],
          ["2.3", "Erste Ressourcengruppe im Portal mit Tags", "Einzel"],
          ["2.4", "Dieselbe Ressourcengruppe mit der Azure CLI", "Einzel"],
          ["2.5", "Azure-Regionen recherchieren", "Partner"],
          ["⭐ 2.6", "Microsoft-Learn-Modul: Kernkomponenten der Azure-Architektur", "Einzel"],
          ["⭐ 2.7", "Challenge Lab «Azure RBAC konfigurieren» (Learn on Demand)", "Partner"],
        ] },
        { type: "steps", title: "Entra ID üben: Challenge Labs", steps: [
          { h: "Anmelden", t: "msle.learnondemand.net mit dem Trainingsschlüssel der Kursleitung" },
          { h: "Registrieren", t: "Skillable-Konto anlegen, damit du später wieder hineinkommst" },
          { h: "Lab starten", t: "Meine Schulung > Klasse > Challenge Lab wählen" },
          { h: "Arbeiten", t: "Vorbereitete Umgebung mit temporärem Konto, Anleitung im zweiten Fenster" },
        ], note: "Mit Azure for Students hast du keine Rechte in Entra ID. Challenge Labs lassen sich nur wenige Male starten (meist 3) – erst starten, wenn du Zeit hast.",
          notes: "Trainingsschlüssel im Teams-Kanal bereitstellen. Labs vorher im Microsoft Learn for Educators Portal der Klasse zuweisen." },
      ] },
      { title: "Abschluss", slides: [
        { type: "cards", title: "Abschluss", cols: 2, items: [
          { icon: "FaTrashAlt", h: "Aufräumen", t: "az group list -o table – alle Ressourcengruppen von heute gelöscht?" },
          { icon: "FaDoorOpen", h: "Exit-Ticket", t: "Erkläre einem Kollegen in zwei Sätzen, was eine Ressourcengruppe ist." },
        ] },
        ende("Nächstes Mal: deine erste VM in Azure", "Tag 3 · Azure Compute und Storage", [
          { icon: "FaKey", h: "SSH-Schlüssel", t: "Den Schlüssel von Tag 1 brauchst du wieder." },
          { icon: "FaServer", h: "VM in Azure", t: "Vergleich mit deiner lokalen VM" },
        ]),
      ] },
    ],
  },
  // ---------------------------------------------------------------- Tag 3
  {
    file: "tag-3-compute-und-storage.pptx", title: "Tag 3: Azure Compute und Storage",
    sections: [
      { title: "Start", slides: [
        { type: "title", title: "Tag 3: Azure Compute und Storage", sub: "Einführung in Cloud Computing mit Microsoft Azure" },
        { type: "quiz", title: "Rückblick Tag 2", lead: "Beantworte die Fragen mit deinem Partner – 5 Minuten.", qs: [
          { h: "Servicemodell", q: "Azure Virtual Machines, Microsoft Teams, Azure App Service – IaaS, PaaS oder SaaS?" },
          { h: "Ressourcengruppe", q: "Was passiert mit allen Ressourcen, wenn du die Ressourcengruppe löschst?" },
          { h: "CLI", q: "Mit welchem Befehl zeigst du alle Ressourcengruppen als Tabelle an?" },
        ], notes: "IaaS / SaaS / PaaS. Alles wird gelöscht. az group list --output table." },
      ] },
      { title: "Heute", slides: [
        { type: "cards", title: "Deine Ziele heute", cols: 2, items: [
          { icon: "FaServer", h: "VM bereitstellen (K3)", t: "Du stellst eine Linux-VM in Azure bereit und meldest dich per SSH an." },
          { icon: "FaCubes", h: "Bestandteile (K2)", t: "Du erklärst, woraus eine VM besteht und was sie kostet." },
          { icon: "FaDatabase", h: "Speicherkonto (K3)", t: "Du legst ein Speicherkonto (Storage Account) an und lädst Dateien hoch." },
          { icon: "FaExchangeAlt", h: "Tag 1 und Azure (K2)", t: "Du beschreibst, was deine Multipass-VM und die Azure-VM gemeinsam haben." },
        ] },
        { type: "table", title: "Ablauf", head: ["Lektion", "Phase", "Inhalt"], colW: [1.2, 2.2, 7.6], rows: [
          ["L1", "Einstieg, Input 1", "Rückblick · Azure Virtual Machines"],
          ["L2–L3", "Hands-on", "Auftrag 3.1: VM im Portal · 3.2: Was gehört zur VM?"],
          ["L4", "Hands-on", "Auftrag 3.3: VM mit der Azure CLI, Webserver von Hand"],
          ["L5", "Input 2", "Azure Storage"],
          ["L5–L6", "Hands-on", "Auftrag 3.4: Speicherkonto und Blob-Container"],
          ["L7", "Hands-on", "Auftrag 3.5: Statische Website · ⭐ 3.6: SAS-Token"],
          ["L8", "Abschluss", "Ressourcengruppen löschen · Kostenanalyse · Exit-Ticket"],
        ] },
        { type: "table", title: "Deine Aufträge", head: ["Nr.", "Auftrag", "Form"], colW: [1.2, 8.0, 2.2], rows: [
          ["3.1", "Linux-VM im Portal erstellen und per SSH verbinden", "Einzel"],
          ["3.2", "Was gehört alles zur VM? Ressourcen untersuchen", "Partner"],
          ["3.3", "Dieselbe VM mit der Azure CLI, Webserver von Hand installieren", "Einzel"],
          ["3.4", "Speicherkonto und Blob-Container, Dateien hochladen", "Einzel"],
          ["3.5", "Statische Website im Speicherkonto", "Einzel"],
          ["⭐ 3.6", "Datei per SAS-Token zeitlich begrenzt teilen", "Einzel"],
        ] },
        { type: "cards", title: "Kosten im Griff", cols: 3, items: [
          { icon: "FaMicrochip", h: "Kleine Grössen", t: "Nur Grössen mit «Für kostenlose Dienste berechtigt», z. B. Standard_B1s." },
          { icon: "FaServer", h: "Eine VM", t: "Nur eine VM gleichzeitig laufen lassen." },
          { icon: "FaTrashAlt", h: "Löschen statt herunterfahren", t: "sudo poweroff spart kein Geld. Nur eine gelöschte VM kostet nichts mehr." },
        ] },
      ] },
      { title: "Abschluss", slides: [
        { type: "cards", title: "Abschluss", cols: 2, items: [
          { icon: "FaCoins", h: "Kostenanalyse", t: "Abonnement > Kostenverwaltung > Kostenanalyse: Was hat dein Tag gekostet?" },
          { icon: "FaDoorOpen", h: "Exit-Ticket", t: "Nenne drei Ressourcen, die beim Erstellen einer VM zusätzlich entstehen." },
        ], notes: "Kosten erscheinen mit Verzögerung – evtl. am Tag 4 nochmals anschauen." },
        ende("Nächstes Mal: Netzwerke bauen", "Tag 4 · Azure Networking", [
          { icon: "FaSitemap", h: "Subnetting", t: "CIDR auffrischen: Was bedeutet /24?" },
          { icon: "FaShieldAlt", h: "NSG", t: "Wer darf rein – und wer nicht?" },
        ]),
      ] },
    ],
  },
  // ---------------------------------------------------------------- Tag 4
  {
    file: "tag-4-networking.pptx", title: "Tag 4: Azure Networking",
    sections: [
      { title: "Start", slides: [
        { type: "title", title: "Tag 4: Azure Networking", sub: "Einführung in Cloud Computing mit Microsoft Azure" },
        { type: "quiz", title: "Rückblick Tag 3", lead: "Beantworte die Fragen mit deinem Partner – 5 Minuten.", qs: [
          { h: "Kosten", q: "Du fährst die VM mit sudo poweroff herunter. Kostet sie noch etwas?" },
          { h: "SSH", q: "Welchen Schlüssel brauchst du von einem Kollegen, damit er auf deine VM darf?" },
          { h: "Storage", q: "Warum ist St-Tag3-MM kein gültiger Storage-Account-Name?" },
        ], notes: "Ja, Compute läuft weiter (nicht deallocated). Seinen öffentlichen. Nur Kleinbuchstaben und Ziffern erlaubt." },
      ] },
      { title: "Heute", slides: [
        { type: "cards", title: "Deine Ziele heute", cols: 2, items: [
          { icon: "FaSitemap", h: "Subnetting (K3)", t: "Du teilst einen Adressraum in Subnetze auf." },
          { icon: "FaNetworkWired", h: "VNet (K3)", t: "Du stellst ein VNet mit mehreren Subnetzen bereit." },
          { icon: "FaShieldAlt", h: "NSG (K3)", t: "Du filterst Verkehr nach Port und IP-Adresse." },
          { icon: "FaSearch", h: "Fehlersuche (K4)", t: "Du begründest, warum eine Verbindung klappt oder blockiert wird." },
        ] },
        { type: "table", title: "Ablauf", head: ["Lektion", "Phase", "Inhalt"], colW: [1.2, 2.2, 7.6], rows: [
          ["L1", "Einstieg, Input 1", "Rückblick · VNet und Subnetting"],
          ["L2", "Hands-on", "Auftrag 4.1: Subnetting-Training"],
          ["L3", "Hands-on", "Auftrag 4.2: VNet mit zwei Subnetzen"],
          ["L4–L5", "Input 2, Hands-on", "Netzwerksicherheitsgruppen (NSG) · Auftrag 4.3: Zwei VMs im VNet"],
          ["L6", "Hands-on", "Auftrag 4.4: NSG-Regeln"],
          ["L7", "Hands-on", "Auftrag 4.5: Fehlersuche · ⭐ 4.6 Network Watcher · ⭐ 4.7 Challenge Lab"],
          ["L8", "Abschluss", "Netzplan zeichnen · Aufräumen · Exit-Ticket"],
        ] },
        { type: "table", title: "Deine Aufträge", head: ["Nr.", "Auftrag", "Form"], colW: [1.2, 8.0, 2.2], rows: [
          ["4.1", "Subnetting-Training für die «Velo Zürich AG»", "Partner"],
          ["4.2", "VNet mit zwei Subnetzen (snet-web, snet-intern)", "Einzel"],
          ["4.3", "Zwei VMs im VNet, Ping und SSH zwischen den Subnetzen", "Partner"],
          ["4.4", "NSG-Regeln: HTTP für alle, SSH nur von der Schul-IP", "Partner"],
          ["4.5", "Fehlersuche: «Warum komme ich nicht auf meine VM?»", "Partner"],
          ["⭐ 4.6", "IP-Flussüberprüfung und effektive Sicherheitsregeln", "Einzel"],
          ["⭐ 4.7", "Challenge Lab zu bedingtem Zugriff (Learn on Demand)", "Partner"],
        ] },
      ] },
      { title: "Abschluss", slides: [
        { type: "cards", title: "Abschluss", cols: 2, items: [
          { icon: "FaMapMarkedAlt", h: "Netzplan", t: "Zeichne deine Umgebung: VNet, Subnetze, NSG-Regeln, VMs mit IP-Adressen." },
          { icon: "FaDoorOpen", h: "Exit-Ticket", t: "Eine NSG hat Regel 100 Deny und Regel 200 Allow für Port 80. Ist die Website erreichbar?" },
        ], notes: "Antwort Exit-Ticket: Nein, Regel 100 wird zuerst geprüft." },
        ende("Nächstes Mal: alles als Code", "Tag 5 · Automatisierung mit Bicep und cloud-init", [
          { icon: "FaFileCode", h: "Bicep", t: "Die Umgebung von heute in einer Datei" },
          { icon: "FaRocket", h: "Abschlussprojekt", t: "Webserver der «Velo Zürich AG»" },
        ]),
      ] },
    ],
  },
  // ---------------------------------------------------------------- Tag 5
  {
    file: "tag-5-automatisierung.pptx", title: "Tag 5: Automatisierung mit Bicep und cloud-init",
    sections: [
      { title: "Start", slides: [
        { type: "title", title: "Tag 5: Automatisierung mit Bicep und cloud-init", sub: "Einführung in Cloud Computing mit Microsoft Azure" },
        { type: "points", title: "Was hast du im Kurs von Hand gemacht?", items: [
          { icon: "FaServer", h: "VMs erstellt", t: "lokal und in Azure – wie viele Klicks waren das?" },
          { icon: "FaNetworkWired", h: "Netzwerke gebaut", t: "VNet, Subnetze, NSG-Regeln" },
          { icon: "FaWrench", h: "Software installiert", t: "nginx, Docker – jedes Mal von Hand" },
          { icon: "FaRedo", h: "Und jetzt für 10 Lernende?", t: "Genau dafür gibt es Infrastruktur als Code (Infrastructure as Code)." },
        ], notes: "Einstieg: Die Lernenden sollen den Schmerz der Handarbeit selbst benennen." },
      ] },
      { title: "Heute", slides: [
        { type: "cards", title: "Deine Ziele heute", cols: 2, items: [
          { icon: "FaCode", h: "IaC erklären (K2)", t: "Du erklärst den Unterschied: von Hand, Skript, Infrastruktur als Code." },
          { icon: "FaRocket", h: "cloud-init (K3)", t: "Du richtest eine VM beim ersten Start automatisch ein." },
          { icon: "FaFileCode", h: "Bicep (K3)", t: "Du beschreibst VNet, NSG und VM in Bicep und stellst sie bereit." },
          { icon: "FaStar", h: "Bicep und ARM (K2)", t: "Du zeigst, dass aus einer Bicep-Datei ein ARM-Template entsteht." },
        ] },
        { type: "table", title: "Ablauf", head: ["Lektion", "Phase", "Inhalt"], colW: [1.2, 2.2, 7.6], rows: [
          ["L1", "Einstieg, Input 1", "Rückblick auf den Kurs · Infrastruktur als Code, Bicep, cloud-init"],
          ["L2", "Hands-on", "Auftrag 5.1: Ubuntu-VM mit cloud-init"],
          ["L3", "Hands-on", "Auftrag 5.2: Erstes Bicep-File, ARM-Template vergleichen"],
          ["L4", "Hands-on", "Auftrag 5.3: Bicep für VNet, Subnetz und NSG"],
          ["L5–L7", "Abschlussprojekt", "Webserver der «Velo Zürich AG» komplett per Bicep"],
          ["L8", "Abschluss", "Kurzpräsentationen · Feedback · Aufräumen"],
        ] },
        { type: "cards", title: "Abschlussprojekt: Webserver der «Velo Zürich AG»", cols: 3, items: [
          { icon: "FaFileCode", h: "Auftrag", t: "VNet, Subnetz, NSG und VM mit cloud-init – alles in einer Bicep-Datei, mit einem Befehl bereitgestellt." },
          { icon: "FaClipboardList", h: "Abgabe", t: "Bicep- und cloud-init-Datei, kurze Dokumentation, Screenshot der Website." },
          { icon: "FaChartLine", h: "Präsentation", t: "5 Minuten pro Team: Architektur, Live-Demo, was ihr gelernt habt." },
        ], notes: "Bewertungsraster folgt unter abschlussprojekt/. Teams zu zweit." },
      ] },
      { title: "Abschluss", slides: [
        { type: "cards", title: "Zum Schluss", cols: 3, items: [
          { icon: "FaTrashAlt", h: "Aufräumen", t: "Alle Ressourcengruppen des Kurses löschen: az group list -o table" },
          { icon: "FaPencilAlt", h: "Feedback", t: "Was war hilfreich? Was soll ich ändern?" },
          { icon: "FaGraduationCap", h: "Wie weiter?", t: "Microsoft Learn: Lernpfade zu Azure Fundamentals (AZ-900)" },
        ] },
        ende("Danke!", "PAT Cloud Solutions · patcloudsolutions.ch"),
      ] },
    ],
  },
];

// =============================================================================
// INPUT-PRÄSENTATIONEN (Theorie)
// =============================================================================
const quellen = (t) => ({ type: "points", title: "Zum Nachlesen", items: t });

const INPUTS = [
  // ---------------------------------------------------------------- 1
  {
    file: "input-01-virtualisierung.pptx", title: "Input: Virtualisierung",
    sections: [
      { title: "Virtualisierung", slides: [
        { type: "title", title: "Virtualisierung", sub: "Inputs Tag 1", notes: "Theorie: theorie/01-virtualisierung.md" },
        { type: "cards", title: "Darum geht's", cols: 2, items: [
          { icon: "FaLayerGroup", h: "Hypervisor", t: "Was er macht und welche Typen es gibt" },
          { icon: "FaMemory", h: "Hardware teilen", t: "CPU, RAM und Festplatte für jede VM" },
          { icon: "FaRocket", h: "Multipass und cloud-init", t: "Eine VM mit einem Befehl – und automatisch eingerichtet" },
          { icon: "FaKey", h: "SSH-Schlüssel", t: "Dein Zugang zu Servern in der Cloud" },
        ] },
        { type: "statement", title: "Was ist Virtualisierung?", icon: "FaBuilding",
          quote: "Ein Mehrfamilienhaus: ein Gebäude, aber jede Wohnung hat eigene Tür, Möbel und Bewohner. Die Hausverwaltung teilt Wasser, Strom und Heizung zu.",
          points: ["Gebäude = Hardware · Wohnung = virtuelle Maschine (VM) · Hausverwaltung = Hypervisor",
            "Ein Server ohne Virtualisierung ist oft nur zu 10–20 % ausgelastet – mit Virtualisierung laufen viele VMs darauf."],
          notes: "Live-Demo: Hyper-V-Manager öffnen und eine laufende Multipass-VM zeigen." },
        { type: "diagram", title: "Hypervisor Typ 1 und Typ 2", img: "Hypervisor.png", caption: "Grafik: TBZ M346",
          notes: "Typ 1 direkt auf der Hardware, Typ 2 als Programm auf einem Betriebssystem." },
        { type: "compare", title: "Typ 1 oder Typ 2?",
          left: { icon: "FaServer", h: "Typ 1 – bare metal", points: ["läuft direkt auf der Hardware", "hohe Leistung, kein Betriebssystem dazwischen", "Rechenzentren und Cloud", "Hyper-V, VMware ESXi, KVM"] },
          right: { icon: "FaLaptop", h: "Typ 2 – hosted", points: ["läuft als Programm auf Windows, macOS, Linux", "etwas weniger Leistung", "Laptop, Tests, Schulung", "VirtualBox, VMware Workstation"] },
          note: "Auch Azure läuft auf einer angepassten Version von Hyper-V.",
          notes: "Spezialfall Hyper-V unter Windows: Windows läuft danach selbst als VM auf dem Hypervisor → Typ 1." },
        { type: "stat", title: "VMs teilen sich die Hardware", stats: [
          { n: "8", label: "Prozessoren im Laptop" }, { n: "3 × 4", label: "VMs mit je 4 vCPUs" }, { n: "12", label: "vCPUs zusammen" },
        ], points: ["Die VMs teilen sich die echten Prozessoren abwechselnd. Das heisst Überbuchung (Overcommitment).",
          "Solange nicht alle gleichzeitig voll arbeiten, merkt man nichts. Sonst wird es langsam."],
          notes: "Für ICT-Fachleute reicht diese Ebene. Zeitscheiben und Swap nur auf Nachfrage vertiefen." },
        { type: "diagram", title: "VM und Container", img: "vm-vs-container-folie.png",
          notes: "Container teilen den Kernel, VMs bringen ein ganzes Betriebssystem mit. Container sind optional (⭐ Auftrag 1.7)." },
      ] },
      { title: "Multipass und cloud-init", slides: [
        { type: "divider", title: "Automatisch statt von Hand", sub: "Multipass und cloud-init" },
        { type: "code", title: "Multipass: eine VM mit einem Befehl", codeW: 7.2, codeSize: 18,
          code: "multipass launch --name vm1\nmultipass list\nmultipass shell vm1\nmultipass exec vm1 -- free -h\nmultipass stop vm1\nmultipass delete --purge vm1",
          side: [
            { h: "launch", t: "VM erstellen und starten" },
            { h: "list", t: "alle VMs anzeigen" },
            { h: "shell / exec", t: "in der VM arbeiten / einen Befehl ausführen" },
            { h: "stop / delete", t: "VM stoppen / endgültig löschen" },
          ], notes: "Multipass lädt Ubuntu selbst herunter und verwendet im Hintergrund Hyper-V." },
        { type: "code", title: "cloud-init: die VM richtet sich selbst ein", codeW: 8.4, codeSize: 16,
          code: "#cloud-config\npackage_update: true\npackages:\n  - tree\n  - htop\nwrite_files:\n  - path: /opt/willkommen.txt\n    content: |\n      Diese Datei hat cloud-init erstellt.\nruncmd:\n  - echo \"Fertig am $(date)\" >> /opt/willkommen.txt",
          side: [
            { h: "#cloud-config", t: "muss die erste Zeile sein" },
            { h: "packages", t: "Programme installieren" },
            { h: "write_files", t: "Dateien anlegen" },
            { h: "runcmd", t: "Befehle ausführen" },
          ], notes: "Nach Auftrag 1.4: Zeiten der Klasse abfragen, auf 10 Server hochrechnen. Live-Demo: multipass launch --name auto --cloud-init cloud-init-tag1.yaml. Betonen: läuft nur beim ersten Start. In Azure an Tag 5 genau gleich." },
        { type: "compare", title: "SSH-Schlüssel: Schloss und Schlüssel",
          left: { icon: "FaLock", h: "Öffentlicher Schlüssel", points: ["id_ed25519.pub", "das Schloss – kommt auf den Server", "darf jeder sehen"] },
          right: { icon: "FaKey", h: "Privater Schlüssel", points: ["id_ed25519", "der einzige Schlüssel zum Schloss", "bleibt auf deinem Laptop – nie weitergeben"] },
          notes: "Kurz vor Auftrag 1.6. Live: ssh-keygen -t ed25519." },
        { type: "quiz", qs: [
          { h: "Hypervisor", q: "Typ 1 oder Typ 2: VirtualBox, Hyper-V?" },
          { h: "cloud-init", q: "Wann arbeitet cloud-init die Datei ab?" },
          { h: "Docker", q: "Ein Kollege sagt: «Docker ist auch ein Hypervisor.» Stimmt das?" },
        ], notes: "VirtualBox Typ 2, Hyper-V Typ 1. Nur beim ersten Start. Nein, Container teilen den Kernel." },
        quellen([
          { icon: "FaBook", h: "Theorie", t: "theorie/01-virtualisierung.md" },
          { icon: "FaGraduationCap", h: "Microsoft und Canonical", t: "Was ist Virtualisierung? · Multipass-Dokumentation" },
          { icon: "FaBook", h: "TBZ M346", t: "Virtualisierung, Multipass, KN01 (übernommen und vereinfacht)" },
        ]),
        ende("Jetzt du", "Auftrag 1.1–1.6 · ⭐ 1.7"),
      ] },
    ],
  },
  // ---------------------------------------------------------------- 2
  {
    file: "input-02-cloud-grundlagen.pptx", title: "Input: Cloud-Grundlagen",
    sections: [
      { title: "Cloud-Grundlagen", slides: [
        { type: "title", title: "Vom Hypervisor zum Hyperscaler", sub: "Input 1 Tag 2 · Cloud-Grundlagen", notes: "Theorie: theorie/02-cloud-grundlagen.md" },
        { type: "diagram", title: "Was ist ein Hyperscaler?", img: "Hyperscaler.png", caption: "Grafik: TBZ M346",
          notes: "Tausende Server mit Typ-1-Hypervisoren, ein Orchestrator verteilt die VMs, alles über eine Web-API steuerbar. Du siehst nicht, auf welchem Server deine VM läuft." },
        { type: "cards", title: "Fünf Merkmale von Cloud Computing", cols: 3, items: [
          { icon: "FaHandsHelping", h: "Selbstbedienung", t: "Du holst dir Ressourcen selbst – ohne Telefon, ohne Ticket." },
          { icon: "FaGlobeEurope", h: "Über das Netz", t: "Portal, CLI, API – von überall erreichbar." },
          { icon: "FaUsers", h: "Ressourcen-Pool", t: "Viele Kunden teilen sich die Hardware, sauber getrennt." },
          { icon: "FaBolt", h: "Elastizität", t: "Mehr oder weniger Ressourcen, je nach Bedarf." },
          { icon: "FaCoins", h: "Messbar", t: "Du bezahlst, was du brauchst." },
        ], notes: "Definition nach NIST SP 800-145." },
        { type: "diagram", title: "Servicemodelle: Wer verwaltet was?", img: "servicemodelle-folie.png",
          notes: "Je weiter rechts, desto weniger Aufwand – aber auch weniger Kontrolle. Daten und Zugriffe bleiben immer deine Aufgabe." },
        { type: "cards", title: "Merkhilfe: Pizza", cols: 4, items: [
          { icon: "FaBuilding", h: "Selbst betrieben", t: "(On Premises) Alles selbst: Küche, Ofen, Teig, Belag." },
          { icon: "FaServer", h: "IaaS", t: "Küche mit Ofen gemietet. Teig und Belag bringst du." },
          { icon: "FaRocket", h: "PaaS", t: "Der Lieferdienst backt nach deinem Rezept." },
          { icon: "FaPizzaSlice", h: "SaaS", t: "Restaurant: Du isst, was auf der Karte steht." },
        ] },
        { type: "table", title: "Beispiele bei Microsoft", head: ["Modell", "Du lieferst …", "Beispiele"], colW: [1.6, 3.5, 6], rows: [
          ["IaaS", "Betriebssystem, Software, Konfiguration", "Azure Virtual Machines, Azure Virtual Network, Azure Managed Disks"],
          ["PaaS", "nur deine Anwendung", "Azure App Service, Azure SQL Database"],
          ["SaaS", "nur deine Daten", "Microsoft 365, Teams, Outlook"],
          ["FaaS", "einzelne Funktionen, bezahlt pro Ausführung", "Azure Functions"],
        ], note: "Im Kurs arbeitest du vor allem mit IaaS." },
        { type: "cards", title: "Öffentlich, privat, hybrid", cols: 3, items: [
          { icon: "FaGlobeEurope", h: "Öffentliche Cloud", t: "(Public Cloud) Infrastruktur eines öffentlichen Anbieters, geteilt mit anderen Kunden." },
          { icon: "FaLock", h: "Private Cloud", t: "Cloud nur für eine Organisation, z. B. Banken und Behörden." },
          { icon: "FaExchangeAlt", h: "Hybride Cloud", t: "(Hybrid Cloud) Ein Teil im eigenen Rechenzentrum, ein Teil in der öffentlichen Cloud – heute der Normalfall." },
        ] },
        { type: "diagram", title: "Hybride Cloud am Beispiel", img: "Betriebsmodell_Hybrid_Webshop.png", caption: "Grafik: TBZ M346",
          notes: "Muster: Neues und Wachsendes in die Cloud, Altes und schwer Migrierbares bleibt vorerst im Haus." },
        { type: "compare", title: "Geteilte Verantwortung (Shared Responsibility)",
          left: { icon: "FaBuilding", h: "Microsoft: Sicherheit der Cloud", points: ["Rechenzentren, Zutritt, Strom", "Hardware und Hypervisor", "Trennung der Kunden"] },
          right: { icon: "FaUserShield", h: "Du: Sicherheit in der Cloud", points: ["Daten und Zugriffsrechte", "offene Ports, NSG-Regeln", "Updates der VM (bei IaaS)"] },
          note: "Daten und Zugriffe bleiben immer deine Aufgabe – auch bei SaaS." },
        { type: "quiz", qs: [
          { h: "Zuordnen", q: "Azure Virtual Machines, Microsoft Teams, Azure App Service: IaaS, PaaS oder SaaS?" },
          { h: "Hybrid?", q: "Buchhaltung auf einem Server im Keller, Mail mit Microsoft 365. Welches Modell?" },
          { h: "Verantwortung", q: "Eine VM wird gehackt, weil SSH mit Passwort für alle offen war. Wer ist schuld?" },
        ], notes: "IaaS, SaaS, PaaS. Hybrid. Der Kunde – Sicherheit in der Cloud." },
        quellen([
          { icon: "FaBook", h: "Theorie im Repository", t: "theorie/02-cloud-grundlagen.md" },
          { icon: "FaGraduationCap", h: "Microsoft Learn", t: "Beschreiben von Cloud Computing · Beschreiben von Clouddiensttypen" },
          { icon: "FaBook", h: "TBZ M346", t: "Servicemodelle, Betriebsmodelle (Texte und Grafiken übernommen)" },
        ]),
        ende("Jetzt du", "Auftrag 2.1: IaaS, PaaS oder SaaS?"),
      ] },
    ],
  },
  // ---------------------------------------------------------------- 3
  {
    file: "input-03-azure-aufbau.pptx", title: "Input: Aufbau von Azure",
    sections: [
      { title: "Aufbau", slides: [
        { type: "title", title: "Aufbau von Azure", sub: "Input 2 und 3 · Tag 2", notes: "Theorie: theorie/03-azure-aufbau.md" },
        { type: "diagram", title: "Regionen und Verfügbarkeitszonen (Availability Zones)", img: "azure-regionen-folie.png",
          notes: "Alltagsvergleich: Region = Stadt, Zonen = Quartiere mit eigenem Strom- und Wassernetz. Live: Azure-Infrastrukturkarte zeigen." },
        { type: "cards", title: "Warum ist die Region wichtig?", cols: 3, items: [
          { icon: "FaBolt", h: "Nähe", t: "Kurze Wege, schnelle Antwortzeiten." },
          { icon: "FaShieldAlt", h: "Recht", t: "Daten von Schweizer Firmen sollen oft in der Schweiz bleiben." },
          { icon: "FaCoins", h: "Preis und Angebot", t: "Nicht jede VM-Grösse gibt es überall. Preise unterscheiden sich." },
        ], note: "Azure for Students erlaubt oft nur bestimmte Regionen – prüfe zuerst, welche (Auftrag 2.2)." },
        { type: "diagram", title: "Vom Mandanten (Tenant) bis zur Ressource", img: "azure-hierarchie-folie.png",
          notes: "Verwaltungsgruppen nur in grossen Firmen. Für den Kurs relevant: Abonnement und Ressourcengruppe." },
        { type: "cards", title: "Die Ressourcengruppe (Resource Group)", cols: 3, items: [
          { icon: "FaFolderOpen", h: "Ein Ordner", t: "für alles, was zusammengehört und gemeinsam lebt und stirbt." },
          { icon: "FaTrashAlt", h: "Löschen = alles weg", t: "Genau das nutzt du am Ende jedes Labs zum Aufräumen." },
          { icon: "FaClipboardList", h: "Tags", t: "Etiketten wie kurs=azure-basics – zum Filtern und für die Kostenanalyse." },
        ] },
        { type: "diagram", title: "Ein Eingang für alles: Azure Resource Manager", img: "iac-ablauf-folie.png",
          notes: "Portal, CLI und Bicep schicken ihre Anfrage an ARM. Darum ist das Ergebnis immer gleich." },
      ] },
      { title: "Werkzeuge", slides: [
        { type: "divider", title: "Cloud Shell und Azure CLI", sub: "Input 3 · Tag 2" },
        { type: "cards", title: "Werkzeuge", cols: 4, items: [
          { icon: "FaGlobeEurope", h: "Portal", t: "portal.azure.com – zum Lernen und Kontrollieren" },
          { icon: "FaTerminal", h: "Cloud Shell", t: "Terminal im Browser, CLI schon angemeldet" },
          { icon: "FaCode", h: "Azure CLI", t: "az … – wiederholbar, für Skripte" },
          { icon: "FaFileCode", h: "Bicep", t: "Infrastruktur als Code – Tag 5" },
        ] },
        { type: "code", title: "So ist ein CLI-Befehl aufgebaut", codeW: 6.6,
          code: "az group create \\\n  --name rg-tag2-mm \\\n  --location switzerlandnorth \\\n  --tags kurs=azure-basics tag=2\n\naz group list --output table\n\naz group delete \\\n  --name rg-tag2-mm --yes",
          side: [
            { h: "az", t: "die Azure CLI" },
            { h: "group", t: "Ressourcentyp: group, vm, storage account, network vnet …" },
            { h: "create / list / delete", t: "Aktion" },
            { h: "--name, --location …", t: "Parameter. Hilfe: az group create --help" },
          ], notes: "Live-Demo in der Cloud Shell. --output table und --query zeigen." },
        { type: "table", title: "Nützliche Helfer", head: ["Befehl / Option", "Wirkung"], colW: [4.5, 6.5], rows: [
          ["az <befehl> --help", "alle Optionen und Beispiele"],
          ["--output table", "lesbare Tabelle statt JSON"],
          ["--query \"[].name\"", "nur bestimmte Felder anzeigen"],
          ["az account show", "Mit welchem Konto und Abonnement bin ich verbunden?"],
          ["az group list -o table", "Welche Ressourcengruppen habe ich?"],
        ] },
        { type: "compare", title: "Ausblick: Wer darf was?",
          left: { icon: "FaUserShield", h: "Rollen (RBAC)", points: ["Rolle: Leser, Mitwirkender, Besitzer", "für einen Bereich (Scope), z. B. eine Ressourcengruppe", "Merksatz: wer – was – wo"] },
          right: { icon: "FaLock", h: "Bedingter Zugriff", points: ["Regeln für die Anmeldung", "z. B. nur mit Multi-Faktor-Authentifizierung", "auf Englisch: Conditional Access"] },
          note: "Üben nur in den Challenge Labs (Learn on Demand) – Azure for Students hat keine Rechte in Entra ID.",
          notes: "Optionaler Auftrag 2.7. Nicht im Vertragsumfang, darum als Zusatz." },
        { type: "quiz", qs: [
          { h: "Region oder Zone?", q: "Was ist der Unterschied zwischen einer Region und einer Verfügbarkeitszone?" },
          { h: "Löschen", q: "Du löschst rg-tag3-mm. Was passiert mit der VM darin?" },
          { h: "CLI", q: "Wie zeigst du alle Ressourcengruppen als Tabelle an?" },
        ], notes: "Region = Gebiet mit mehreren RZ, Zone = unabhängiger Teil darin. VM wird mitgelöscht. az group list --output table." },
        quellen([
          { icon: "FaBook", h: "Theorie im Repository", t: "theorie/03-azure-aufbau.md" },
          { icon: "FaGraduationCap", h: "Microsoft Learn", t: "Beschreiben der Kernkomponenten der Azure-Architektur · Erste Schritte mit der Azure CLI" },
        ]),
        ende("Jetzt du", "Auftrag 2.2–2.4: Abonnement erkunden, Ressourcengruppe im Portal und mit der CLI"),
      ] },
    ],
  },
  // ---------------------------------------------------------------- 4
  {
    file: "input-04-azure-compute.pptx", title: "Input: Azure Compute",
    sections: [
      { title: "Compute", slides: [
        { type: "title", title: "Azure Compute: virtuelle Maschinen", sub: "Input 1 · Tag 3", notes: "Theorie: theorie/04-azure-compute.md" },
        { type: "diagram", title: "Woraus besteht eine Azure-VM?", img: "azure-vm-bestandteile-folie.png",
          notes: "Live-Demo: VM im Portal erstellen, danach die Ressourcengruppe öffnen und alle Teile zeigen." },
        { type: "table", title: "Vergleich mit deiner VM von Tag 1", head: ["Azure", "Aufgabe", "Tag 1 (Multipass)"], colW: [3, 4.5, 3.5], rows: [
          ["Virtuelle Maschine", "CPU und RAM (Compute)", "--cpus, --memory"],
          ["OS-Datenträger", "Disk mit dem Betriebssystem", "--disk"],
          ["Netzwerkschnittstelle (NIC)", "verbindet mit dem Subnetz", "IP in multipass list"],
          ["VNet + Subnetz", "privates Netz", "kleines Netz von Hyper-V"],
          ["Öffentliche IP", "erreichbar aus dem Internet", "gab es nicht"],
          ["NSG", "Firewall-Regeln", "gab es nicht"],
        ] },
        { type: "code", title: "VM-Grössen lesen", codeW: 6.2, codeSize: 16,
          code: "Standard_B2ats_v2\n         │││││ └ Version\n         ││││└ s = Premium SSD\n         │││└ t = wenig RAM\n         ││└ a = AMD\n         │└ 2 = vCPUs\n         └ B = Serie",
          side: [
            { h: "Standard_B1s", t: "1 vCPU, 1 GiB RAM – Übungen" },
            { h: "Standard_B2ats_v2", t: "2 vCPU, 1 GiB RAM – Übungen" },
            { h: "Standard_B2s", t: "2 vCPU, 4 GiB RAM – etwas mehr Last" },
            { h: "B-Serie = burstable", t: "sammelt Guthaben bei wenig Last – ideal für Übungen" },
          ], notes: "Verfügbarkeit im Student-Abo vorher prüfen: Filter «Für kostenlose Dienste berechtigt»." },
        { type: "table", title: "Status und Kosten", head: ["Status", "Was läuft?", "Was kostet?"], colW: [4, 3.5, 3.5], rows: [
          ["Wird ausgeführt", "alles", "Compute + Disk + IP"],
          ["Beendet (sudo poweroff)", "nichts – Hardware bleibt reserviert", "weiterhin Compute + Disk + IP"],
          ["Beendet (Zuordnung aufgehoben)", "nichts – Hardware frei", "nur Disk + IP"],
          ["Gelöscht", "–", "nichts"],
        ], note: "Herunterfahren aus der VM spart kein Geld. Am einfachsten: Ressourcengruppe löschen." },
        { type: "steps", title: "Anmelden mit deinem SSH-Schlüssel", steps: [
          { h: "Anzeigen", t: "In PowerShell: Get-Content ~\\.ssh\\id_ed25519.pub" },
          { h: "Mitgeben", t: "Im Portal als vorhandenen öffentlichen Schlüssel einfügen" },
          { h: "Verbinden", t: "ssh azureuser@<öffentliche-ip> – vom Laptop aus" },
        ], note: "Den privaten Schlüssel gibst du nie heraus. In Azure landet nur der öffentliche." },
        { type: "table", title: "Wenn SSH nicht klappt", head: ["Meldung", "Häufige Ursache"], colW: [4.5, 6.5], rows: [
          ["Connection timed out", "Port 22 in der NSG zu, falsche IP, VM gestoppt"],
          ["Permission denied (publickey)", "falscher Schlüssel oder falscher Benutzername"],
          ["REMOTE HOST IDENTIFICATION HAS CHANGED", "neue VM unter alter IP → ssh-keygen -R <ip>"],
        ] },
        { type: "quiz", qs: [
          { h: "Bestandteile", q: "Welche Ressourcen findest du nach dem Erstellen einer VM in der Ressourcengruppe?" },
          { h: "Kosten", q: "Kostet die VM nach sudo poweroff noch etwas?" },
          { h: "Grösse", q: "Was bedeutet die 2 in Standard_B2s?" },
        ], notes: "VM, Disk, NIC, VNet, öffentliche IP, NSG. Ja. Zwei vCPUs." },
        quellen([
          { icon: "FaBook", h: "Theorie im Repository", t: "theorie/04-azure-compute.md" },
          { icon: "FaGraduationCap", h: "Microsoft Learn", t: "Erstellen einer Linux-VM in Azure · Zustände und Abrechnung von VMs" },
        ]),
        ende("Jetzt du", "Auftrag 3.1: Linux-VM im Portal erstellen und per SSH verbinden"),
      ] },
    ],
  },
  // ---------------------------------------------------------------- 5
  {
    file: "input-05-azure-storage.pptx", title: "Input: Azure Storage",
    sections: [
      { title: "Storage", slides: [
        { type: "title", title: "Azure Storage", sub: "Input 2 · Tag 3", notes: "Theorie: theorie/05-azure-storage.md" },
        { type: "cards", title: "Drei Fragen an jeden Speicher", cols: 3, items: [
          { icon: "FaHdd", h: "Wie?", t: "Block, Datei oder Objekt – das technische Modell" },
          { icon: "FaClock", h: "Wie oft?", t: "Hot, Cool, Cold, Archive – die Zugriffsebene" },
          { icon: "FaRedo", h: "Überlebt es?", t: "Bleiben die Daten, wenn die VM ersetzt wird?" },
        ] },
        { type: "diagram", title: "Technische Speichermodelle", img: "Speicher_TechnischeModelle-folie.png", caption: "Grafik: TBZ M346, für Azure angepasst" },
        { type: "diagram", title: "Das Speicherkonto (Storage Account)", img: "azure-storage-aufbau-folie.png",
          notes: "Live-Demo: Speicherkonto anlegen, Container erstellen, Datei hochladen, URL zeigen." },
        { type: "cards", title: "Das musst du wissen", cols: 2, items: [
          { icon: "FaGlobeEurope", h: "Name", t: "global eindeutig, 3–24 Zeichen, nur Kleinbuchstaben und Ziffern: sttag3mm" },
          { icon: "FaFolderOpen", h: "Container und Blob", t: "Container = Ordner, Blob = Datei. $web liefert eine statische Website aus." },
          { icon: "FaLock", h: "Zugriff", t: "standardmässig privat. Zugriffsschlüssel (--auth-mode key) oder SAS-Token." },
          { icon: "FaCopy", h: "Für Übungen", t: "Standard_LRS, StorageV2 – günstig und reicht." },
        ] },
        { type: "diagram", title: "Redundanz: LRS, ZRS, GRS", img: "azure-redundanz-folie.png" },
        { type: "table", title: "Zugriffsebenen (Access Tiers)", head: ["Ebene", "Zugriff", "Mindestdauer", "Speichern", "Lesen", "Beispiel"], colW: [1.4, 1.6, 1.7, 1.8, 2.2, 2.8], fontSize: 14, rows: [
          ["Hot", "häufig", "–", "am teuersten", "am günstigsten", "Website-Dateien"],
          ["Cool", "selten", "30 Tage", "günstiger", "teurer", "Backups der letzten Wochen"],
          ["Cold", "sehr selten", "90 Tage", "noch günstiger", "noch teurer", "ältere Backups"],
          ["Archive", "fast nie", "180 Tage", "am günstigsten", "teuer, Stunden Wartezeit", "gesetzliche Aufbewahrung"],
        ], note: "Je heisser, desto teurer pro GB. Je kälter, desto teurer pro Zugriff." },
        { type: "diagram", title: "Persistenz: Was überlebt?", img: "Speicher_Persistenz-folie.png", caption: "Grafik: TBZ M346, für Azure angepasst",
          notes: "In der Cloud wird eine VM ersetzt statt repariert. Daten gehören auf Speicher, der unabhängig von der VM existiert." },
        { type: "quiz", qs: [
          { h: "Bilder weg?", q: "Eine Web-App speichert Bilder auf dem OS-Datenträger. Die VM wird neu erstellt. Was passiert?" },
          { h: "Name", q: "Warum ist St-Tag3-MM kein gültiger Storage-Account-Name?" },
          { h: "Archiv", q: "Jahresabschlüsse 10 Jahre aufbewahren, fast nie lesen – welche Ebene?" },
        ], notes: "Weg – besser Blob-Speicher. Nur Kleinbuchstaben und Ziffern. Archive." },
        quellen([
          { icon: "FaBook", h: "Theorie im Repository", t: "theorie/05-azure-storage.md" },
          { icon: "FaGraduationCap", h: "Microsoft Learn", t: "Übersicht über Speicherkonten · Storage-Redundanz · Zugriffsebenen" },
          { icon: "FaBook", h: "TBZ M346", t: "Speichermodelle (Texte und Grafiken übernommen, für Azure angepasst)" },
        ]),
        ende("Jetzt du", "Auftrag 3.4: Speicherkonto und Blob-Container"),
      ] },
    ],
  },
  // ---------------------------------------------------------------- 6
  {
    file: "input-06-azure-networking.pptx", title: "Input: Azure Networking",
    sections: [
      { title: "VNet", slides: [
        { type: "title", title: "Azure Networking", sub: "Input 1 und 2 · Tag 4", notes: "Theorie: theorie/06-azure-networking.md" },
        { type: "cards", title: "Virtuelles Netzwerk, Adressraum, Subnetz", cols: 3, items: [
          { icon: "FaBuilding", h: "Virtuelles Netzwerk (VNet)", t: "(Virtual Network) Dein eigenes, isoliertes Netz in Azure – ein Firmengelände mit Zaun. Liegt in einer Region." },
          { icon: "FaMapMarkedAlt", h: "Adressraum", t: "(Address Space) IP-Bereich des VNets, z. B. 10.10.0.0/16. Nur private Bereiche verwenden." },
          { icon: "FaSitemap", h: "Subnetz", t: "(Subnet) Teil des VNets, z. B. 10.10.1.0/24 – ein Gebäude auf dem Gelände. Jede NIC hängt in genau einem." },
        ] },
        { type: "table", title: "CIDR in Kürze", head: ["CIDR", "Adressen", "in Azure nutzbar", "Beispiel"], colW: [1.5, 2, 2.5, 5], rows: [
          ["/16", "65 536", "– (Adressraum)", "10.10.0.0 – 10.10.255.255"],
          ["/24", "256", "251", "10.10.1.0 – 10.10.1.255"],
          ["/27", "32", "27", "10.10.3.0 – 10.10.3.31"],
          ["/29", "8", "3", "kleinstes erlaubtes Subnetz"],
        ], note: "Je grösser die Zahl nach dem /, desto kleiner das Netz." },
        { type: "stat", title: "Azure reserviert 5 Adressen pro Subnetz", stats: [
          { n: ".0", label: "Netzadresse" }, { n: ".1", label: "Gateway" }, { n: ".2 .3", label: "Azure-DNS" }, { n: ".255", label: "Broadcast" }, { n: ".4", label: "erste VM" },
        ], points: ["In 10.10.1.0/24 bekommt die erste VM darum 10.10.1.4.", "Rechne beim Planen immer mit 5 Adressen weniger."] },
        { type: "compare", title: "IP-Adressen in Azure",
          left: { icon: "FaLock", h: "Private IP", points: ["nur im VNet erreichbar", "kommt aus dem Subnetz", "bleibt bei Neustarts gleich"] },
          right: { icon: "FaGlobeEurope", h: "Öffentliche IP (Public IP)", points: ["eigene Ressource, statisch (Standard-SKU)", "kostet auch bei gestoppter VM", "gesperrt, bis eine NSG-Regel erlaubt"] },
          note: "Achtung: Eine VM ohne öffentliche IP kommt in neuen Subnetzen evtl. nicht ins Internet (z. B. apt).",
          notes: "Seit 2026 sind neue Subnetze standardmässig privat (kein Default Outbound Access). Vor dem Kurs im Student-Abo testen." },
      ] },
      { title: "NSG", slides: [
        { type: "divider", title: "Netzwerksicherheitsgruppen", sub: "Network Security Groups (NSG) · Input 2 · Tag 4" },
        { type: "statement", title: "Die NSG: ein Türsteher mit Gästeliste", icon: "FaDoorOpen",
          quote: "Er geht die Liste von oben nach unten durch. Der erste Eintrag, der passt, entscheidet.",
          points: ["Jede Regel: Priorität (100–4096, kleine Zahl zuerst), Quelle, Ziel, Zielport, Protokoll, Allow/Deny",
            "Verknüpfen mit einem Subnetz (empfohlen) oder einer NIC"] },
        { type: "diagram", title: "VNet, Subnetze und NSG", img: "azure-vnet-nsg-folie.png",
          notes: "Live-Demo: NSG erstellen, Regel für Port 80 hinzufügen, an Subnetz hängen, im Browser testen." },
        { type: "table", title: "Standardregeln (eingehend)", head: ["Priorität", "Regel", "Wirkung"], colW: [1.6, 4.4, 5], rows: [
          ["65000", "AllowVnetInBound", "Verkehr innerhalb des VNets erlaubt"],
          ["65001", "AllowAzureLoadBalancerInBound", "Azure-Load-Balancer erlaubt"],
          ["65500", "DenyAllInBound", "alles andere blockiert"],
        ], note: "Eigene Regel mit kleinerer Prioritätszahl wird früher geprüft und übersteuert die Standardregeln." },
        { type: "cards", title: "Merke", cols: 3, items: [
          { icon: "FaExchangeAlt", h: "Stateful", t: "Ist die Anfrage erlaubt, darf die Antwort automatisch zurück." },
          { icon: "FaUserShield", h: "Quelle einschränken", t: "SSH (22) nie für Any, nur für deine IP." },
          { icon: "FaPlug", h: "Wichtige Ports", t: "22 SSH · 80 HTTP · 443 HTTPS · 3389 RDP" },
        ] },
        { type: "diagram", title: "Der Weg einer Anfrage", img: "anfrage-weg-folie.png",
          notes: "Fehlersuche der Reihe nach: IP, NSG Subnetz, NSG NIC, OS-Firewall, Dienst. Im Portal: effektive Sicherheitsregeln." },
        { type: "quiz", qs: [
          { h: "Rechnen", q: "Wie viele VMs passen höchstens in 10.10.1.0/28?" },
          { h: "Priorität", q: "Regel 100 «Deny TCP 80», Regel 200 «Allow TCP 80». Ist die Website erreichbar?" },
          { h: "Antwort", q: "Keine ausgehende Regel erstellt – kommt die Antwort trotzdem an?" },
        ], notes: "16 − 5 = 11. Nein, Regel 100 zuerst. Ja, stateful." },
        quellen([
          { icon: "FaBook", h: "Theorie im Repository", t: "theorie/06-azure-networking.md" },
          { icon: "FaGraduationCap", h: "Microsoft Learn", t: "Was ist Azure Virtual Network? · Netzwerksicherheitsgruppen" },
          { icon: "FaBook", h: "TBZ M346", t: "Netzwerk und Sicherheit (Struktur und Texte, für Azure angepasst)" },
        ]),
        ende("Jetzt du", "Auftrag 4.1: Subnetting · Auftrag 4.3: Zwei VMs im VNet"),
      ] },
    ],
  },
  // ---------------------------------------------------------------- 7
  {
    file: "input-07-automatisierung.pptx", title: "Input: Automatisierung",
    sections: [
      { title: "IaC", slides: [
        { type: "title", title: "Automatisierung: Bicep und cloud-init", sub: "Input 1 · Tag 5", notes: "Theorie: theorie/07-automatisierung.md" },
        { type: "cards", title: "Infrastruktur als Code (Infrastructure as Code)", lead: "Infrastruktur in Textdateien beschreiben statt zusammenklicken.", cols: 3, items: [
          { icon: "FaRedo", h: "Wiederholbar", t: "Gleiche Datei, gleiche Umgebung – für 1 oder 10 Lernende." },
          { icon: "FaTrashAlt", h: "Wegwerfbar", t: "Kaputt? Löschen und in Minuten neu bauen." },
          { icon: "FaBook", h: "Nachvollziehbar", t: "Git zeigt, wer wann was geändert hat. Der Code ist die Doku." },
        ] },
        { type: "compare", title: "Imperativ oder deklarativ?",
          left: { icon: "FaRoute", h: "Imperativ – «wie»", points: ["Schritte zum Ziel", "«Erstelle VNet. Erstelle NSG. Verbinde sie.»", "Azure CLI, Skripte", "Wegbeschreibung: zweimal links, dann geradeaus"] },
          right: { icon: "FaFlagCheckered", h: "Deklarativ – «was»", points: ["Zielzustand", "«Es gibt ein VNet mit dieser NSG.»", "Bicep, ARM-Templates", "Adresse im Navi: Das Navi findet den Weg"] },
          note: "Zweimal ausführen ändert nichts = Idempotenz. Das macht Automatisierung sicher." },
        { type: "diagram", title: "Drei Wege zur selben Infrastruktur", img: "iac-ablauf-folie.png",
          notes: "Bicep wird in ein ARM-Template übersetzt (az bicep build --file main.bicep)." },
        { type: "code", title: "Ein Speicherkonto in Bicep", codeW: 8.5, codeSize: 14,
          code: "param location string = resourceGroup().location\nparam kuerzel string\n\nresource st 'Microsoft.Storage/storageAccounts@2023-05-01' = {\n  name: 'sttag5${kuerzel}'\n  location: location\n  sku: { name: 'Standard_LRS' }\n  kind: 'StorageV2'\n}\n\noutput blobUrl string =\n  st.properties.primaryEndpoints.blob",
          side: [
            { h: "param", t: "Eingabewert beim Bereitstellen" },
            { h: "resource", t: "eine Ressource, die existieren soll: Typ@API-Version" },
            { h: "${kuerzel}", t: "Wert in Text einsetzen" },
            { h: "output", t: "Wert, der danach ausgegeben wird" },
          ], notes: "Live-Demo: az deployment group create … und danach zweimal ausführen → keine Änderung." },
        { type: "code", title: "Bereitstellen", codeW: 8.0, codeSize: 14,
          code: "# Vorschau: Was würde sich ändern?\naz deployment group what-if \\\n  --resource-group rg-tag5-<kuerzel> \\\n  --template-file main.bicep \\\n  --parameters kuerzel=<kuerzel>\n\n# Bereitstellen\naz deployment group create \\\n  --resource-group rg-tag5-<kuerzel> \\\n  --template-file main.bicep \\\n  --parameters kuerzel=<kuerzel>",
          side: [
            { h: "what-if", t: "zeigt die Änderungen, ohne etwas zu tun" },
            { h: "create", t: "stellt bereit – idempotent" },
            { h: "ARM-Template ansehen", t: "az bicep build --file main.bicep" },
          ] },
      ] },
      { title: "cloud-init", slides: [
        { type: "divider", title: "cloud-init", sub: "Die VM beim ersten Start einrichten" },
        { type: "code", title: "cloud-init: Datei für den ersten Start", codeW: 6.8, codeSize: 15,
          code: "#cloud-config\npackage_update: true\npackages:\n  - nginx\nwrite_files:\n  - path: /var/www/html/index.html\n    content: |\n      <meta charset=\"utf-8\">\n      <h1>Velo Zürich AG</h1>",
          side: [
            { h: "#cloud-config", t: "muss die erste Zeile sein – sonst wird alles still ignoriert" },
            { h: "packages", t: "Pakete installieren" },
            { h: "write_files", t: "Dateien mit Inhalt anlegen" },
            { h: "runcmd", t: "Befehle – nur, wenn kein anderer Block passt" },
          ], notes: "In Azure: --custom-data cloud-init.yaml bzw. customData in Bicep." },
        { type: "cards", title: "Wichtig bei cloud-init", cols: 3, items: [
          { icon: "FaRocket", h: "Nur beim ersten Start", t: "Änderungen? Neue VM erstellen." },
          { icon: "FaExclamationTriangle", h: "Scheitert still", t: "Die VM startet, aber die Einrichtung fehlt." },
          { icon: "FaSearch", h: "Log lesen", t: "cloud-init status --long · /var/log/cloud-init-output.log" },
        ] },
        { type: "table", title: "Welches Werkzeug wofür?", head: ["Werkzeug", "Ebene", "Frage", "Moment"], colW: [2.2, 2.2, 4.4, 2.6], rows: [
          ["Bicep / ARM", "Infrastruktur", "Welche Ressourcen gibt es?", "vor dem ersten Start"],
          ["cloud-init", "Ersteinrichtung", "Wie richtet sich die VM ein?", "beim ersten Start"],
          ["Azure CLI", "beides, imperativ", "schnell erstellen oder nachschauen", "jederzeit"],
        ], note: "Bicep baut das Haus – cloud-init richtet es beim Einzug ein." },
        { type: "quiz", qs: [
          { h: "Idempotenz", q: "Dein CLI-Skript bricht beim zweiten Mal mit «already exists» ab. Was fehlt?" },
          { h: "nginx fehlt", q: "Die VM startet, aber nginx ist nicht installiert. Was prüfst du?" },
          { h: "Neustart", q: "Du änderst die cloud-init-Datei und startest die VM neu. Was passiert?" },
        ], notes: "Idempotenz. #cloud-config, Einrückung, Log. Nichts – nur beim ersten Start." },
        quellen([
          { icon: "FaBook", h: "Theorie im Repository", t: "theorie/07-automatisierung.md" },
          { icon: "FaGraduationCap", h: "Microsoft Learn", t: "Einführung in Infrastructure as Code mit Bicep · cloud-init in Azure" },
          { icon: "FaBook", h: "TBZ M346", t: "Infrastructure as Code, Cloud-init (Kapitelnamen; Texte übernommen, für Azure angepasst)" },
        ]),
        ende("Jetzt du", "Auftrag 5.1: VM mit cloud-init · danach Bicep"),
      ] },
    ],
  },
];

module.exports = { EINFUEHRUNG, TAGE, INPUTS };

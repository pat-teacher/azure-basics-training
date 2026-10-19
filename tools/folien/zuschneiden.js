const sharp = require("sharp"), path = require("path");
const A = process.argv[2];
const own = ["anfrage-weg","azure-hierarchie","azure-redundanz","azure-regionen","azure-storage-aufbau","azure-vm-bestandteile","azure-vnet-nsg","iac-ablauf","servicemodelle","vm-netzwerkmodi","vm-vs-container"];
(async () => {
  for (const n of [...own, "Speicher_TechnischeModelle", "Speicher_Persistenz", "Speicher_Zugriffsklassen"]) {
    const p = path.join(A, n + ".png"), m = await sharp(p).metadata(), top = own.includes(n) ? 84 : 96;
    await sharp(p).extract({ left: 0, top, width: m.width, height: m.height - top }).toFile(path.join(A, n + "-folie.png"));
  }
  console.log("crop ok");
})();

const sharp = require("sharp"), path = require("path");
const A = process.argv[2];
const own = ["anfrage-weg","azure-hierarchie","azure-redundanz","azure-regionen","azure-storage-aufbau","azure-vm-bestandteile","azure-vnet-nsg","hybride-cloud","hyperscaler","hypervisor-typen","iac-ablauf","persistenz","servicemodelle","ssh-schluessel","vm-netzwerkmodi","vm-vs-container","zugriffsebenen"];
(async () => {
  for (const n of own) {
    const p = path.join(A, n + ".png"), m = await sharp(p).metadata(), top = 84;
    await sharp(p).extract({ left: 0, top, width: m.width, height: m.height - top }).toFile(path.join(A, n + "-folie.png"));
  }
  console.log("crop ok");
})();

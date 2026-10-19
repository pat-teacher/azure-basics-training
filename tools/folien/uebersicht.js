const sharp = require("sharp"), fs = require("fs"), path = require("path");
const QA = process.argv[2];
(async () => {
  for (const deck of fs.readdirSync(QA).filter((d) => fs.statSync(path.join(QA, d)).isDirectory())) {
    const files = fs.readdirSync(path.join(QA, deck)).filter((f) => /^s\d+\.png$/.test(f)).sort();
    const cols = 3, w = 666, h = 375, pad = 8, rows = Math.ceil(files.length / cols);
    const comps = [];
    for (let i = 0; i < files.length; i++) {
      const buf = await sharp(path.join(QA, deck, files[i])).resize(w, h).toBuffer();
      comps.push({ input: buf, left: pad + (i % cols) * (w + pad), top: pad + Math.floor(i / cols) * (h + pad) });
    }
    await sharp({ create: { width: cols * (w + pad) + pad, height: rows * (h + pad) + pad, channels: 3, background: "#888888" } })
      .composite(comps).jpeg({ quality: 80 }).toFile(path.join(QA, deck + "-sheet.jpg"));
    console.log(path.join(QA, deck + "-sheet.jpg"));
  }
})();

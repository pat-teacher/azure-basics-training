// Erzeugt die PowerPoint-Präsentationen des Kurses im PAT-Cloud-Solutions-Stil.
// Aufruf: node tools/praesentationen.js <assets-ordner> <ausgabe-ordner> <apply_theme.js>
//   assets-ordner: PNGs der Diagramme (2x), Logos, Wolke und icons/<Name>.png
// Inhalte: tools/praesentationen-inhalt.js
const path = require("path");
const pptxgen = require("pptxgenjs");
const sharp = require("sharp");
const { TAGE, INPUTS } = require("./praesentationen-inhalt.js");

const [ASSETS, OUT, APPLY_THEME] = process.argv.slice(2);
const { applyTheme } = require(APPLY_THEME);

const DARK = "27303A", BLUE = "006FAD", LIGHT = "DEE2FB", GREY = "6F6F6F", BG = "F7F7F7", WHITE = "FFFFFF", LINE = "D5D8F4";
const THEME = {
  name: "PAT Cloud Solutions",
  headFontFace: "Calibri",
  bodyFontFace: "Calibri",
  colors: {
    dk1: DARK, lt1: WHITE, dk2: "0E0E0E", lt2: BG,
    accent1: BLUE, accent2: LIGHT, accent3: GREY, accent4: "2E7D32", accent5: "B3261E", accent6: LINE,
    hlink: BLUE, folHlink: DARK,
  },
};
const KURS = "Einführung in Cloud Computing mit Microsoft Azure";
const W = 13.333, M = 0.6, CW = W - 2 * M, TOP = 1.45, BOTTOM = 6.6;

const asset = (n) => path.join(ASSETS, n);
const icon = (n) => path.join(ASSETS, "icons", `${n}.png`);
const sizes = {};
async function imgSize(p) {
  if (!sizes[p]) { const m = await sharp(p).metadata(); sizes[p] = { w: m.width, h: m.height }; }
  return sizes[p];
}
async function fit(p, x, y, w, h) {
  const s = await imgSize(p);
  const r = Math.min(w / s.w, h / s.h);
  const iw = s.w * r, ih = s.h * r;
  return { path: p, x: x + (w - iw) / 2, y: y + (h - ih) / 2, w: iw, h: ih };
}

function defineLayouts(pres) {
  const footer = [
    { image: { x: M, y: 6.98, w: 1.16, h: 0.3, path: asset("logo-dunkel.png") } },
    { text: { text: KURS, options: { x: 2.0, y: 6.93, w: 7, h: 0.4, fontSize: 10, color: GREY, valign: "middle", margin: 0 } } },
  ];
  pres.defineSlideMaster({
    title: "TITEL", background: { color: DARK },
    objects: [
      { image: { x: M, y: 0.55, w: 2.7, h: 0.7, path: asset("logo-hell.png") } },
      { image: { x: 9.2, y: 2.2, w: 3.5, h: 2.13, path: asset("wolke.png") } },
      { placeholder: { options: { name: "title", type: "title", x: M, y: 2.3, w: 8.3, h: 1.7, fontSize: 44, bold: true, color: WHITE, valign: "bottom", align: "left", margin: 0 }, text: "" } },
      { placeholder: { options: { name: "body", type: "body", x: M, y: 4.15, w: 8.3, h: 1.2, fontSize: 20, color: LIGHT, valign: "top", align: "left", margin: 0 }, text: "" } },
      { text: { text: "Kanton Zürich · ICT-Grundbildung · PAT Cloud Solutions", options: { x: M, y: 6.7, w: 9, h: 0.4, fontSize: 12, color: LIGHT, margin: 0 } } },
    ],
  });
  pres.defineSlideMaster({
    title: "KAPITEL", background: { color: BLUE },
    objects: [
      { image: { x: 9.6, y: 2.4, w: 3.0, h: 1.82, path: asset("wolke.png") } },
      { image: { x: M, y: 6.85, w: 1.5, h: 0.39, path: asset("logo-hell.png") } },
      { placeholder: { options: { name: "title", type: "title", x: M, y: 2.4, w: 8.6, h: 1.5, fontSize: 40, bold: true, color: WHITE, valign: "bottom", align: "left", margin: 0 }, text: "" } },
      { placeholder: { options: { name: "body", type: "body", x: M, y: 4.05, w: 8.6, h: 1.2, fontSize: 20, color: LIGHT, valign: "top", align: "left", margin: 0 }, text: "" } },
    ],
  });
  pres.defineSlideMaster({
    title: "INHALT", background: { color: WHITE },
    objects: [
      ...footer,
      { placeholder: { options: { name: "title", type: "title", x: M, y: 0.35, w: CW, h: 0.9, fontSize: 34, bold: true, color: DARK, valign: "middle", align: "left", margin: 0 }, text: "" } },
    ],
    slideNumber: { x: 12.23, y: 6.93, w: 0.5, h: 0.4, fontSize: 10, color: GREY, align: "right" },
  });
  pres.defineSlideMaster({
    title: "ENDE", background: { color: DARK },
    objects: [
      { image: { x: M, y: 0.55, w: 2.7, h: 0.7, path: asset("logo-hell.png") } },
      { placeholder: { options: { name: "title", type: "title", x: M, y: 1.7, w: CW, h: 1.0, fontSize: 40, bold: true, color: WHITE, valign: "middle", align: "left", margin: 0 }, text: "" } },
      { placeholder: { options: { name: "body", type: "body", x: M, y: 2.8, w: CW, h: 0.7, fontSize: 20, color: LIGHT, valign: "top", align: "left", margin: 0 }, text: "" } },
    ],
  });
}

// ---- Bausteine ---------------------------------------------------------------
function iconCircle(slide, name, x, y, d, fill = BLUE) {
  slide.addShape("ellipse", { x, y, w: d, h: d, fill: { color: fill }, line: { color: fill }, objectName: `icon-kreis-${name}` });
  const p = d * 0.24;
  slide.addImage({ path: icon(name), x: x + p, y: y + p, w: d - 2 * p, h: d - 2 * p, objectName: `icon-${name}` });
}

function grid(n, cols, top = TOP, bottom = BOTTOM, gap = 0.3, maxH = 2.7) {
  const rows = Math.ceil(n / cols);
  const w = (CW - (cols - 1) * gap) / cols;
  const h = Math.min(maxH, (bottom - top - (rows - 1) * gap) / rows);
  const totalH = rows * h + (rows - 1) * gap;
  const y0 = top + Math.max(0, (bottom - top - totalH) / 2);
  return Array.from({ length: n }, (_, i) => ({ x: M + (i % cols) * (w + gap), y: y0 + Math.floor(i / cols) * (h + gap), w, h }));
}

function card(slide, c, it) {
  slide.addShape("roundRect", { x: c.x, y: c.y, w: c.w, h: c.h, rectRadius: 0.12, fill: { color: BG }, line: { color: BG }, objectName: "karte" });
  iconCircle(slide, it.icon, c.x + 0.3, c.y + 0.3, 0.7);
  slide.addText(it.h, { x: c.x + 1.2, y: c.y + 0.3, w: c.w - 1.45, h: 0.7, fontSize: 20, bold: true, color: DARK, valign: "middle", margin: 0, isTextBox: true, fit: "shrink" });
  if (it.t) slide.addText(it.t, { x: c.x + 0.3, y: c.y + 1.2, w: c.w - 0.6, h: c.h - 1.35, fontSize: 16, color: DARK, valign: "top", margin: 0, isTextBox: true, paraSpaceAfter: 4 });
}

const builders = {
  async title(pres, s, d) {
    const sl = pres.addSlide({ masterName: "TITEL", sectionTitle: d.section });
    sl.addText(s.title, { placeholder: "title" });
    sl.addText(s.sub, { placeholder: "body" });
    return sl;
  },
  async divider(pres, s, d) {
    const sl = pres.addSlide({ masterName: "KAPITEL", sectionTitle: d.section });
    sl.addText(s.title, { placeholder: "title" });
    if (s.sub) sl.addText(s.sub, { placeholder: "body" });
    return sl;
  },
  async end(pres, s, d) {
    const sl = pres.addSlide({ masterName: "ENDE", sectionTitle: d.section });
    sl.addText(s.title, { placeholder: "title" });
    if (s.sub) sl.addText(s.sub, { placeholder: "body" });
    if (s.items) {
      const cells = grid(s.items.length, s.items.length, 3.8, 6.4, 0.3, 2.3);
      s.items.forEach((it, i) => {
        const c = cells[i];
        sl.addShape("roundRect", { x: c.x, y: c.y, w: c.w, h: c.h, rectRadius: 0.12, fill: { color: "323C48" }, line: { color: "323C48" }, objectName: "karte-dunkel" });
        iconCircle(sl, it.icon, c.x + 0.3, c.y + 0.3, 0.7);
        sl.addText(it.h, { x: c.x + 1.2, y: c.y + 0.3, w: c.w - 1.45, h: 0.7, fontSize: 20, bold: true, color: WHITE, valign: "middle", margin: 0, isTextBox: true });
        if (it.t) sl.addText(it.t, { x: c.x + 0.3, y: c.y + 1.2, w: c.w - 0.6, h: c.h - 1.35, fontSize: 16, color: LIGHT, valign: "top", margin: 0, isTextBox: true });
      });
    }
    return sl;
  },
  async cards(pres, s, d) {
    const sl = pres.addSlide({ masterName: "INHALT", sectionTitle: d.section });
    sl.addText(s.title, { placeholder: "title" });
    let top = TOP;
    if (s.lead) { sl.addText(s.lead, { x: M, y: TOP, w: CW, h: 0.5, fontSize: 16, color: GREY, margin: 0, isTextBox: true }); top = TOP + 0.65; }
    const cells = grid(s.items.length, s.cols || Math.min(3, s.items.length), top, s.note ? BOTTOM - 0.55 : BOTTOM);
    s.items.forEach((it, i) => card(sl, cells[i], it));
    if (s.note) sl.addText(s.note, { x: M, y: BOTTOM - 0.4, w: CW, h: 0.45, fontSize: 15, bold: true, color: BLUE, margin: 0, isTextBox: true });
    return sl;
  },
  async diagram(pres, s, d) {
    const sl = pres.addSlide({ masterName: "INHALT", sectionTitle: d.section });
    sl.addText(s.title, { placeholder: "title" });
    const capH = s.caption ? 0.45 : 0;
    const img = await fit(asset(s.img), M, TOP, CW, BOTTOM - TOP - capH);
    sl.addImage({ ...img, altText: s.alt || s.title, objectName: "diagramm" });
    if (s.caption) sl.addText(s.caption, { x: M, y: BOTTOM - 0.38, w: CW, h: 0.4, fontSize: 12, color: GREY, align: "center", margin: 0, isTextBox: true });
    return sl;
  },
  async textImg(pres, s, d) {
    const sl = pres.addSlide({ masterName: "INHALT", sectionTitle: d.section });
    sl.addText(s.title, { placeholder: "title" });
    const tw = s.textW || 5.4;
    sl.addText(s.bullets.map((b, i) => ({ text: b, options: { bullet: true, breakLine: i < s.bullets.length - 1, paraSpaceAfter: 10 } })),
      { x: M, y: TOP + 0.1, w: tw, h: BOTTOM - TOP - 0.1, fontSize: 17, color: DARK, valign: "top", margin: 0, isTextBox: true });
    const ix = M + tw + 0.4;
    const capH = s.caption ? 0.45 : 0;
    const img = await fit(asset(s.img), ix, TOP, W - M - ix, BOTTOM - TOP - capH);
    sl.addImage({ ...img, altText: s.alt || s.title, objectName: "bild" });
    if (s.caption) sl.addText(s.caption, { x: ix, y: BOTTOM - 0.38, w: W - M - ix, h: 0.4, fontSize: 12, color: GREY, align: "center", margin: 0, isTextBox: true });
    return sl;
  },
  async points(pres, s, d) {
    const sl = pres.addSlide({ masterName: "INHALT", sectionTitle: d.section });
    sl.addText(s.title, { placeholder: "title" });
    const n = s.items.length, rowH = Math.min(1.05, (BOTTOM - TOP) / n);
    const y0 = TOP + Math.max(0, (BOTTOM - TOP - n * rowH) / 2);
    s.items.forEach((it, i) => {
      const y = y0 + i * rowH;
      if (it.num) {
        sl.addShape("ellipse", { x: M, y: y + (rowH - 0.6) / 2, w: 0.6, h: 0.6, fill: { color: BLUE }, line: { color: BLUE }, objectName: "nummer" });
        sl.addText(String(it.num), { x: M, y: y + (rowH - 0.6) / 2, w: 0.6, h: 0.6, fontSize: 18, bold: true, color: WHITE, align: "center", valign: "middle", margin: 0, isTextBox: true });
      } else iconCircle(sl, it.icon, M, y + (rowH - 0.6) / 2, 0.6);
      sl.addText([{ text: it.h, options: { bold: true, breakLine: !!it.t } }, ...(it.t ? [{ text: it.t, options: { color: GREY } }] : [])],
        { x: M + 0.85, y, w: CW - 0.85, h: rowH, fontSize: 18, color: DARK, valign: "middle", margin: 0, isTextBox: true });
    });
    return sl;
  },
  async table(pres, s, d) {
    const sl = pres.addSlide({ masterName: "INHALT", sectionTitle: d.section });
    sl.addText(s.title, { placeholder: "title" });
    const fs = s.fontSize || 17;
    const head = s.head.map((h) => ({ text: h, options: { bold: true, color: WHITE, fill: { color: DARK } } }));
    const rows = s.rows.map((r, i) => r.map((c) => ({ text: c, options: { fill: { color: i % 2 ? WHITE : BG } } })));
    const total = s.colW.reduce((a, b) => a + b, 0);
    const colW = s.colW.map((c) => (c / total) * CW);
    sl.addTable([head, ...rows], { x: M, y: TOP, w: CW, colW, fontSize: fs, color: DARK, valign: "middle", border: { type: "solid", pt: 0.75, color: LINE }, margin: [7, 10, 7, 10] });
    if (s.note) sl.addText(s.note, { x: M, y: BOTTOM - 0.45, w: CW, h: 0.5, fontSize: 15, bold: true, color: BLUE, margin: 0, isTextBox: true });
    return sl;
  },
  async compare(pres, s, d) {
    const sl = pres.addSlide({ masterName: "INHALT", sectionTitle: d.section });
    sl.addText(s.title, { placeholder: "title" });
    const pw = (CW - 0.4) / 2, ph = BOTTOM - TOP - (s.note ? 0.6 : 0);
    [s.left, s.right].forEach((p, i) => {
      const x = M + i * (pw + 0.4);
      sl.addShape("roundRect", { x, y: TOP, w: pw, h: ph, rectRadius: 0.12, fill: { color: i ? LIGHT : BG }, line: { color: i ? LIGHT : BG }, objectName: "vergleich" });
      iconCircle(sl, p.icon, x + 0.35, TOP + 0.3, 0.75, i ? DARK : BLUE);
      sl.addText(p.h, { x: x + 1.3, y: TOP + 0.3, w: pw - 1.6, h: 0.75, fontSize: 22, bold: true, color: DARK, valign: "middle", margin: 0, isTextBox: true });
      sl.addText(p.points.map((b, k) => ({ text: b, options: { bullet: true, breakLine: k < p.points.length - 1, paraSpaceAfter: 8 } })),
        { x: x + 0.35, y: TOP + 1.3, w: pw - 0.7, h: ph - 1.5, fontSize: 18, color: DARK, valign: "top", margin: 0, isTextBox: true });
    });
    if (s.note) sl.addText(s.note, { x: M, y: BOTTOM - 0.45, w: CW, h: 0.5, fontSize: 15, bold: true, color: BLUE, margin: 0, isTextBox: true });
    return sl;
  },
  async statement(pres, s, d) {
    const sl = pres.addSlide({ masterName: "INHALT", sectionTitle: d.section });
    sl.addText(s.title, { placeholder: "title" });
    sl.addShape("roundRect", { x: M, y: TOP + 0.2, w: CW, h: 3.0, rectRadius: 0.15, fill: { color: LIGHT }, line: { color: LIGHT }, objectName: "vergleich-box" });
    iconCircle(sl, s.icon, M + 0.5, TOP + 1.0, 1.4);
    sl.addText(s.quote, { x: M + 2.3, y: TOP + 0.4, w: CW - 2.7, h: 2.6, fontSize: 24, italic: true, color: DARK, valign: "middle", margin: 0, isTextBox: true });
    if (s.points) sl.addText(s.points.map((b, k) => ({ text: b, options: { bullet: true, breakLine: k < s.points.length - 1, paraSpaceAfter: 6 } })),
      { x: M, y: TOP + 3.5, w: CW, h: BOTTOM - TOP - 3.5, fontSize: 18, color: DARK, valign: "top", margin: 0, isTextBox: true });
    return sl;
  },
  async stat(pres, s, d) {
    const sl = pres.addSlide({ masterName: "INHALT", sectionTitle: d.section });
    sl.addText(s.title, { placeholder: "title" });
    const cells = grid(s.stats.length, s.stats.length, TOP, TOP + 2.4, 0.3, 2.4);
    s.stats.forEach((st, i) => {
      const c = cells[i];
      sl.addShape("roundRect", { x: c.x, y: c.y, w: c.w, h: c.h, rectRadius: 0.12, fill: { color: i === s.stats.length - 1 ? BLUE : BG }, line: { color: i === s.stats.length - 1 ? BLUE : BG }, objectName: "kennzahl" });
      const dark = i === s.stats.length - 1;
      sl.addText(st.n, { x: c.x, y: c.y + 0.2, w: c.w, h: 1.3, fontSize: 54, bold: true, color: dark ? WHITE : BLUE, align: "center", valign: "middle", margin: 0, isTextBox: true });
      sl.addText(st.label, { x: c.x + 0.2, y: c.y + 1.5, w: c.w - 0.4, h: 0.75, fontSize: 15, color: dark ? WHITE : DARK, align: "center", valign: "top", margin: 0, isTextBox: true });
    });
    if (s.points) sl.addText(s.points.map((b, k) => ({ text: b, options: { bullet: true, breakLine: k < s.points.length - 1, paraSpaceAfter: 8 } })),
      { x: M, y: TOP + 2.75, w: CW, h: BOTTOM - TOP - 2.75, fontSize: 18, color: DARK, valign: "top", margin: 0, isTextBox: true });
    return sl;
  },
  async code(pres, s, d) {
    const sl = pres.addSlide({ masterName: "INHALT", sectionTitle: d.section });
    sl.addText(s.title, { placeholder: "title" });
    const cw = s.codeW || 7.0;
    sl.addShape("roundRect", { x: M, y: TOP, w: cw, h: BOTTOM - TOP, rectRadius: 0.1, fill: { color: DARK }, line: { color: DARK }, objectName: "code-box" });
    sl.addText(s.code, { x: M + 0.3, y: TOP + 0.25, w: cw - 0.6, h: BOTTOM - TOP - 0.5, fontFace: "Courier New", fontSize: s.codeSize || 18, color: BG, valign: "top", margin: 0, isTextBox: true });
    const x = M + cw + 0.4, w = W - M - x;
    const n = s.side.length, rowH = Math.min(1.25, (BOTTOM - TOP) / n);
    s.side.forEach((it, i) => {
      sl.addText([{ text: it.h, options: { bold: true, color: BLUE, breakLine: true } }, { text: it.t, options: { color: DARK } }],
        { x, y: TOP + i * rowH, w, h: rowH, fontSize: 17, valign: "top", margin: 0, isTextBox: true });
    });
    return sl;
  },
  async steps(pres, s, d) {
    const sl = pres.addSlide({ masterName: "INHALT", sectionTitle: d.section });
    sl.addText(s.title, { placeholder: "title" });
    const n = s.steps.length, gap = 0.45, w = (CW - (n - 1) * gap) / n, y = TOP + 0.4, h = 3.3;
    s.steps.forEach((st, i) => {
      const x = M + i * (w + gap);
      sl.addShape("roundRect", { x, y, w, h, rectRadius: 0.12, fill: { color: BG }, line: { color: BG }, objectName: "schritt" });
      sl.addShape("ellipse", { x: x + w / 2 - 0.35, y: y + 0.3, w: 0.7, h: 0.7, fill: { color: BLUE }, line: { color: BLUE }, objectName: "schritt-nr" });
      sl.addText(String(i + 1), { x: x + w / 2 - 0.35, y: y + 0.3, w: 0.7, h: 0.7, fontSize: 20, bold: true, color: WHITE, align: "center", valign: "middle", margin: 0, isTextBox: true });
      sl.addText(st.h, { x: x + 0.2, y: y + 1.15, w: w - 0.4, h: 0.7, fontSize: 17, bold: true, color: DARK, align: "center", valign: "middle", margin: 0, isTextBox: true });
      sl.addText(st.t, { x: x + 0.2, y: y + 1.9, w: w - 0.4, h: h - 2.05, fontSize: 16, color: DARK, align: "center", valign: "top", margin: 0, isTextBox: true });
      if (i < n - 1) sl.addShape("rightArrow", { x: x + w + 0.07, y: y + h / 2 - 0.15, w: 0.31, h: 0.3, fill: { color: GREY }, line: { color: GREY }, objectName: "pfeil" });
    });
    if (s.note) sl.addText(s.note, { x: M, y: y + h + 0.4, w: CW, h: 0.8, fontSize: 16, color: DARK, margin: 0, isTextBox: true });
    return sl;
  },
  async quiz(pres, s, d) {
    const sl = await builders.cards(pres, { title: s.title || "Selbsttest", lead: s.lead || "Erst selbst überlegen, dann mit dem Nachbarn vergleichen.", cols: s.cols || Math.min(3, s.qs.length), items: s.qs.map((q) => ({ icon: "FaQuestionCircle", h: q.h, t: q.q })) }, d);
    return sl;
  },
};

async function buildDeck(d) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE";
  pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
  pres.author = "PAT Cloud Solutions";
  pres.company = "PAT Cloud Solutions";
  pres.title = d.title;
  defineLayouts(pres);
  for (const sec of d.sections) {
    pres.addSection({ title: sec.title });
    for (const s of sec.slides) {
      const sl = await builders[s.type](pres, s, { section: sec.title });
      if (s.notes) sl.addNotes(s.notes);
    }
  }
  const file = path.join(OUT, d.file);
  await pres.writeFile({ fileName: file });
  await applyTheme(file, THEME);
  console.log("ok", d.file);
}

(async () => {
  for (const d of [...TAGE, ...INPUTS]) await buildDeck(d);
})().catch((e) => { console.error(e); process.exit(1); });

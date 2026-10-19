const React = require("react");
const RDS = require("react-dom/server");
const sharp = require("sharp");
const fa = require("react-icons/fa");
const names = ["FaServer","FaCloud","FaNetworkWired","FaDatabase","FaLock","FaCode","FaLaptop","FaDocker","FaTerminal","FaBook","FaClock","FaUsers","FaCheckCircle","FaLightbulb","FaQuestionCircle","FaGlobeEurope","FaLayerGroup","FaShieldAlt","FaHdd","FaKey","FaRocket","FaTrashAlt","FaCoins","FaSitemap","FaFlask","FaHandsHelping","FaPizzaSlice","FaRoute","FaCamera","FaClone","FaMicrochip","FaMemory","FaBuilding","FaUserShield","FaBolt","FaSearch","FaWrench","FaClipboardList","FaFlagCheckered","FaMapMarkedAlt","FaArchive","FaCopy","FaFolderOpen","FaDoorOpen","FaExchangeAlt","FaGraduationCap","FaStar","FaPencilAlt","FaPlug","FaCubes","FaChartLine","FaRedo","FaFileCode","FaExclamationTriangle"];
(async () => {
  for (const n of names) {
    const C = fa[n]; if (!C) { console.log("missing", n); continue; }
    const svg = RDS.renderToStaticMarkup(React.createElement(C, { color: "#FFFFFF", size: 256 }));
    await sharp(Buffer.from(svg)).png().toFile(`assets/icons/${n}.png`);
  }
  console.log("icons ok");
})();

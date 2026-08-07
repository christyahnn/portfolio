// ============================================================
// Tool / platform ticker
// Edit this one array to change what scrolls across every page.
// ============================================================
const TOOLS = [
  "Stata",
  "R",
  "SPSS",
  "Python",
  "SQL",
  "Excel",
  "Google Suite",
  "Tableau",
  "Notion",
  "Framer",
  "Claude",
  "PowerPoint"
];

function initTicker() {
  const track = document.getElementById("ticker-track");
  if (!track) return;

  // Render the list twice back-to-back so the CSS animation
  // (translateX -50%) loops seamlessly with no visible seam.
  const row = TOOLS.map((t) => `<span>${t}</span>`).join("");
  track.innerHTML = row + row;
}

document.addEventListener("DOMContentLoaded", initTicker);

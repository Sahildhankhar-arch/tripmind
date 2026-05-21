// components/BudgetChart.jsx.js — drawDonut(), canvas logic

/**
 * Draws a donut chart on the #budgetDonut canvas element.
 * Segments represent budget breakdown: Accommodation, Flights, Food, Activities, Transport.
 */
function drawDonut() {
  const canvas = document.getElementById("budgetDonut");
  if (!canvas) return;

  const ctx    = canvas.getContext("2d");
  const data   = [42, 28, 18, 8, 4]; // percentage values
  const colors = ["#e85d3f", "#2563eb", "#16a34a", "#9333ea", "#f59e0b"];
  const cx     = 100;
  const cy     = 100;
  const r      = 80;   // outer radius
  const hole   = 50;   // inner radius (donut hole)

  let angle = -Math.PI / 2; // start from 12 o'clock

  data.forEach((v, i) => {
    const slice = (v / 100) * Math.PI * 2;

    // Draw segment
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, angle, angle + slice);
    ctx.closePath();
    ctx.fillStyle = colors[i];
    ctx.fill();

    // Punch out inner circle (donut hole)
    ctx.beginPath();
    ctx.arc(cx, cy, hole, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();

    angle += slice;
  });

  // Center label
  ctx.fillStyle = "#1a1814";
  ctx.font = "bold 14px DM Sans";
  ctx.textAlign = "center";
  ctx.fillText("₹42,500", cx, cy - 6);

  ctx.font = "11px DM Sans";
  ctx.fillStyle = "#6b6660";
  ctx.fillText("Total", cx, cy + 12);
}

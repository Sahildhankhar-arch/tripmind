// components/TransportCard.jsx.js — renderTransport()

/**
 * Renders all transport option cards into #transport-grid.
 * Uses transportData array from data/transport.js.
 */
function renderTransport() {
  const g = document.getElementById("transport-grid");
  if (!g) return;

  g.innerHTML = transportData
    .map(
      (t) => `
    <div class="transport-card ${t.recommended ? "recommended" : ""}">
      <div class="transport-icon">${t.type.split(" ")[0]}</div>
      <div class="transport-type">${t.type.split(" ").slice(1).join(" ")}</div>
      <div class="transport-route">${t.route}</div>
      <div style="font-size:0.72rem;color:var(--text3);margin-bottom:0.5rem;font-style:italic">${t.via}</div>
      <div class="transport-details">
        <div class="transport-detail">
          <span class="transport-detail-label">Duration</span>
          <span class="transport-detail-val">${t.time}</span>
        </div>
        <div class="transport-detail">
          <span class="transport-detail-label">Cost</span>
          <span class="transport-detail-val" style="color:var(--accent)">${t.cost}</span>
        </div>
      </div>
      <div style="margin-top:0.75rem;font-size:0.72rem;color:var(--text3)">${t.note}</div>
    </div>`
    )
    .join("");
}

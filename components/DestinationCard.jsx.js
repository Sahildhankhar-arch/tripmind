// components/DestinationCard.jsx.js — createDestCard(), filterDest()

/**
 * Generates the HTML string for a destination card.
 * @param {Object} d - Destination object from destinations.js
 * @param {boolean} showAI - Whether to show the "AI Pick" badge
 * @returns {string} HTML string
 */
function createDestCard(d, showAI = true) {
  return `<div class="dest-card" onclick="showDestDetail('${d.name}')">
    ${showAI && d.ai ? '<div class="badge-ai">✦ AI Pick</div>' : ""}
    <div class="dest-img-placeholder" style="background:linear-gradient(135deg,${gradColor(d.name)})">
      <span style="font-size:3rem">${d.emoji}</span>
    </div>
    <div class="dest-body">
      <div class="dest-header">
        <div class="dest-name">${d.name}</div>
        <div class="dest-rating"><span>★</span>${d.rating} (${(d.reviews / 1000).toFixed(1)}k)</div>
      </div>
      <div class="dest-meta">${d.desc}</div>
      <div class="dest-tags">${d.tags.map((t) => `<span class="tag tag-${t}">${t}</span>`).join("")}</div>
      <div class="dest-price">
        <span class="price-from">From</span>
        <span class="price-val">${d.price} <span>/ person</span></span>
      </div>
    </div>
  </div>`;
}

/**
 * Filters and re-renders the explore destination grid.
 * @param {HTMLElement} btn - The filter button clicked
 * @param {string} type - Filter type ('all' | 'beach' | 'culture' | etc.)
 */
function filterDest(btn, type) {
  document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderExploreGrid(type);
}

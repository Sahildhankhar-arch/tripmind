// components/ItineraryTimeline.jsx.js — generateItinerary() with loading state

/**
 * Reads form inputs, shows a loading animation, then renders the AI itinerary
 * timeline into #itinerary-output after a simulated delay.
 */
function generateItinerary() {
  const dest   = document.getElementById("plan-dest").value  || "Bali, Indonesia";
  const days   = parseInt(document.getElementById("plan-days").value) || 5;
  const type   = document.getElementById("plan-type").value  || "Couple Getaway";
  const out    = document.getElementById("itinerary-output");

  // Loading state
  out.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:center;height:200px;color:var(--text2)">
      <div style="text-align:center">
        <div style="font-size:2rem;animation:pulse 1s infinite">✨</div>
        <div style="margin-top:1rem">Generating your AI itinerary...</div>
      </div>
    </div>`;

  // Simulate AI generation delay
  setTimeout(() => {
    const data     = itineraryData["Bali, Indonesia"];
    const usedDays = Math.min(days, data ? data.length : 3);

    out.innerHTML = `
      <div class="itinerary-header">
        <div class="itinerary-title">${dest}</div>
        <div class="itinerary-subtitle">${type} • ${days}-Day AI Itinerary</div>
        <div class="itinerary-meta">
          <div class="i-meta-item"><div class="i-meta-num">${days}</div><div class="i-meta-label">Days</div></div>
          <div class="i-meta-item"><div class="i-meta-num">✨</div><div class="i-meta-label">AI-Curated</div></div>
          <div class="i-meta-item"><div class="i-meta-num">24</div><div class="i-meta-label">Activities</div></div>
        </div>
      </div>
      <div class="day-timeline">
        ${(data || [])
          .slice(0, usedDays)
          .map(
            (day, i) => `
          <div class="day-block">
            <div class="day-indicator">
              <div class="day-circle">D${i + 1}</div>
              ${i < usedDays - 1 ? '<div class="day-line"></div>' : ""}
            </div>
            <div class="day-content">
              <div class="day-title">${day.title}</div>
              <div class="activity-list">
                ${day.activities
                  .map(
                    (a) => `
                  <div class="activity">
                    <div class="activity-time">${a.time}</div>
                    <div class="activity-text">${a.text}</div>
                  </div>`
                  )
                  .join("")}
              </div>
            </div>
          </div>`
          )
          .join("")}
      </div>`;
  }, 1800);
}

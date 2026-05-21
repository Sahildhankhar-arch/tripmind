// pages/Home.jsx.js — renderHomeGrid(), feature cards section

/**
 * Injects the Home page HTML into #page-home and populates destination grids.
 */
function renderHomePage() {
  const page = document.getElementById("page-home");
  page.innerHTML = `
    <!-- HERO -->
    <div class="hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content fade-up">
        <div class="hero-tag">✦ AI-Powered Travel Planning</div>
        <h1>Travel <em>Smarter</em>,<br>Explore Further</h1>
        <p>Let AI plan your perfect trip — from dream destinations to day-by-day itineraries, personalized just for you.</p>
        <div class="search-box">
          <div class="search-field">
            <label>Where to?</label>
            <input type="text" placeholder="Bali, Paris, Tokyo..." id="search-dest">
          </div>
          <div class="search-field">
            <label>When?</label>
            <input type="date" id="search-date">
          </div>
          <div class="search-field">
            <label>Travel Type</label>
            <select id="search-type">
              <option>Solo</option>
              <option>Couple</option>
              <option>Family</option>
              <option>Group</option>
            </select>
          </div>
          <button class="search-btn" onclick="doSearch()">🔍 Search</button>
        </div>
      </div>
      <div class="hero-stats">
        <div class="stat"><div class="stat-num">2.4M+</div><div class="stat-label">Happy Travellers</div></div>
        <div class="stat"><div class="stat-num">180+</div><div class="stat-label">Countries</div></div>
        <div class="stat"><div class="stat-num">98%</div><div class="stat-label">AI Accuracy</div></div>
      </div>
    </div>

    <!-- RECOMMENDED DESTINATIONS -->
    <div class="section">
      <div class="section-header">
        <div class="section-tag">✦ AI Recommended</div>
        <h2>Recommended For You</h2>
        <p>Personalized picks based on your travel history, budget and interests</p>
      </div>
      <div class="card-grid" id="home-dest-grid"></div>
    </div>

    <!-- TRENDING -->
    <div style="background:var(--surface2);padding:5rem 0">
      <div class="section" style="padding-top:0;padding-bottom:0">
        <div class="section-header">
          <div class="section-tag">🔥 Trending Now</div>
          <h2>Top Destinations This Season</h2>
          <p>Most booked destinations by TripMind travelers in May 2026</p>
        </div>
        <div class="card-grid" id="trending-grid"></div>
      </div>
    </div>

    <!-- AI FEATURES SECTION -->
    <div class="section">
      <div class="section-header">
        <div class="section-tag">⚡ AI Features</div>
        <h2>Everything You Need to Travel Smart</h2>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1.5rem">
        ${[
          { icon: "🗺️", title: "AI Itinerary",   desc: "Generate day-by-day plans tailored to your interests and budget",              page: "planner" },
          { icon: "🌤️", title: "Weather Intel",   desc: "Real-time forecasts and AI-powered weather-based suggestions",                 page: "weather" },
          { icon: "🏨", title: "Smart Hotels",    desc: "AI-matched accommodations with sentiment-analyzed reviews",                   page: "hotels"  },
          { icon: "💰", title: "Budget AI",       desc: "ML-powered cost predictions with visual breakdowns",                          page: "planner" },
        ].map((f) => `
          <div onclick="showPage('${f.page}')" style="background:var(--surface);border-radius:var(--radius);border:0.5px solid var(--border);padding:1.5rem;cursor:pointer;transition:all 0.2s" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform=''">
            <div style="font-size:2rem;margin-bottom:1rem">${f.icon}</div>
            <div style="font-weight:700;margin-bottom:0.5rem">${f.title}</div>
            <div style="font-size:0.82rem;color:var(--text2);line-height:1.5">${f.desc}</div>
          </div>`).join("")}
      </div>
    </div>`;

  // Populate grids
  const homeGrid    = document.getElementById("home-dest-grid");
  const trendGrid   = document.getElementById("trending-grid");
  if (homeGrid)  homeGrid.innerHTML  = destinations.filter((d) => d.ai).slice(0, 4).map((d) => createDestCard(d)).join("");
  if (trendGrid) trendGrid.innerHTML = destinations.slice(0, 4).map((d) => createDestCard(d, false)).join("");
}

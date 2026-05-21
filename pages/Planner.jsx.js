// pages/Planner.jsx.js — switchTab(), renderExploreGrid(), all 4 tab panels

/**
 * Switches between the Planner page tabs.
 * @param {HTMLElement} tab - The tab element that was clicked
 * @param {string} id - ID of the tab content panel to show
 */
function switchTab(tab, id) {
  document.querySelectorAll(".page-tab").forEach((t) => t.classList.remove("active"));
  tab.classList.add("active");
  document.querySelectorAll(".tab-content").forEach((t) => (t.style.display = "none"));
  document.getElementById(id).style.display = "block";
}

/**
 * Toggles an interest chip active/inactive state.
 * @param {HTMLElement} el - The chip element
 */
function toggleChip(el) {
  el.classList.toggle("active");
}

/**
 * Renders destination cards into the Explore page grid.
 * @param {string} filter - Tag to filter by ('all' | 'beach' | etc.)
 */
function renderExploreGrid(filter = "all") {
  const g = document.getElementById("explore-grid");
  const filtered = filter === "all" ? destinations : destinations.filter((d) => d.tags.includes(filter));
  if (g) g.innerHTML = filtered.map((d) => createDestCard(d)).join("");
}

/**
 * Injects the Planner page HTML into #page-planner.
 */
function renderPlannerPage() {
  const page = document.getElementById("page-planner");
  page.innerHTML = `
    <div class="section">
      <div class="section-header">
        <div class="section-tag">🤖 AI Powered</div>
        <h2>Smart Trip Planner</h2>
        <p>Tell us your preferences and our AI will craft the perfect itinerary</p>
      </div>

      <div class="page-tabs">
        <div class="page-tab active"  onclick="switchTab(this,'itinerary-tab')">AI Itinerary</div>
        <div class="page-tab"         onclick="switchTab(this,'budget-tab')">Budget Predictor</div>
        <div class="page-tab"         onclick="switchTab(this,'transport-tab')">Transport</div>
        <div class="page-tab"         onclick="switchTab(this,'map-tab')">Interactive Map</div>
      </div>

      <!-- TAB 1: ITINERARY -->
      <div id="itinerary-tab" class="tab-content">
        <div class="planner-layout">
          <div class="planner-form">
            <div class="form-group">
              <label class="form-label">Destination</label>
              <input class="form-input" type="text" placeholder="e.g. Bali, Indonesia" id="plan-dest" value="Bali, Indonesia">
            </div>
            <div class="form-group">
              <label class="form-label">Duration</label>
              <select class="form-select" id="plan-days">
                <option>3 Days</option><option selected>5 Days</option><option>7 Days</option><option>10 Days</option><option>14 Days</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Travel Type</label>
              <select class="form-select" id="plan-type">
                <option>Solo Adventure</option><option selected>Couple Getaway</option><option>Family Vacation</option><option>Group Trip</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Budget per Day</label>
              <input type="range" min="2000" max="25000" value="8000" step="500" class="budget-slider" id="plan-budget"
                oninput="document.getElementById('budget-disp').textContent='₹'+Number(this.value).toLocaleString()">
              <div class="budget-display" id="budget-disp">₹8,000</div>
            </div>
            <div class="form-group">
              <label class="form-label">Interests</label>
              <div class="interest-chips">
                <span class="chip active" onclick="toggleChip(this)">🏖️ Beach</span>
                <span class="chip active" onclick="toggleChip(this)">🍜 Food</span>
                <span class="chip"        onclick="toggleChip(this)">🎭 Culture</span>
                <span class="chip"        onclick="toggleChip(this)">🧘 Wellness</span>
                <span class="chip"        onclick="toggleChip(this)">🏄 Adventure</span>
                <span class="chip"        onclick="toggleChip(this)">📸 Photography</span>
                <span class="chip"        onclick="toggleChip(this)">🛍️ Shopping</span>
                <span class="chip"        onclick="toggleChip(this)">🌿 Nature</span>
              </div>
            </div>
            <button class="generate-btn" onclick="generateItinerary()">✨ Generate AI Itinerary</button>
          </div>
          <div class="itinerary-result" id="itinerary-output">
            <div style="display:flex;align-items:center;justify-content:center;height:400px;color:var(--text2);text-align:center;padding:2rem">
              <div>
                <div style="font-size:4rem;margin-bottom:1rem">✈️</div>
                <div style="font-family:'DM Serif Display',serif;font-size:1.5rem;margin-bottom:0.5rem">Ready to plan your trip?</div>
                <div style="font-size:0.9rem;line-height:1.6">Fill in your preferences and click Generate to<br>get your personalized AI itinerary</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 2: BUDGET -->
      <div id="budget-tab" class="tab-content" style="display:none">
        <div class="budget-layout">
          <div class="budget-card">
            <div class="budget-total" id="total-budget">₹42,500</div>
            <div class="budget-subtitle">Estimated total for 5 days in Bali</div>
            <div class="budget-bar-item"><div class="budget-bar-header"><span class="budget-bar-label">🏨 Accommodation</span><span class="budget-bar-val">₹18,000</span></div><div class="budget-bar-track"><div class="budget-bar-fill" style="width:42%;background:var(--accent)"></div></div></div>
            <div class="budget-bar-item"><div class="budget-bar-header"><span class="budget-bar-label">✈️ Flights</span><span class="budget-bar-val">₹12,000</span></div><div class="budget-bar-track"><div class="budget-bar-fill" style="width:28%;background:#2563eb"></div></div></div>
            <div class="budget-bar-item"><div class="budget-bar-header"><span class="budget-bar-label">🍜 Food & Dining</span><span class="budget-bar-val">₹7,500</span></div><div class="budget-bar-track"><div class="budget-bar-fill" style="width:18%;background:#16a34a"></div></div></div>
            <div class="budget-bar-item"><div class="budget-bar-header"><span class="budget-bar-label">🎭 Activities</span><span class="budget-bar-val">₹3,500</span></div><div class="budget-bar-track"><div class="budget-bar-fill" style="width:8%;background:#9333ea"></div></div></div>
            <div class="budget-bar-item"><div class="budget-bar-header"><span class="budget-bar-label">🚌 Local Transport</span><span class="budget-bar-val">₹1,500</span></div><div class="budget-bar-track"><div class="budget-bar-fill" style="width:4%;background:#f59e0b"></div></div></div>
            <div style="margin-top:1.5rem;padding:1rem;background:rgba(232,93,63,0.08);border-radius:var(--radius2);border:0.5px solid rgba(232,93,63,0.2)">
              <div style="font-size:0.8rem;font-weight:600;color:var(--accent);margin-bottom:4px">💡 ML Prediction Confidence</div>
              <div style="font-size:0.82rem;color:var(--text2)">87% accuracy based on 12,400 similar trips. Budget may vary ±₹3,000 depending on season.</div>
            </div>
          </div>
          <div class="budget-card donut-wrap">
            <canvas id="budgetDonut" width="200" height="200"></canvas>
            <div class="donut-legend">
              <div class="legend-item"><div class="legend-dot" style="background:var(--accent)"></div><span>Accommodation 42%</span></div>
              <div class="legend-item"><div class="legend-dot" style="background:#2563eb"></div><span>Flights 28%</span></div>
              <div class="legend-item"><div class="legend-dot" style="background:#16a34a"></div><span>Food 18%</span></div>
              <div class="legend-item"><div class="legend-dot" style="background:#9333ea"></div><span>Activities 8%</span></div>
              <div class="legend-item"><div class="legend-dot" style="background:#f59e0b"></div><span>Transport 4%</span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 3: TRANSPORT -->
      <div id="transport-tab" class="tab-content" style="display:none">
        <div style="margin-bottom:1.5rem">
          <div style="font-family:'DM Serif Display',serif;font-size:1.5rem;margin-bottom:0.5rem">Mumbai → Bali</div>
          <div style="color:var(--text2);font-size:0.9rem">Transport options sorted by best value</div>
        </div>
        <div class="transport-options" id="transport-grid"></div>
      </div>

      <!-- TAB 4: MAP -->
      <div id="map-tab" class="tab-content" style="display:none">
        <div class="map-container">
          <div class="map-markers">
            <div class="map-marker" style="top:30%;left:25%"><div style="background:var(--accent);color:#fff;border-radius:100px;padding:6px 12px;font-size:0.75rem;font-weight:600">🏛️ Tanah Lot</div></div>
            <div class="map-marker" style="top:50%;left:45%"><div style="background:#2563eb;color:#fff;border-radius:100px;padding:6px 12px;font-size:0.75rem;font-weight:600">🏨 Your Hotel</div></div>
            <div class="map-marker" style="top:65%;left:60%"><div style="background:#16a34a;color:#fff;border-radius:100px;padding:6px 12px;font-size:0.75rem;font-weight:600">🍜 Warung Biah</div></div>
            <div class="map-marker" style="top:20%;left:65%"><div style="background:#9333ea;color:#fff;border-radius:100px;padding:6px 12px;font-size:0.75rem;font-weight:600">🌊 Uluwatu</div></div>
            <div class="map-marker" style="top:45%;left:20%"><div style="background:#f59e0b;color:#fff;border-radius:100px;padding:6px 12px;font-size:0.75rem;font-weight:600">🌿 Tegallalang</div></div>
          </div>
          <div class="map-placeholder" style="z-index:2">
            <div style="font-size:3rem;margin-bottom:0.5rem">🗺️</div>
            <h3>Interactive Bali Map</h3>
            <p style="font-size:0.82rem">Google Maps integration shows hotels, attractions & restaurants<br>with route planning and travel distances</p>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:1rem;margin-top:1.5rem">
          ${[
            { icon: "🏛️", label: "Tourist Places", sub: "24 attractions nearby" },
            { icon: "🏨", label: "Hotels",          sub: "48 options shown" },
            { icon: "🍽️", label: "Restaurants",     sub: "136 dining spots" },
            { icon: "🗺️", label: "Route Planning",  sub: "Optimized day routes" },
          ].map((item) => `
            <div style="background:var(--surface);border-radius:var(--radius2);border:0.5px solid var(--border);padding:1rem;text-align:center">
              <div style="font-size:1.25rem;margin-bottom:0.5rem">${item.icon}</div>
              <div style="font-weight:600;font-size:0.875rem">${item.label}</div>
              <div style="font-size:0.75rem;color:var(--text2);margin-top:4px">${item.sub}</div>
            </div>`).join("")}
        </div>
      </div>
    </div>`;
}

/**
 * Injects the Explore page HTML into #page-explore.
 */
function renderExplorePage() {
  const page = document.getElementById("page-explore");
  page.innerHTML = `
    <div class="section">
      <div class="section-header">
        <div class="section-tag">🌍 Explore</div>
        <h2>Discover Your Next Adventure</h2>
      </div>
      <div class="filter-bar">
        <button class="filter-btn active" onclick="filterDest(this,'all')">All</button>
        <button class="filter-btn" onclick="filterDest(this,'beach')">Beach</button>
        <button class="filter-btn" onclick="filterDest(this,'adventure')">Adventure</button>
        <button class="filter-btn" onclick="filterDest(this,'culture')">Culture</button>
        <button class="filter-btn" onclick="filterDest(this,'nature')">Nature</button>
        <button class="filter-btn" onclick="filterDest(this,'food')">Food & Dining</button>
      </div>
      <div class="card-grid" id="explore-grid"></div>
    </div>`;
}

/**
 * Injects the Hotels page HTML into #page-hotels.
 */
function renderHotelsPage() {
  const page = document.getElementById("page-hotels");
  page.innerHTML = `
    <div class="section">
      <div class="section-header">
        <div class="section-tag">🏨 Hotels</div>
        <h2>Find Your Perfect Stay</h2>
      </div>
      <div class="filter-bar">
        <button class="filter-btn active" onclick="filterHotel(this,'all')">All</button>
        <button class="filter-btn" onclick="filterHotel(this,'luxury')">Luxury</button>
        <button class="filter-btn" onclick="filterHotel(this,'boutique')">Boutique</button>
        <button class="filter-btn" onclick="filterHotel(this,'budget')">Budget</button>
        <div class="price-filter" style="margin-left:auto">
          <label>Max: ₹<span id="price-out">15000</span>/night</label>
          <input type="range" min="2000" max="30000" value="15000" step="500" oninput="filterByPrice(this)" style="width:120px">
        </div>
      </div>
      <div class="hotel-grid" id="hotel-grid"></div>

      <!-- SENTIMENT SECTION -->
      <div style="margin-top:4rem">
        <div class="section-header" style="text-align:left;margin-bottom:2rem">
          <div class="section-tag">💬 AI Sentiment Analysis</div>
          <h2 style="font-size:1.75rem">What Guests Are Saying</h2>
        </div>
        <div class="sentiment-grid">
          <div class="sentiment-card sentiment-pos"><div class="sentiment-emoji">😊</div><div class="sentiment-pct" style="color:#15803d">72%</div><div class="sentiment-label">Positive Reviews</div></div>
          <div class="sentiment-card sentiment-neu"><div class="sentiment-emoji">😐</div><div class="sentiment-pct" style="color:#374151">19%</div><div class="sentiment-label">Neutral Reviews</div></div>
          <div class="sentiment-card sentiment-neg"><div class="sentiment-emoji">😕</div><div class="sentiment-pct" style="color:#9d174d">9%</div><div class="sentiment-label">Negative Reviews</div></div>
        </div>
        <div class="review-list">
          <div class="review-item"><div class="review-header"><div><div class="star-row">★★★★★</div><div class="review-user">Priya Sharma</div></div><span class="review-score score-pos">Positive 96%</span></div><div class="review-text">"Absolutely breathtaking views from every room. The AI check-in was seamless and the staff was incredibly attentive."</div></div>
          <div class="review-item"><div class="review-header"><div><div class="star-row">★★★☆☆</div><div class="review-user">Arjun Mehta</div></div><span class="review-score score-neu">Neutral 54%</span></div><div class="review-text">"Good location and clean rooms. Service could be improved — waited 45 minutes for room service. The pool area was nice though."</div></div>
          <div class="review-item"><div class="review-header"><div><div class="star-row">★★★★☆</div><div class="review-user">Sarah Johnson</div></div><span class="review-score score-pos">Positive 82%</span></div><div class="review-text">"Loved the rooftop restaurant! The breakfast spread was incredible and the AI-curated local experience guide was a game-changer."</div></div>
        </div>
      </div>
    </div>`;
}

/**
 * Injects the Weather page HTML into #page-weather.
 */
function renderWeatherPage() {
  const page = document.getElementById("page-weather");
  page.innerHTML = `
    <div class="section">
      <div class="section-header">
        <div class="section-tag">🌤️ Weather</div>
        <h2>Live Travel Weather</h2>
      </div>
      <div style="display:flex;gap:12px;margin-bottom:2rem">
        <input class="form-input" type="text" placeholder="Search city..." id="weather-city-input" value="Bali" style="max-width:280px;padding:10px 16px;border:1px solid var(--border2);border-radius:100px;font-family:'DM Sans',sans-serif;font-size:0.9rem;outline:none">
        <button class="btn btn-primary" onclick="updateWeather()">Get Forecast</button>
      </div>
      <div class="weather-grid">
        <div class="weather-main">
          <div class="weather-city">📍 Bali, Indonesia</div>
          <div class="weather-temp" id="w-temp">28°</div>
          <div class="weather-desc" id="w-desc">Partly Cloudy</div>
          <div class="weather-meta">
            <div class="weather-meta-item"><strong id="w-hum">72%</strong>Humidity</div>
            <div class="weather-meta-item"><strong id="w-wind">14 km/h</strong>Wind Speed</div>
            <div class="weather-meta-item"><strong id="w-uv">6</strong>UV Index</div>
            <div class="weather-meta-item"><strong id="w-vis">12 km</strong>Visibility</div>
          </div>
        </div>
        <div class="forecast">
          <div style="font-weight:600;margin-bottom:0.5rem;font-size:1rem">5-Day Forecast</div>
          <div class="forecast-day"><div class="forecast-day-name">Today</div><div class="forecast-icon">⛅</div><div class="forecast-temps"><div class="forecast-high">28°C</div><div class="forecast-low">22°C</div></div></div>
          <div class="forecast-day"><div class="forecast-day-name">Tomorrow</div><div class="forecast-icon">🌧️</div><div class="forecast-temps"><div class="forecast-high">25°C</div><div class="forecast-low">20°C</div></div></div>
          <div class="forecast-day"><div class="forecast-day-name">Wednesday</div><div class="forecast-icon">☀️</div><div class="forecast-temps"><div class="forecast-high">32°C</div><div class="forecast-low">24°C</div></div></div>
          <div class="forecast-day"><div class="forecast-day-name">Thursday</div><div class="forecast-icon">🌤️</div><div class="forecast-temps"><div class="forecast-high">30°C</div><div class="forecast-low">23°C</div></div></div>
          <div class="forecast-day"><div class="forecast-day-name">Friday</div><div class="forecast-icon">☀️</div><div class="forecast-temps"><div class="forecast-high">33°C</div><div class="forecast-low">25°C</div></div></div>
          <div class="weather-tip">
            <div style="font-weight:700;font-size:0.8rem;margin-bottom:4px">🤖 AI Weather Tip</div>
            <div class="weather-tip-text">Rain expected tomorrow — perfect day for spa, cooking classes, or visiting Ubud's covered markets. Plan beach activities for Wednesday & Thursday!</div>
          </div>
        </div>
      </div>
    </div>`;
}

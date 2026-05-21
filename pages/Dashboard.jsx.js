// pages/Dashboard.jsx.js — dashNav(), stat cards, booking table

/**
 * Handles dashboard sidebar navigation state.
 * @param {HTMLElement} el - Clicked nav item
 */
function dashNav(el) {
  document.querySelectorAll(".dash-nav-item").forEach((i) => i.classList.remove("active"));
  el.classList.add("active");
}

/**
 * Injects the Dashboard page HTML into #page-dashboard.
 */
function renderDashboardPage() {
  const page = document.getElementById("page-dashboard");
  page.innerHTML = `
    <div class="dash-layout">
      <div class="dash-sidebar">
        <div style="padding:1rem 1.5rem 1.5rem">
          <div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;font-size:1.5rem;margin-bottom:0.75rem">👤</div>
          <div style="font-weight:600;font-size:0.95rem">Rahul Verma</div>
          <div style="font-size:0.78rem;color:var(--text2)">rahul@email.com</div>
        </div>
        <div class="dash-nav-item active" onclick="dashNav(this)"><span class="dash-nav-icon">📊</span>Overview</div>
        <div class="dash-nav-item" onclick="dashNav(this)"><span class="dash-nav-icon">✈️</span>My Trips</div>
        <div class="dash-nav-item" onclick="dashNav(this)"><span class="dash-nav-icon">🏨</span>Bookings</div>
        <div class="dash-nav-item" onclick="dashNav(this)"><span class="dash-nav-icon">❤️</span>Wishlist</div>
        <div class="dash-nav-item" onclick="dashNav(this)"><span class="dash-nav-icon">🤖</span>AI Picks</div>
        <div class="dash-nav-item" onclick="dashNav(this)"><span class="dash-nav-icon">⚙️</span>Settings</div>
      </div>
      <div class="dash-content">
        <div class="dash-greeting">
          <h2>Good Morning, Rahul ☀️</h2>
          <p>You have 2 upcoming trips and 3 saved destinations</p>
        </div>
        <div class="stat-cards">
          <div class="stat-card"><div class="stat-card-icon">✈️</div><div class="stat-card-num">12</div><div class="stat-card-label">Trips Completed</div></div>
          <div class="stat-card"><div class="stat-card-icon">🌍</div><div class="stat-card-num">8</div><div class="stat-card-label">Countries Visited</div></div>
          <div class="stat-card"><div class="stat-card-icon">❤️</div><div class="stat-card-num">15</div><div class="stat-card-label">Wishlist Items</div></div>
          <div class="stat-card"><div class="stat-card-icon">💰</div><div class="stat-card-num">₹2.4L</div><div class="stat-card-label">Total Spent</div></div>
        </div>
        <div class="trip-table">
          <div class="table-header">
            <h3>Recent Bookings</h3>
            <button class="btn" style="font-size:0.8rem;padding:6px 14px">View All</button>
          </div>
          <table>
            <thead>
              <tr><th>Destination</th><th>Dates</th><th>Hotel</th><th>Amount</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Bali, Indonesia</strong></td><td>Jun 10–15, 2026</td><td>Alaya Ubud</td><td>₹62,400</td><td><span class="status-badge status-confirmed">Confirmed</span></td></tr>
              <tr><td><strong>Goa, India</strong></td><td>Apr 2–6, 2026</td><td>W Goa</td><td>₹34,200</td><td><span class="status-badge status-completed">Completed</span></td></tr>
              <tr><td><strong>Paris, France</strong></td><td>Aug 5–12, 2026</td><td>Hôtel du Louvre</td><td>₹1,24,000</td><td><span class="status-badge status-pending">Pending</span></td></tr>
              <tr><td><strong>Singapore</strong></td><td>Sep 18–22, 2026</td><td>Marina Bay Sands</td><td>₹88,500</td><td><span class="status-badge status-pending">Pending</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>`;
}

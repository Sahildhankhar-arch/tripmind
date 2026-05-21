// pages/AdminPanel.jsx.js — analytics bars, top destinations list

/**
 * Injects the Admin Panel page HTML into #page-admin.
 */
function renderAdminPage() {
  const page = document.getElementById("page-admin");
  page.innerHTML = `
    <div class="admin-layout">
      <div class="admin-sidebar">
        <div style="padding:1rem 1.5rem 1.5rem;border-bottom:1px solid rgba(255,255,255,0.1);margin-bottom:0.5rem">
          <div style="font-family:'DM Serif Display',serif;font-size:1.1rem;color:#fff">✈ TripMind</div>
          <div style="font-size:0.72rem;color:rgba(255,255,255,0.5);margin-top:2px">Admin Panel</div>
        </div>
        <div class="admin-nav-item active">📊 Dashboard</div>
        <div class="admin-nav-item">🏨 Hotels</div>
        <div class="admin-nav-item">📅 Bookings</div>
        <div class="admin-nav-item">👥 Users</div>
        <div class="admin-nav-item">🌍 Destinations</div>
        <div class="admin-nav-item">💬 Reviews</div>
        <div class="admin-nav-item">🤖 AI Models</div>
        <div class="admin-nav-item">⚙️ Settings</div>
      </div>
      <div class="admin-content">
        <div style="margin-bottom:2rem">
          <div style="font-family:'DM Serif Display',serif;font-size:1.75rem">Analytics Dashboard</div>
          <div style="color:var(--text2);font-size:0.9rem">May 2026 — Live Overview</div>
        </div>
        <div class="admin-stat-grid">
          <div class="admin-stat"><div class="admin-stat-val">2,841</div><div class="admin-stat-label">Total Bookings</div><div class="admin-stat-change change-pos">↑ 18% vs last month</div></div>
          <div class="admin-stat"><div class="admin-stat-val">₹48.2L</div><div class="admin-stat-label">Revenue</div><div class="admin-stat-change change-pos">↑ 24% vs last month</div></div>
          <div class="admin-stat"><div class="admin-stat-val">12,450</div><div class="admin-stat-label">Active Users</div><div class="admin-stat-change change-pos">↑ 11% vs last month</div></div>
          <div class="admin-stat"><div class="admin-stat-val">4.8 ★</div><div class="admin-stat-label">Avg. Rating</div><div class="admin-stat-change change-neg">↓ 0.1 vs last month</div></div>
        </div>
        <div class="analytics-grid">
          <div class="analytics-card">
            <h3>Bookings by Destination</h3>
            ${[
              { label: "Bali",      pct: 82 },
              { label: "Paris",     pct: 71 },
              { label: "Singapore", pct: 58 },
              { label: "Maldives",  pct: 44 },
              { label: "Tokyo",     pct: 38 },
              { label: "Dubai",     pct: 29 },
            ].map((item) => `
              <div class="mini-bar">
                <div class="mini-bar-label">${item.label}</div>
                <div class="mini-bar-track"><div class="mini-bar-fill" style="width:${item.pct}%"></div></div>
                <div class="mini-bar-val">${item.pct}%</div>
              </div>`).join("")}
          </div>
          <div class="analytics-card">
            <h3>Top Destinations</h3>
            <div class="top-dest-list">
              ${[
                { rank: 1, name: "Bali, Indonesia", count: "842 bookings", trend: "↑ 24%" },
                { rank: 2, name: "Paris, France",   count: "621 bookings", trend: "↑ 12%" },
                { rank: 3, name: "Maldives",        count: "488 bookings", trend: "↑ 31%" },
                { rank: 4, name: "Singapore",       count: "367 bookings", trend: "↑ 8%"  },
                { rank: 5, name: "Tokyo, Japan",    count: "294 bookings", trend: "↑ 19%" },
              ].map((d) => `
                <div class="top-dest-item">
                  <div class="top-dest-rank">${d.rank}</div>
                  <div class="top-dest-info">
                    <div class="top-dest-name">${d.name}</div>
                    <div class="top-dest-count">${d.count}</div>
                  </div>
                  <div class="top-dest-trend">${d.trend}</div>
                </div>`).join("")}
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

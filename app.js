// app.js — App initialization, boot sequence

/**
 * Overrides showPage to also trigger page renders when switching.
 * Extends the base showPage defined in Navbar.jsx.js.
 */
const originalShowPage = window.showPage;
let hotels = [];
window.showPage = function(id) {
  originalShowPage(id);

  // Render page HTML on first visit
  const renderers = {
    home:      renderHomePage,
    explore:   renderExplorePage,
    hotels:    renderHotelsPage,
    planner:   renderPlannerPage,
    weather:   renderWeatherPage,
    dashboard: renderDashboardPage,
    admin:     renderAdminPage,
  };

  if (renderers[id]) {
    const page = document.getElementById("page-" + id);
    // Only re-render if empty (lazy render pattern)
    if (!page.innerHTML.trim()) renderers[id]();
  }

  // Run post-render hooks
  if (id === "hotels")  renderHotelGrid();
  if (id === "planner") renderTransport();
  if (id === "explore") renderExploreGrid();
}

async function loadHotels() {
  try {
    const response = await fetch("http://localhost:5000/api/hotels");
    hotels = await response.json();

    if (typeof renderHotelGrid === "function") {
      renderHotelGrid();
    }

  } catch (error) {
    console.log(error);
  }
}
/** Boot the application */
function init() {
  renderHomePage();
  renderDashboardPage();
  renderAdminPage();
  renderPlannerPage();
  renderExplorePage();
  renderHotelsPage();
  renderWeatherPage();
  
  loadHotels();
  

  
  // Render home data grids
  const homeGrid  = document.getElementById("home-dest-grid");
  const trendGrid = document.getElementById("trending-grid");
  if (homeGrid)  homeGrid.innerHTML  = destinations.filter((d) => d.ai).slice(0, 4).map((d) => createDestCard(d)).join("");
  if (trendGrid) trendGrid.innerHTML = destinations.slice(0, 4).map((d) => createDestCard(d, false)).join("");

  // Draw donut chart after DOM is ready
  setTimeout(drawDonut, 100);
}

// Start app
window.onload = init;

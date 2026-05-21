// components/Navbar.jsx.js — showPage() nav logic

/**
 * Shows the requested page and hides all others.
 * Triggers data renders as needed for each page.
 * @param {string} id - Page identifier ('home' | 'explore' | 'hotels' | 'planner' | 'weather' | 'dashboard' | 'admin')
 */
function showPage(id) {
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
  document.getElementById("page-" + id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Lazy-render page content
  if (id === "explore")   renderExploreGrid();
  if (id === "hotels")    renderHotelGrid();
  if (id === "planner")   renderTransport();
}

/**
 * Navigates to the Explore page with the destination pre-filled in the planner.
 * Called when a destination card is clicked.
 * @param {string} name - Destination name
 */
function showDestDetail(name) {
  document.getElementById("plan-dest").value = name;
  showPage("planner");
}

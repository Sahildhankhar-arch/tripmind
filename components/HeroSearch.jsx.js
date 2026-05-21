// components/HeroSearch.jsx.js — doSearch()

/**
 * Reads the search destination input and navigates to the Explore page.
 * In production, this would filter results by the searched destination.
 */
function doSearch() {
  const dest = document.getElementById("search-dest").value;
  // TODO: pass `dest` as a filter parameter to renderExploreGrid()
  showPage("explore");
}

// utils/gradColors.js — the gradColor() function

/**
 * Returns a CSS gradient string for a given destination name.
 * Used for card background placeholders.
 * @param {string} name - Destination name
 * @returns {string} - CSS gradient value e.g. "#ffecd2,#fcb69f"
 */
function gradColor(name) {
  const colors = {
    "Bali, Indonesia":   "#ffecd2,#fcb69f",
    "Paris, France":     "#a8edea,#fed6e3",
    "Maldives":          "#a1c4fd,#c2e9fb",
    "Tokyo, Japan":      "#ffeaa7,#dfe6e9",
    "Santorini, Greece": "#fddb92,#d1fdff",
    "Rajasthan, India":  "#f093fb,#f5576c",
    "New Zealand":       "#4facfe,#00f2fe",
    "Singapore":         "#43e97b,#38f9d7",
  };
  return colors[name] || "#667eea,#764ba2";
}

// utils/formatCurrency.js — currency/number formatting helpers

/**
 * Formats a number as Indian Rupee string.
 * e.g. 12400 → "₹12,400"
 * @param {number} amount
 * @returns {string}
 */
function formatINR(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

/**
 * Formats a number in compact Indian notation.
 * e.g. 240000 → "₹2.4L"
 * @param {number} amount
 * @returns {string}
 */
function formatINRCompact(amount) {
  if (amount >= 100000) return "₹" + (amount / 100000).toFixed(1) + "L";
  if (amount >= 1000)   return "₹" + (amount / 1000).toFixed(1) + "K";
  return "₹" + amount;
}

/**
 * Parses a price string like "₹12,400" back to a number.
 * @param {string} str
 * @returns {number}
 */
function parseINR(str) {
  return parseInt(str.replace(/[₹,]/g, ""), 10);
}

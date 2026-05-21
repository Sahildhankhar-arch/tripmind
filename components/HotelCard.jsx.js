// components/HotelCard.jsx.js — renderHotelGrid(), filterHotel(), filterByPrice(), bookNow()

/**
 * Renders all hotel cards into #hotel-grid.
 * @param {string} filter - Hotel type filter ('all' | 'luxury' | 'boutique' | 'budget')
 * @param {number} maxPrice - Maximum price per night in INR
 */
function renderHotelGrid(filter = "all", maxPrice = 15000) {
  const g = document.getElementById("hotel-grid");
  if (!g) return;

  let filtered = hotels;
  if (filter !== "all") filtered = filtered.filter((h) => h.type === filter);
  filtered = filtered.filter((h) => h.price <= maxPrice);

  g.innerHTML = filtered
    .map(
      (h) => `
    <div class="hotel-card">
      <div class="hotel-img-wrap">
        <div class="hotel-img" style="background:linear-gradient(135deg,${gradColor(h.name.split(" ")[0])});font-size:3rem;display:flex;align-items:center;justify-content:center">${h.emoji}</div>
        <div class="hotel-amenities">${h.amenities.map((a) => `<span class="amenity-pill">${a}</span>`).join("")}</div>
        <button class="heart-btn" onclick="event.stopPropagation();this.classList.toggle('liked');this.textContent=this.classList.contains('liked')?'❤️':'🤍'">🤍</button>
      </div>
      <div class="hotel-body">
        <div class="hotel-location">📍 ${h.location}</div>
        <div class="hotel-name">${h.name}</div>
        <div style="display:flex;align-items:center;gap:4px;margin-bottom:0.5rem">
          <span style="color:#f59e0b">★</span>
          <span style="font-weight:600;font-size:0.85rem">${h.rating}</span>
          <span style="color:var(--text3);font-size:0.8rem">(${h.reviews.toLocaleString()} reviews)</span>
        </div>
        <div class="hotel-review">"${h.review}"</div>
        <div class="hotel-footer">
          <div class="hotel-price">₹${h.price.toLocaleString()} <span>/ night</span></div>
          <button class="book-btn" onclick="bookNow('${h.name}')">Book Now</button>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

/**
 * Filters hotels by type category.
 * @param {HTMLElement} btn - The filter button clicked
 * @param {string} type - Hotel type
 */
function filterHotel(btn, type) {
  document.querySelectorAll("#page-hotels .filter-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  const priceOut = document.getElementById("price-out");
  const price = priceOut ? parseInt(priceOut.textContent.replace(/[₹,]/g, "")) : 15000;
  renderHotelGrid(type, price);
}

/**
 * Filters hotels by maximum price using the range slider.
 * @param {HTMLInputElement} input - The range input element
 */
function filterByPrice(input) {
  const formatted = parseInt(input.value).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).replace("₹", "₹");
  document.getElementById("price-out").textContent = formatted;
  renderHotelGrid("all", parseInt(input.value));
}

/**
 * Simulates a hotel booking confirmation.
 * @param {string} name - Hotel name
 */
function bookNow(name) {
  alert(
    `Booking confirmed for ${name}!\nYour reservation has been added to your dashboard. A confirmation email has been sent to rahul@email.com`
  );
}

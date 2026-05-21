// components/WeatherWidget.jsx.js — updateWeather(), city lookup map

/** City weather data map — replace with live OpenWeatherMap API calls in production */
const cityWeatherData = {
  Bali:      { temp: "28°", desc: "Partly Cloudy",   hum: "72%", wind: "14 km/h", uv: "6",  vis: "12 km" },
  Paris:     { temp: "19°", desc: "Sunny",            hum: "48%", wind: "22 km/h", uv: "4",  vis: "18 km" },
  Tokyo:     { temp: "22°", desc: "Clear Sky",        hum: "55%", wind: "18 km/h", uv: "7",  vis: "20 km" },
  Singapore: { temp: "31°", desc: "Humid & Warm",     hum: "85%", wind: "8 km/h",  uv: "9",  vis: "10 km" },
  Maldives:  { temp: "30°", desc: "Bright Sunshine",  hum: "70%", wind: "12 km/h", uv: "11", vis: "24 km" },
};

/**
 * Updates the weather widget UI based on the city input field.
 * Falls back to Bali if city isn't found in the lookup map.
 */
function updateWeather() {
  const city = document.getElementById("weather-city-input").value.trim();
  const key  = Object.keys(cityWeatherData).find((k) =>
    city.toLowerCase().includes(k.toLowerCase())
  ) || "Bali";

  const d = cityWeatherData[key];

  document.getElementById("w-temp").textContent = d.temp;
  document.getElementById("w-desc").textContent = d.desc;
  document.getElementById("w-hum").textContent  = d.hum;
  document.getElementById("w-wind").textContent = d.wind;
  document.getElementById("w-uv").textContent   = d.uv;
  document.getElementById("w-vis").textContent  = d.vis;
}

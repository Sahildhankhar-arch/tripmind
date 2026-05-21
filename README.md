# ✈️ TripMind AI — Smart Travel Planner

A fully-featured AI travel planning web application with destinations, hotels, weather, AI itinerary generation, budget prediction, chatbot, and admin analytics.

## 📁 Project Structure

```
tripmind/
├── index.html                  # Main entry point
├── app.js                      # App initialization & boot
│
├── css/
│   ├── index.css               # CSS variables (:root), reset, body, layout
│   ├── Navbar.module.css       # nav, .logo, .nav-links
│   ├── Hero.module.css         # .hero, .search-box, .hero-stats
│   ├── Cards.module.css        # .dest-card, .hotel-card, .transport-card, .budget-card
│   ├── Planner.module.css      # .planner-layout, .itinerary-result, .day-block, .activity
│   ├── Weather.module.css      # .weather-grid, .weather-main, .forecast, .weather-tip
│   ├── Dashboard.module.css    # .dash-layout, .dash-sidebar, .stat-cards, .trip-table
│   ├── Admin.module.css        # .admin-layout, .admin-sidebar, .analytics-grid
│   ├── Chatbot.module.css      # .chatbot-fab, .chatbot-window, .chat-msg, .typing-dot
│   ├── Sentiment.module.css    # .sentiment-card, .review-item, .review-score
│   └── animations.css          # @keyframes fadeUp, typing, pulse
│
├── data/
│   ├── destinations.js         # destinations[] array
│   ├── hotels.js               # hotels[] array
│   ├── itineraries.js          # itineraryData{} object
│   └── transport.js            # transportData[] array
│
├── utils/
│   ├── gradColors.js           # gradColor() function
│   └── formatCurrency.js       # formatINR(), formatINRCompact(), parseINR()
│
├── components/
│   ├── Navbar.jsx.js           # showPage(), showDestDetail()
│   ├── HeroSearch.jsx.js       # doSearch()
│   ├── DestinationCard.jsx.js  # createDestCard(), filterDest()
│   ├── HotelCard.jsx.js        # renderHotelGrid(), filterHotel(), filterByPrice(), bookNow()
│   ├── ItineraryTimeline.jsx.js # generateItinerary() with loading state
│   ├── BudgetChart.jsx.js      # drawDonut(), canvas logic
│   ├── TransportCard.jsx.js    # renderTransport()
│   ├── ChatbotFAB.jsx.js       # toggleChat(), sendChat(), addChatMsg(), quickChat()
│   └── WeatherWidget.jsx.js    # updateWeather(), city lookup map
│
└── pages/
    ├── Home.jsx.js             # renderHomePage(), feature cards section
    ├── Planner.jsx.js          # renderPlannerPage(), switchTab(), renderExploreGrid()
    ├── Dashboard.jsx.js        # renderDashboardPage(), dashNav()
    └── AdminPanel.jsx.js       # renderAdminPage(), analytics bars, top destinations list
```

## 🚀 Getting Started

### Run Locally
Just open `index.html` in your browser — no build tools required!

```bash
# Option 1: Direct open
open index.html

# Option 2: Simple HTTP server (recommended)
npx serve .
# or
python3 -m http.server 3000
```

## 🔑 Environment Variables (for production upgrade)

### frontend/.env
```
VITE_OPENAI_API_KEY=
VITE_OPENWEATHER_API_KEY=
VITE_GOOGLE_MAPS_API_KEY=
VITE_API_BASE_URL=http://localhost:5000
```

### backend/.env
```
MONGODB_URI=
JWT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
OPENAI_API_KEY=
OPENWEATHER_API_KEY=
ML_SERVICE_URL=http://localhost:8000
```

## 🧩 Features

| Feature              | Status |
|----------------------|--------|
| Home + Hero Search   | ✅     |
| Destination Explorer | ✅     |
| Hotel Listings       | ✅     |
| AI Itinerary Planner | ✅     |
| Budget Predictor     | ✅     |
| Transport Options    | ✅     |
| Interactive Map      | 🔧 Needs Google Maps API |
| Weather Widget       | ✅ (static data; upgrade with OpenWeatherMap) |
| Chatbot              | ✅ (static replies; upgrade with OpenAI API) |
| Sentiment Analysis   | ✅     |
| User Dashboard       | ✅     |
| Admin Analytics      | ✅     |

## 🛠️ Tech Stack

- **Vanilla HTML/CSS/JS** — zero dependencies, zero build step
- Ready to migrate to **React + Vite** by converting `.jsx.js` files
- CSS organized as **CSS Modules** (ready for PostCSS/Vite)
- Data layer designed for easy swap to **REST API / GraphQL**

## 📦 Deploying to GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit — TripMind AI"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/tripmind-ai.git
git push -u origin main
```

Then enable GitHub Pages from the repo Settings → Pages → Deploy from branch `main`.

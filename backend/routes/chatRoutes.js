const express = require("express");

const router = express.Router();

const Hotel = require("../models/Hotel");

router.post("/", async (req, res) => {

  const message =
    req.body.message.toLowerCase();

  let reply = "";

  // BALI
  if (message.includes("bali")) {

    const hotels =
      await Hotel.find({
        location: { $regex: "Bali", $options: "i" }
      });

    const randomHotel =
      hotels[Math.floor(Math.random() * hotels.length)];

    reply =
      `TripMind AI recommends Bali for beaches and nightlife.
       Suggested hotel: ${randomHotel.name}
       Price: ₹${randomHotel.price}
       Rating: ${randomHotel.rating}`;

  }

  // PARIS
  else if (message.includes("paris")) {

    reply =
      "Paris is ideal for luxury travel, cafes and romantic experiences. Recommended stay: 4-5 days.";

  }

  // JAPAN
  else if (message.includes("japan")) {

    reply =
      "Japan is best during cherry blossom season. Budget trips usually start around ₹1.2 lakh.";

  }

  // BUDGET
  else if (message.includes("budget")) {

    const budget =
      Math.floor(Math.random() * 50000) + 50000;

    reply =
      `Estimated travel budget: ₹${budget} including hotels and local transport.`;

  }

  // HOTEL
  else if (message.includes("hotel")) {

    const hotels = await Hotel.find();

    const randomHotel =
      hotels[Math.floor(Math.random() * hotels.length)];

    reply =
      `Recommended hotel:
       ${randomHotel.name}
       Location: ${randomHotel.location}
       Price: ₹${randomHotel.price}`;

  }

  // STAY
  else if (message.includes("stay")) {

    const stayOptions = [
      "luxury resorts",
      "budget hostels",
      "boutique hotels",
      "beach villas",
      "mountain cottages"
    ];

    const randomStay =
      stayOptions[
        Math.floor(Math.random() * stayOptions.length)
      ];

    reply =
      `TripMind AI recommends ${randomStay} based on your travel style.`;

  }

  // DEFAULT
  else {

    const replies = [

      "Tell me your destination for personalized travel recommendations.",

      "TripMind AI can help with hotels, budgets and itineraries.",

      "Which country are you planning to visit?",

      "I can recommend hotels and travel plans for your next trip.",

      "Share your budget and destination for smarter planning."

    ];

    reply =
      replies[
        Math.floor(Math.random() * replies.length)
      ];
  }

  res.json({
    reply
  });

});

module.exports = router;
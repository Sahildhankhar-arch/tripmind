const express = require("express");
const router = express.Router();
const Hotel = require("../models/Hotel");

// GET all hotels
router.get("/", async (req, res) => {
  const hotels = await Hotel.find();
  res.json(hotels);
});

// ADD hotel
router.post("/", async (req, res) => {
  const hotel = new Hotel(req.body);
  await hotel.save();
  res.json(hotel);
});

module.exports = router;
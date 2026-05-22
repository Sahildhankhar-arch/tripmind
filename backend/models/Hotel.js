const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  location: {
    type: String,
    required: true
  },

  emoji: {
    type: String
  },

  rating: {
    type: Number
  },

  reviews: {
    type: Number
  },

  price: {
    type: Number,
    required: true
  },

  type: {
    type: String
  },

  amenities: {
    type: [String]
  },

  review: {
    type: String
  },

  rooms: {
    type: Number
  },

  cuisine: {
    type: String
  },

  image: {
    type: String
  }

}, {
  timestamps: true
});

module.exports = mongoose.model("Hotel", hotelSchema);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
console.log(process.env.MONGO_URI);

const hotelRoutes = require("./routes/hotelRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/hotels", hotelRoutes);

app.get("/", (req, res) => {
  res.send("TripMind Backend Running");
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log(err);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
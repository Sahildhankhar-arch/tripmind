const express = require("express");
const router = express.Router();
const axios = require("axios");
router.get("/", (req, res) => {
  res.send("Chat API Working");
});


router.post("/", async (req, res) => {

  try {

    const userMessage = req.body.message;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: `You are TripMind AI, a smart travel planner assistant. Help users with hotels, itineraries, travel budget, destinations and travel recommendations.\nUser: ${userMessage}`
              }
            ]
          }
        ]
      }
    );

    const aiReply =
      response.data.candidates[0].content.parts[0].text;

    res.json({
      reply: aiReply
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      reply: "AI service error"
    });
  }
});

module.exports = router;
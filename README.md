# TripMind AI 🌍✈️

AI-powered full stack travel planner web application.

---

# Features

- AI Travel Recommendation
- NLP-based Smart Chatbot
- Hotel Search & Recommendations
- Budget Prediction System
- Weather Information
- Dashboard & Analytics
- Smart Accommodation Suggestions
- MongoDB Integration
- REST APIs
- Responsive UI

---

# Tech Stack

## Frontend
- HTML5
- CSS3
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose

## Deployment
- Vercel (Frontend)
- Railway (Backend)

## AI/NLP
- Gemini API
- NLP-based chatbot
- Recommendation System

---

# Project Structure

tripmind/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── components/
├── css/
├── data/
├── pages/
├── utils/
├── index.html
├── app.js
└── README.md

---

# Backend APIs

## Hotels API

GET /api/hotels

Returns hotel data from MongoDB.

---

## Chatbot API

POST /api/chat

Request:

{
  "message": "Plan a Bali trip"
}

Response:

{
  "reply": "AI generated response"
}

---

# NLP Chatbot Working

Frontend Chatbot
        ↓
Backend API
        ↓
Gemini API
        ↓
AI Response

The chatbot uses NLP and LLM-based conversational AI for:
- itinerary generation
- destination recommendations
- travel guidance
- budget planning

---

# Database Usage

MongoDB stores:
- hotel data
- bookings
- user data
- reviews
- wishlist
- chatbot history

---

# Deployment Links

## Frontend
Vercel Deployment

## Backend
Railway Deployment

---

# Commands Used

## Install Backend Packages

npm install

---

## Start Backend

node server.js

OR

npx nodemon server.js

---

# Environment Variables

backend/.env

PORT=5000
MONGO_URI=your_mongodb_uri
GEMINI_API_KEY=your_gemini_api_key

---

# Future Scope

- Google Maps API
- Razorpay Payment Integration
- Voice Assistant
- Real-time Hotel Availability
- Flight Booking
- AI Route Optimization
- Dynamic Pricing Prediction

---

# Viva Overview

TripMind AI is a full-stack AI-powered travel planning platform that combines recommendation systems, NLP-based chatbot assistance, sentiment analysis, predictive budget estimation, and real-time travel APIs to provide personalized travel experiences.
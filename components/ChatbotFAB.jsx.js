// components/ChatbotFAB.jsx.js — toggleChat(), sendChat(), addChatMsg(), quickChat()

let chatOpen = false;

const botReplies = [
  "Great choice! Bali is magical in June–September. I'd recommend staying in Ubud for the first 2 days and Seminyak for the rest. Want me to generate a full itinerary?",
  "For Paris hotels on a mid-range budget, I love Le Marais area — walkable to Notre Dame, the Louvre and Pompidou. Options start around ₹8,000/night. Shall I filter by your dates?",
  "Japan visa for Indian citizens is now on-arrival for 30 days! You'll need a valid passport, return ticket, and proof of accommodation. Want the full checklist?",
  "I can help with that! Based on your travel history, you'd love Ubud's spiritual culture and Seminyak's vibrant beach clubs. The best time to visit is May–September.",
  "For a solo trip on ₹50,000 for 7 days, I'd suggest Southeast Asia — Bali, Thailand, or Vietnam. All offer incredible experiences on that budget. Which do you prefer?",
];

let replyIdx = 0;

/**
 * Toggles the chatbot window open/closed.
 */
function toggleChat() {
  chatOpen = !chatOpen;
  const w = document.getElementById("chat-window");
  const f = document.getElementById("chat-fab");
  w.classList.toggle("open", chatOpen);
  f.textContent = chatOpen ? "✕" : "🤖";
}

/**
 * Sends the user's chat message and simulates a bot reply.
 */
function sendChat() {
  const inp = document.getElementById("chat-in");
  const msg = inp.value.trim();
  if (!msg) return;

  addChatMsg(msg, "user");
  inp.value = "";

  const msgs   = document.getElementById("chat-msgs");
  const typing = document.createElement("div");
  typing.className = "chat-typing";
  typing.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
  msgs.appendChild(typing);
  msgs.scrollTop = msgs.scrollHeight;

  setTimeout(() => {
    typing.remove();
    addChatMsg(botReplies[replyIdx % botReplies.length], "bot");
    replyIdx++;
  }, 1400);
}

/**
 * Pre-fills the chat input and sends a quick suggestion message.
 * @param {string} msg - Pre-written message
 */
function quickChat(msg) {
  document.getElementById("chat-in").value = msg;
  sendChat();
}

/**
 * Appends a chat message bubble to the messages container.
 * @param {string} text - Message text
 * @param {'user'|'bot'} who - Sender role
 */
function addChatMsg(text, who) {
  const msgs = document.getElementById("chat-msgs");
  const div  = document.createElement("div");
  div.className = `chat-msg ${who}`;
  div.textContent = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

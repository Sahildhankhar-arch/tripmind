// components/ChatbotFAB.jsx.js — toggleChat(), sendChat(), addChatMsg(), quickChat()

let chatOpen = false;

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
async function sendChat() {

  const inp = document.getElementById("chat-in");

  const msg = inp.value.trim();

  if (!msg) return;

  addChatMsg(msg, "user");

  inp.value = "";

  const msgs = document.getElementById("chat-msgs");

  const typing = document.createElement("div");

  typing.className = "chat-typing";

  typing.innerHTML =
    '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';

  msgs.appendChild(typing);

  msgs.scrollTop = msgs.scrollHeight;

  try {

    const response = await fetch(
      "http://localhost:5000/api/chat",
      {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          message: msg
        })

      }
    );

    const data = await response.json();

    typing.remove();

    addChatMsg(data.reply, "bot");

  } catch (error) {

    typing.remove();

    addChatMsg("AI service unavailable.", "bot");

    console.log(error);
  }
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

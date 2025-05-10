// chatbot.js
document.addEventListener("DOMContentLoaded", function () {
  const chatbotBubble = document.getElementById("chatbot-bubble");
  const chatWindow = document.getElementById("chat-window");
  const closeChatButton = document.getElementById("close-chat");
  const userMessageInput = document.getElementById("user-message");

  // Toggle chat window visibility when the bubble is clicked
  chatbotBubble.addEventListener("click", function () {
    chatWindow.style.display = chatWindow.style.display === "none" ? "flex" : "none";
  });

  // Close the chat window
  closeChatButton.addEventListener("click", function () {
    chatWindow.style.display = "none";
  });

  // Handle sending a message (optional)
  userMessageInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const message = userMessageInput.value.trim();
      if (message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.textContent = message;
        chatWindow.querySelector(".messages").appendChild(messageElement);
        userMessageInput.value = ""; // Clear input
        chatWindow.querySelector(".messages").scrollTop = chatWindow.querySelector(".messages").scrollHeight;
      }
    }
  });
});

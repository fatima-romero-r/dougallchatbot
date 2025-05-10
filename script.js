// chatbot.js

// Function to initialize and manage the chatbot's behavior
function initChatbot() {
  const chatContainer = document.getElementById("chat-container");
  
  // Initialize chat window
  const chatWindow = document.createElement("div");
  chatWindow.classList.add("chat-window");
  chatContainer.appendChild(chatWindow);

  // Chatbot's initial message in a bubble
  const botMessage = document.createElement("div");
  botMessage.classList.add("chat-message", "bot-message", "bubble");
  botMessage.textContent = "Hello! How can I help you today?";
  chatWindow.appendChild(botMessage);

  // User input handling
  const userInput = document.createElement("input");
  userInput.type = "text";
  userInput.placeholder = "Type your message...";
  chatWindow.appendChild(userInput);

  // Send button
  const sendButton = document.createElement("button");
  sendButton.textContent = "Send";
  sendButton.addEventListener("click", () => sendMessage(userInput, chatWindow));
  chatWindow.appendChild(sendButton);

  // Handle user message
  userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      sendMessage(userInput, chatWindow);
    }
  });
}

// Function to send a message from the user
function sendMessage(userInput, chatWindow) {
  const userMessage = userInput.value.trim();
  
  if (userMessage) {
    // Create user message bubble
    const userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("chat-message", "user-message", "bubble");
    userMessageDiv.textContent = userMessage;
    chatWindow.appendChild(userMessageDiv);

    // Simulate bot response in a bubble
    setTimeout

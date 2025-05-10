// Handle sending a message to the chatbot
document.getElementById('send-button').addEventListener('click', function() {
  const userInput = document.getElementById('user-input').value;
  if (userInput.trim() === "") return;

  // Display user's message in chatlog
  const chatlog = document.getElementById('chatlog');
  chatlog.innerHTML += `<div><b>You:</b> ${userInput}</div>`;

  // Clear the input field
  document.getElementById('user-input').value = '';

  // Simulate chatbot response (replace this with real API call)
  setTimeout(() => {
    const chatbotResponse = "Dougall Bot: I'm here to help!";
    chatlog.innerHTML += `<div><b>Dougall Bot:</b> ${chatbotResponse}</div>`;
    chatlog.scrollTop = chatlog.scrollHeight; // Scroll to bottom
  }, 1000); // Delay to simulate typing
});

// Toggle the chat window visibility
document.getElementById('chatbot-bubble').addEventListener('click', () => {
  const chatWindow = document.getElementById('chat-window');
  chatWindow.classList.toggle('hidden');
});

// Handle message input and submission on "Enter" key press
document.getElementById('chat-input').addEventListener('keydown', async (e) => {
  if (e.key === 'Enter') {
    const input = e.target.value;

    // Prevent sending if input is empty
    if (!input.trim()) return;

    appendMessage('You', input);
    e.target.value = ''; // Clear input after sending

    appendMessage('Bot', 'Thinking...');

    try {
      const response = await fetch('https://limatlas.com/gpt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }) // Send input message to AI engine
      });

      const data = await response.json();
      updateLastBotMessage(data.reply || 'Sorry, no reply.');
    } catch (err) {
      updateLastBotMessage('Error: Failed to fetch.');
    }
  }
});

// Append a new message to the chat window
function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  document.getElementById('chat-messages').appendChild(msg);
  msg.scrollIntoView();
}

// Update the last bot message with the response
function updateLastBotMessage(text) {
  const messages = document.querySelectorAll('#chat-messages div');
  if (messages.length) {
    messages[messages.length - 1].innerHTML = `<strong>Bot:</strong> ${text}`;
  }
}

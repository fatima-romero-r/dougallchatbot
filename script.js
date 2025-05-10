
document.getElementById('chatbot-bubble').addEventListener('click', () => {
  const chatWindow = document.getElementById('chat-window');
  chatWindow.classList.toggle('hidden');
});

document.getElementById('chat-input').addEventListener('keypress', async (e) => {
  if (e.key === 'Enter') {
    const input = e.target.value;
    if (!input.trim()) return;
    appendMessage('You', input);
    e.target.value = '';

    appendMessage('Bot', 'Thinking...');

    try {
      const response = await fetch('https://dougallgpt.com/new-chat-endpoint', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: input })
});
      
      const data = await response.json();
      updateLastBotMessage(data.reply || 'Sorry, I have no reply.');
    } catch (err) {
      updateLastBotMessage('Error: Failed to fetch.');
    }
  }
});

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  document.getElementById('chat-messages').appendChild(msg);
  msg.scrollIntoView();
}

function updateLastBotMessage(text) {
  const messages = document.querySelectorAll('#chat-messages div');
  if (messages.length) {
    messages[messages.length - 1].innerHTML = `<strong>Bot:</strong> ${text}`;
  }
}

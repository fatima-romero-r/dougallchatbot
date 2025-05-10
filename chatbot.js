// Function to open the chatbot popup
function openChat() {
    document.getElementById("chatbotPopup").style.display = "block"; // Show the popup
    document.getElementById("chatbotBubble").style.display = "none"; // Hide the bubble
}

// Function to close the chatbot popup
function closeChat() {
    document.getElementById("chatbotPopup").style.display = "none"; // Hide the popup
    document.getElementById("chatbotBubble").style.display = "block"; // Show the bubble again
}

// Make the chatbot bubble follow you around
window.onscroll = function() {
    var bubble = document.getElementById("chatbotBubble");
    var scrollPosition = window.scrollY;
    bubble.style.bottom = 20 + scrollPosition + "px"; // Follow the user as they scroll
};

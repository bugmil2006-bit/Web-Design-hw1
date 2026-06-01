const questionBank = [
    {
        keywords: ["quick sort", "quicksort", "fastest"],
        answer: "Based on my tracking data, Quick Sort executed in 12.4ms for 100,000 integers with an average time complexity of O(n log n)."
    },
    {
        keywords: ["dirt park", "location", "park"],
        answer: "The dirt park is currently in the zoning and excavation phase in my hometown. The target launch is late 2026."
    },
    {
        keywords: ["slowest", "bubble sort", "bubble"],
        answer: "Bubble sort was the slowest algorithm tested, taking 7890.5ms due to its O(n²) time complexity."
    },
    {
        keywords: ["hello", "hi", "hey"],
        answer: "Hi there! I'm Milan's virtual assistant. How can I help you today?"
    }
];

const chatForm = document.getElementById('chat-form');
const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');

chatForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userText = userInput.value.trim().toLowerCase();
    if (!userText) return;

    appendMessage(userInput.value, 'user-message');
    userInput.value = ''; 

    let botResponse = "I'm not quite sure about that. Try asking about 'Quick Sort' or the 'Dirt Park'.";
    
    for (const item of questionBank) {

        if (item.keywords.some(keyword => userText.includes(keyword))) {
            botResponse = item.answer;
            break; 
        }
    }

    setTimeout(() => {
        appendMessage(botResponse, 'bot-message');
    }, 400);
});

function appendMessage(text, className) {
  
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
    messageDiv.textContent = text;
    
    chatWindow.appendChild(messageDiv);
    
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.querySelector('.chat-input input');
const sendButton = document.querySelector('.chat-input button');
const fileInput = document.querySelector('#file-upload');

// Function to send a chat message
function sendMessage(message, isImage = false) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');

  if (isImage) {
    const img = document.createElement('img');
    img.src = message;
    messageDiv.appendChild(img);
  } else {
    const text = document.createElement('p');
    text.textContent = message;
    messageDiv.appendChild(text);
  }

  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  chatInput.value = '';
}

// Event listener for send button
sendButton.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (message !== '') {
    sendMessage(message);
  }
});

// Event listener for file input
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      sendMessage(reader.result, true);
    };
    reader.readAsDataURL(file);
  }
});
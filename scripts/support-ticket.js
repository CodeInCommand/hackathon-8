document.addEventListener('DOMContentLoaded', function() {
    const ticketForm = document.getElementById('ticketForm');
  
    ticketForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (name === '' || email === '' || subject === '' || message === '') {
        alert('Please fill in all fields');
        return;
      }
  
      const ticket = {
        name: name,
        email: email,
        subject: subject,
        message: message
      };
  
      console.log('Ticket Submitted:', ticket);
  
      ticketForm.reset();
      alert('Ticket submitted successfully!');
    });
  });
  
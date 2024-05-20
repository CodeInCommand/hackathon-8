document.addEventListener('DOMContentLoaded', function() {
    const donationForm = document.getElementById('donationForm');
  
    donationForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const amount = document.getElementById('amount').value;
  
      // For demonstration, we'll log the donation information
      console.log(`Donation made by ${name} for $${amount}`);
      // You can add further logic here, such as sending donation data to a server, etc.
      
      // Clear form fields after submission
      donationForm.reset();
    });
  });
  
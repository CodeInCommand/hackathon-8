document.addEventListener('DOMContentLoaded', function() {
    const customerList = document.getElementById('customerList');
    const customerTable = document.getElementById('customerTable');
    const customerForm = document.getElementById('customerForm');
    const customerNameInput = document.getElementById('customerName');
    const donationAmountInput = document.getElementById('donationAmount');
  
    // Function to add a new customer row
    function addCustomerRow(name, donation) {
      const row = customerList.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
  
      cell1.textContent = name;
      cell2.textContent = donation;
      cell3.innerHTML = '<button class="remove-btn">Remove</button>';
  
      cell3.querySelector('.remove-btn').addEventListener('click', function() {
        row.remove();
      });
    }
  
    // Event listener for form submission
    customerForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const customerName = customerNameInput.value.trim();
      const donationAmount = donationAmountInput.value.trim();
      
      if (customerName !== '' && donationAmount !== '') {
        addCustomerRow(customerName, donationAmount);
        customerNameInput.value = '';
        donationAmountInput.value = '';
      }
    });
  });
  
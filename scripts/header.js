document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');
    
    // Fetch the header HTML file
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        headerContainer.innerHTML = data;
        document.body.prepend(headerContainer);
  
        // Toggle navbar
        const navbarToggle = document.querySelector('.navbar-toggle');
        const navbar = document.querySelector('.navbar');
  
        navbarToggle.addEventListener('click', function() {
          navbar.classList.toggle('show');
        });
      })
      .catch(error => console.error('Error fetching header:', error));
  });
  
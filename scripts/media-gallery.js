document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const galleryItems = document.querySelectorAll('.gallery-item');
  
    // Sort gallery items by date or event (change as needed)
    const sortByDate = () => {
      const sortedItems = Array.from(galleryItems).sort((a, b) => {
        const dateA = new Date(a.dataset.date);
        const dateB = new Date(b.dataset.date);
        return dateA - dateB;
      });
  
      gallery.innerHTML = '';
      sortedItems.forEach(item => {
        gallery.appendChild(item);
      });
    };
  
    // Call the sortByDate function initially (change as needed)
    sortByDate();
  
    // Event listeners for sorting options (change as needed)
    const sortButtons = document.querySelectorAll('.sort-option');
    sortButtons.forEach(button => {
      button.addEventListener('click', function() {
        const sortBy = this.dataset.sortBy;
        if (sortBy === 'date') {
          sortByDate();
        }
        // Add more sorting options as needed
      });
    });
  });
  
document.addEventListener('DOMContentLoaded', function() {
  // Research search functionality
  const searchInput = document.getElementById('research-search');
  
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase();
      const items = document.querySelectorAll('#research-items li');
      
      items.forEach(function(item) {
        const title = item.getAttribute('data-title');
        const content = item.getAttribute('data-content');
        
        if (title.includes(query) || content.includes(query)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }
  
  // Animate circumpunct
  const circumpunct = document.querySelector('.circumpunct');
  
  if (circumpunct) {
    let opacity = 0.7;
    let direction = 1;
    
    setInterval(function() {
      opacity += 0.02 * direction;
      
      if (opacity >= 0.9) {
        direction = -1;
      } else if (opacity <= 0.5) {
        direction = 1;
      }
      
      circumpunct.style.opacity = opacity;
    }, 100);
  }
});

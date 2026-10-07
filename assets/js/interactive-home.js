/**
 * BITCORE Knowledge Base - Homepage Interactions
 * Enhances the homepage with subtle interactive elements
 */

document.addEventListener('DOMContentLoaded', () => {
  // Create subtle background grid pattern
  createToroidalGrid();
  
  // Add hover effects to navigation links
  addNavigationEffects();
});

function createToroidalGrid() {
  const gridContainer = document.createElement('div');
  gridContainer.className = 'toroidal-grid';
  document.body.appendChild(gridContainer);
  
  // Create grid points based on viewport size
  const pointCount = Math.min(window.innerWidth, window.innerHeight) / 15;
  
  for (let i = 0; i < pointCount; i++) {
    const gridPoint = document.createElement('div');
    gridPoint.className = 'grid-point';
    
    // Position randomly but with toroidal pattern influence
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    gridPoint.style.left = `${x}%`;
    gridPoint.style.top = `${y}%`;
    gridPoint.style.opacity = Math.random() * 0.07 + 0.01;
    gridPoint.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
    
    gridContainer.appendChild(gridPoint);
  }
}

function addNavigationEffects() {
  const navLinks = document.querySelectorAll('.sidebar-nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      // Add subtle pulsing effect
      link.classList.add('pulse');
      
      // Create ripple effect
      const ripple = document.createElement('span');
      ripple.className = 'nav-ripple';
      link.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    });
    
    link.addEventListener('mouseleave', () => {
      link.classList.remove('pulse');
    });
  });
}

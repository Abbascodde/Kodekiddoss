// Select the navigation element
const nav = document.querySelector('nav');

// Function to handle scroll events
function handleScroll() {
    if (window.scrollY > 0) {
        nav.classList.add('bg-blue-500', 'shadow-lg'); // Add classes when scrolled
    } else {
        nav.classList.remove('bg-blue-500', 'shadow-lg'); // Remove classes when at the top
    }
}

document.getElementById('toggle-button').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('menu');

    toggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('hidden'); // Toggle the hidden class to show/hide the menu
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.card-container');
    const cards = document.querySelectorAll('.card');
    const prevButton = document.querySelector('.arrow-left');
    const nextButton = document.querySelector('.arrow-right');
  
    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + 32; // Card width + gap (32px)
  
    // Function to move the carousel
    const moveCarousel = (direction) => {
      if (direction === 'next' && currentIndex < cards.length - 1) {
        currentIndex++;
      } else if (direction === 'prev' && currentIndex > 0) {
        currentIndex--;
      }
  
      const offset = -currentIndex * cardWidth;
      carousel.style.transform = `translateX(${offset}px)`;
    };
  
   
  });
 
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    menuToggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle('hidden');
        
        // Optional: Add slide animation classes
        if (isMenuOpen) {
            mobileMenu.classList.add('animate-slideDown');
            mobileMenu.classList.remove('animate-slideUp');
        } else {
            mobileMenu.classList.add('animate-slideUp');
            mobileMenu.classList.remove('animate-slideDown');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target) && isMenuOpen) {
            mobileMenu.classList.add('hidden');
            isMenuOpen = false;
        }
    });
});

// Select the navigation element
const nav = document.querySelector('nav');

// Function to handle scroll events
function handleScroll() {
    if (window.scrollY > 0) {
        nav.classList.add('');
    } else {
        nav.classList.remove('');
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Testimonial Slider functionality
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('testimonialSlider');
    const dots = document.querySelectorAll('.dot-nav');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function updateSlider(index) {
        // Update slider position
        const offset = index * -100;
        slider.style.transform = `translateX(${offset}%)`;
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('bg-[#FB8F28]', i === index);
            dot.classList.toggle('bg-gray-300', i !== index);
        });
        
        currentIndex = index;
    }

    // Add click events to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => updateSlider(index));
    });

    // Add click events to navigation buttons
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            const newIndex = (currentIndex - 1 + dots.length) % dots.length;
            updateSlider(newIndex);
        });

        nextBtn.addEventListener('click', () => {
            const newIndex = (currentIndex + 1) % dots.length;
            updateSlider(newIndex);
        });
    }

    // Auto-slide every 5 seconds
    setInterval(() => {
        const newIndex = (currentIndex + 1) % dots.length;
        updateSlider(newIndex);
    }, 5000);
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
 

  
  // Testimonial Slider functionality
  const slider = document.getElementById('testimonialSlider');
  const dots = document.querySelectorAll('.dot-nav');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;

  function updateSlider(index) {
      // Update slider position
      const offset = index * -100;
      slider.style.transform = `translateX(${offset}%)`;
      
      // Update dots
      dots.forEach((dot, i) => {
          dot.classList.toggle('bg-[#FB8F28]', i === index);
          dot.classList.toggle('bg-gray-300', i !== index);
      });
      
      currentIndex = index;
  }

  // Add click events to dots
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => updateSlider(index));
  });

  // Add click events to navigation buttons
  prevBtn.addEventListener('click', () => {
      const newIndex = (currentIndex - 1 + dots.length) % dots.length;
      updateSlider(newIndex);
  });

  nextBtn.addEventListener('click', () => {
      const newIndex = (currentIndex + 1) % dots.length;
      updateSlider(newIndex);
  });



  function toggleHiddenCourse() {
    const hiddenCourse = document.getElementById('hiddenCourse');
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    
    if (hiddenCourse.classList.contains('hidden')) {
        hiddenCourse.classList.remove('hidden');
        hiddenCourse.classList.add('md:col-span-2', 'animate-fadeIn');
        viewMoreBtn.innerHTML = '<span>Show Less</span><i class="ph ph-arrow-up"></i>';
    } else {
        hiddenCourse.classList.add('hidden');
        hiddenCourse.classList.remove('md:col-span-2', 'animate-fadeIn');
        viewMoreBtn.innerHTML = '<span>View More</span><i class="ph ph-arrow-down"></i>';
    }
}

// Check if the banner has been closed before
function checkBannerStatus() {
    const bannerClosed = localStorage.getItem('bannerClosed');
    const lastClosedTime = localStorage.getItem('bannerClosedTime');
    const currentTime = new Date().getTime();
    
    // Show banner if it hasn't been closed or if 24 hours have passed since last closure
    if (!bannerClosed || (currentTime - lastClosedTime > 24 * 60 * 60 * 1000)) {
        showBanner();
    }
}

// Show the banner
function showBanner() {
    const banner = document.getElementById('bannerPopup');
    banner.classList.remove('translate-y-0');
    banner.classList.add('translate-y-0');
    
    // Add padding to body to prevent content jump
    document.body.style.paddingTop = banner.offsetHeight + 'px';
}

// Close the banner
function closeBanner() {
    const banner = document.getElementById('bannerPopup');
    banner.classList.remove('translate-y-0');
    banner.classList.add('-translate-y-full');
    
    // Remove padding from body
    document.body.style.paddingTop = '0';
    
    // Store the closure in localStorage
    localStorage.setItem('bannerClosed', 'true');
    localStorage.setItem('bannerClosedTime', new Date().getTime());
    
    // Remove banner from DOM after animation
    setTimeout(() => {
        banner.style.display = 'none';
    }, 300);
}

// Initialize banner on page load
document.addEventListener('DOMContentLoaded', checkBannerStatus);

// Update banner content (can be called with new content)
function updateBannerContent(config) {
    const banner = document.getElementById('bannerPopup');
    if (!banner) return;

    // Example config object:
    // {
    //     icon: 'ph-star',
    //     backgroundColor: '#374140',
    //     textColor: 'white',
    //     message: 'New message here',
    //     ctaText: 'Click Here',
    //     ctaUrl: '/new-url',
    //     desktopOnly: false
    // }

    if (config.icon) {
        banner.querySelector('.ph').className = `ph ${config.icon}`;
    }
    if (config.backgroundColor) {
        banner.querySelector('.bg-[#374140]').style.backgroundColor = config.backgroundColor;
    }
    if (config.textColor) {
        banner.querySelector('.text-white').style.color = config.textColor;
    }
    if (config.message) {
        const messageElement = banner.querySelector('p');
        messageElement.innerHTML = config.message;
    }
    if (config.ctaText && config.ctaUrl) {
        const ctaButton = banner.querySelector('a');
        ctaButton.textContent = config.ctaText;
        ctaButton.href = config.ctaUrl;
    }
    if (config.desktopOnly !== undefined) {
        banner.classList.toggle('hidden-mobile', config.desktopOnly);
    }
}
 
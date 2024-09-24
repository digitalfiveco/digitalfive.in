document.addEventListener("DOMContentLoaded", function() {
  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const hamburgerLinks = document.querySelector('.hamburger__links');

  hamburger.addEventListener('click', function() {
    hamburgerLinks.classList.toggle('open');
  });

  // Fade-in effect on scroll
  const elements = document.querySelectorAll('.fade-in');
  
  const fadeInOnScroll = () => {
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) { // Adjust this value as needed
        element.classList.add('visible');
      }
    });
  };

  // Debounce the scroll event for better performance
  let timeout;
  window.addEventListener('scroll', () => {
    clearTimeout(timeout);
    timeout = setTimeout(fadeInOnScroll, 10); // Adjust debounce time as needed
  });

  window.addEventListener('load', fadeInOnScroll); // Trigger on page load
});

    // Function to update favicon based on the theme
    function updateFavicon(theme) {
        const favicon = document.getElementById('favicon');
        if (theme === 'dark') {
            favicon.href = 'favicon.svg'; // Path to dark mode favicon
        } else {
            favicon.href = 'light-favicon.svg'; // Path to light mode favicon
        }
    }

    // Detect browser theme and apply the correct favicon
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    updateFavicon(prefersDarkScheme.matches ? 'dark' : 'light');

    // Listen for theme changes and update the favicon
    prefersDarkScheme.addEventListener('change', (event) => {
        updateFavicon(event.matches ? 'dark' : 'light');
    });

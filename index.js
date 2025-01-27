// Select all navigation links
const navLinks = document.querySelectorAll('.topnav a');

// Select all sections
const sections = document.querySelectorAll('section');

// Listen for the scroll event
window.addEventListener('scroll', () => {
  let currentSection = '';

  // Loop through each section to check if it's in the viewport
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  // Loop through each nav link and remove the 'active' class
  navLinks.forEach(link => {
    link.classList.remove('active');
    // Add 'active' class to the link corresponding to the current section
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});


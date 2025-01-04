// Toggle navigation menu on small screens
const menuToggle = document.querySelector('.menu-toggle');
const navRight = document.querySelector('#nav-right');

menuToggle.addEventListener('click', () => {
  navRight.classList.toggle('active');
});

// Smooth scroll functionality
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
    navRight.classList.remove('active'); // Close menu on link click (mobile)
  });
});

// Typed.js configuration
new Typed('#element', {
  strings: ['Web Developer', 'Graphic Designer', 'Content Creator', 'Gamer'],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// Highlight active section in the navigation
const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.7,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const link = document.querySelector(`a[href="#${entry.target.id}"]`);
    if (entry.isIntersecting) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

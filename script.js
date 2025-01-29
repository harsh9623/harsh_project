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




const projects = [
  {
    title: "Project 1",
    description: "A web app that helps users manage their tasks efficiently.",
    technologies: "HTML, CSS, JavaScript",
    imgSrc: "project1-thumbnail.jpg",
    liveDemo: "https://yourlivedemo.com",
    github: "https://github.com/yourusername/project1"
  },
  {
    title: "Project 2",
    description: "An interactive weather app fetching real-time data.",
    technologies: "JavaScript, API, CSS",
    imgSrc: "project2-thumbnail.jpg",
    liveDemo: "https://yourlivedemo.com",
    github: "https://github.com/yourusername/project2"
  },
  {
    title: "Project 3",
    description: "An e-commerce website with user authentication.",
    technologies: "HTML, CSS, JavaScript, Node.js",
    imgSrc: "project3-thumbnail.jpg",
    liveDemo: "https://yourlivedemo.com",
    github: "https://github.com/yourusername/project3"
  }
];

// const portfolioContainer = document.querySelector(".portfolio-container");

// projects.forEach(project => {
//   const projectCard = document.createElement("div");
//   projectCard.classList.add("project-card");
//   projectCard.innerHTML = `
//     <img src="${project.imgSrc}" alt="${project.title} Thumbnail">
//     <div class="project-info">
//       <h3>${project.title}</h3>
//       <p>${project.description}</p>
//       <p><strong>Technologies:</strong> ${project.technologies}</p>
//       <div class="project-links">
//         <a href="${project.liveDemo}" target="_blank">Live Demo</a>
//         <a href="${project.github}" target="_blank">GitHub</a>
//       </div>
//     </div>
//   `;
//   portfolioContainer.appendChild(projectCard);
// });


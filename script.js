// Change navbar style on scroll
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('nav-links').classList.toggle('active');
});

// Changing background colors automatically (nude shades)
const colors = ["#f5e6e8", "#f0e5d8", "#d8bfd8", "#c3b091", "#8d7966"];
let currentColor = 0;

setInterval(() => {
  document.body.style.background = colors[currentColor];
  currentColor = (currentColor + 1) % colors.length;
}, 4000);

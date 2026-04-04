// DragoWeb — main.js

// Close mobile menu on link click
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav').classList.remove('open');
  });
});

// Smooth header background on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.borderBottomColor = '#cccccc';
  } else {
    header.style.borderBottomColor = '#e0e0e0';
  }
});

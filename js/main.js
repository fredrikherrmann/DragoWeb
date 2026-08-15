// DragoWeb — main.js

// Close mobile menu on link click
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav').classList.remove('open');
  });
});

// Project card action links (url / download) — intercept click so the card <a> doesn't navigate
document.querySelectorAll('.project-url-action').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    const href = el.dataset.href;
    if (el.dataset.external === 'true') {
      window.open(href, '_blank', 'noopener');
    } else {
      window.location.href = href;
    }
  });
});

// Lightbox for gallery images
(function() {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  const img = document.createElement('img');
  img.className = 'lightbox-img';
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  overlay.addEventListener('click', () => {
    overlay.classList.remove('open');
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') overlay.classList.remove('open');
  });

  document.querySelectorAll('.gallery-img').forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      img.src = el.src;
      overlay.classList.add('open');
    });
  });
})();

// Smooth header background on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.borderBottomColor = '#cccccc';
  } else {
    header.style.borderBottomColor = '#e0e0e0';
  }
});

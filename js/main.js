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
  const allImages = Array.from(document.querySelectorAll('.gallery-img'));
  if (!allImages.length) return;

  let currentIndex = 0;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'lightbox-close';
  closeBtn.innerHTML = '&times;';
  closeBtn.setAttribute('aria-label', 'Stäng');

  const prevBtn = document.createElement('button');
  prevBtn.className = 'lightbox-nav lightbox-prev';
  prevBtn.innerHTML = '&#8592;';
  prevBtn.setAttribute('aria-label', 'Föregående');

  const nextBtn = document.createElement('button');
  nextBtn.className = 'lightbox-nav lightbox-next';
  nextBtn.innerHTML = '&#8594;';
  nextBtn.setAttribute('aria-label', 'Nästa');

  const img = document.createElement('img');
  img.className = 'lightbox-img';

  overlay.appendChild(closeBtn);
  overlay.appendChild(prevBtn);
  overlay.appendChild(img);
  overlay.appendChild(nextBtn);
  document.body.appendChild(overlay);

  function showImage(index) {
    currentIndex = (index + allImages.length) % allImages.length;
    img.src = allImages[currentIndex].src;
  }

  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('open');
  });

  closeBtn.addEventListener('click', e => {
    e.stopPropagation();
    overlay.classList.remove('open');
  });

  prevBtn.addEventListener('click', e => {
    e.stopPropagation();
    showImage(currentIndex - 1);
  });

  nextBtn.addEventListener('click', e => {
    e.stopPropagation();
    showImage(currentIndex + 1);
  });

  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') overlay.classList.remove('open');
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });

  allImages.forEach((el, i) => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      showImage(i);
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

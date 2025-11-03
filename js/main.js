const nav = document.querySelector('.main-nav');
const toggle = document.querySelector('.menu-toggle');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  });
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('is-open'));
  });
}

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const track = document.querySelector('.lab-slider__track');
const prev = document.querySelector('.lab-slider__nav--prev');
const next = document.querySelector('.lab-slider__nav--next');

const scrollByCard = (direction) => {
  if (!track) return;
  const card = track.querySelector('.lab-card');
  const amount = card ? card.offsetWidth + 24 : 300;
  track.scrollBy({
    left: direction * amount,
    behavior: 'smooth',
  });
};

prev?.addEventListener('click', () => scrollByCard(-1));
next?.addEventListener('click', () => scrollByCard(1));

// simple reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll('.tile, .lab-card, .timeline__track li').forEach((el) => {
  observer.observe(el);
});

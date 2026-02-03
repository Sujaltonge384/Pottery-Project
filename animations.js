const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));


const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});


/* HERO SLIDER */
const slides = document.querySelectorAll('.slide');
const headings = document.querySelectorAll('.hero-heading');

let current = 0;

setInterval(() => {
  slides.forEach(slide => slide.classList.remove('active', 'prev'));
  headings.forEach(h => h.classList.remove('active'));

  slides[current].classList.add('prev');

  current = (current + 1) % slides.length;

  slides[current].classList.add('active');
  headings[current].classList.add('active');
}, 3000);

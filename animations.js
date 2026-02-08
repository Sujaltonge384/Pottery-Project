const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));

const header = document.querySelector('.nav');
const logoImg = document.getElementById('logoImg');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.classList.add('scrolled');
    logoImg.src = 'assets/images/logo-black.png';
  } else {
    header.classList.remove('scrolled');
    logoImg.src = 'assets/images/logo.png';
  }
});

// =======================
// PAGE TRANSITION (SAFE)
// =======================

document.addEventListener('DOMContentLoaded', () => {
  const transition = document.getElementById('pageTransition');
  if (!transition) return;

  const title = transition.querySelector('h1');

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#')) return;

      e.preventDefault();

      title.textContent =
        link.dataset.title || link.textContent.trim();

      transition.classList.add('active');

      setTimeout(() => {
        window.location.href = href;
      }, 1000);
    });
  });

  // Page load
  title.textContent = document.title;
  transition.classList.add('active');

  setTimeout(() => {
    title.style.opacity = '0';
    title.style.transform = 'translateY(-20px)';
  }, 700);

  setTimeout(() => {
    transition.classList.remove('active');
  }, 1200);
});


const goldText = document.querySelector('.text-gold');
const blackText = document.querySelector('.text-black');

let isScrolled = false;

window.addEventListener('scroll', () => {
  if (window.scrollY > 80 && !isScrolled) {
    isScrolled = true;

    goldText.classList.remove('active');
    goldText.classList.add('exit');

    blackText.classList.remove('exit');
    blackText.classList.add('active');
  }

  if (window.scrollY <= 80 && isScrolled) {
    isScrolled = false;

    blackText.classList.remove('active');
    blackText.classList.add('exit');

    goldText.classList.remove('exit');
    goldText.classList.add('active');
  }
});


const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// About transtion

const transition = document.getElementById('pageTransition');
const transitionTitle = transition.querySelector('h1');

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    const title = link.dataset.title || link.textContent.trim();

    if (!href || href.startsWith('#')) return;

    e.preventDefault();

    transitionTitle.textContent = title;
    transition.classList.add('active');

    setTimeout(() => {
      window.location.href = href;
    }, 1000);
  });
});

window.addEventListener('load', () => {
  const transition = document.getElementById('pageTransition');
  const title = transition.querySelector('h1');

  // use <title> tag text
  title.textContent = document.title;

  title.style.opacity = '';
  title.style.transform = '';

  transition.classList.add('active');

  setTimeout(() => {
    title.style.opacity = '0';
    title.style.transform = 'translateY(-20px)';
  }, 700);

  setTimeout(() => {
    transition.classList.remove('active');
  }, 1200);
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


/* ================================
   ULAMAN STYLE SLIDER LOGIC
================================ */

const uSlides = document.querySelectorAll('.ulaman-slide');
const uDots = document.querySelectorAll('.ulaman-dot');
const uPrev = document.querySelector('.ulaman-arrow.left');
const uNext = document.querySelector('.ulaman-arrow.right');

let uIndex = 0;

function showUSlide(i) {
  uSlides.forEach(s => s.classList.remove('active'));
  uDots.forEach(d => d.classList.remove('active'));

  uSlides[i].classList.add('active');
  uDots[i].classList.add('active');
}

uNext.addEventListener('click', () => {
  uIndex = (uIndex + 1) % uSlides.length;
  showUSlide(uIndex);
});

uPrev.addEventListener('click', () => {
  uIndex = (uIndex - 1 + uSlides.length) % uSlides.length;
  showUSlide(uIndex);
});

uDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    uIndex = i;
    showUSlide(uIndex);
  });
});


const scrollTexts = document.querySelectorAll('.scroll-text');

const textObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  },
  {
    threshold: 0.6
  }
);

scrollTexts.forEach(text => textObserver.observe(text));


document.querySelectorAll('.letter-reveal').forEach(p => {
  const text = p.innerText;
  p.innerHTML = '';

  text.split('').forEach((char, i) => {
    const span = document.createElement('span');
    span.innerHTML = char === ' ' ? '&nbsp;' : char;
    span.style.transitionDelay = `${i * 0.03}s`;
    p.appendChild(span);
  });
});



const roomSlider = document.querySelector('.room-slider');
const roomPrev = document.getElementById('roomPrev');
const roomNext = document.getElementById('roomNext');

let roomOffset = 0;
const cardWidth = 420;

roomNext.onclick = () => {
  roomOffset -= cardWidth;
  roomSlider.style.transform = `translateX(${roomOffset}px)`;
};

roomPrev.onclick = () => {
  roomOffset += cardWidth;
  if (roomOffset > 0) roomOffset = 0;
  roomSlider.style.transform = `translateX(${roomOffset}px)`;
};



document.querySelectorAll('.inner-slider').forEach(slider => {
  const slides = slider.querySelectorAll('.inner-slide');
  const dots = slider.querySelectorAll('.inner-dots span');
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove('active');
    dots[index].classList.remove('active');

    index = (index + 1) % slides.length;

    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }, 4000);
});

document.querySelectorAll('.inner-slider').forEach(slider => {
  const slides = slider.querySelectorAll('.inner-slide');
  const dots = slider.querySelectorAll('.inner-dots span');
  const prev = slider.querySelector('.inner-arrow.prev');
  const next = slider.querySelector('.inner-arrow.next');

  let index = 0;

  function showSlide(i) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    slides[i].classList.add('active');
    dots[i].classList.add('active');
  }

  next.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  prev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i;
      showSlide(index);
    });
  });
});


/* ============================
   CIRCLE REVEAL ANIMATION
============================ */

const circleSection = document.querySelector('.circle-scroll-section');
const circleMask = document.querySelector('.circle-mask');

if (circleSection && circleMask) {
  window.addEventListener('scroll', () => {
    const rect = circleSection.getBoundingClientRect();
    const vh = window.innerHeight;

    let progress = (vh - rect.top) / (vh * 1.4);
    progress = Math.max(0, Math.min(1, progress));

    const radius = progress * 80;
    circleMask.style.clipPath = `circle(${radius}% at 50% 100%)`;
  });
}

/* ============================
   SPLIT IMAGE + TEXT REVEAL
============================ */
const splitSection = document.querySelector('.split-reveal-section');
const leftImg = document.querySelector('.split-image.left');
const rightImg = document.querySelector('.split-image.right');
const text = document.querySelector('.split-text');

if (splitSection && leftImg && rightImg && text) {
  window.addEventListener('scroll', () => {
    const rect = splitSection.getBoundingClientRect();
    const vh = window.innerHeight;

    // Progress 0 → 1
  let progress = (vh - rect.top) / vh;

progress = Math.max(0, Math.min(1, progress));


    // Move images outward from center
    const move = progress * 110;

    leftImg.style.transform = `translateX(calc(-50% - ${move}%)) rotate(-3deg)`;
    rightImg.style.transform = `translateX(calc(50% + ${move}%)) rotate(3deg)`;

    // Show text only after images separate
    if (progress > 0.45) {
      text.classList.add('show');
    } else {
      text.classList.remove('show');
    }
  });
}


const windowBox = document.getElementById('videoWindow');
const windowVideo = document.getElementById('windowVideo');
const btn = document.getElementById('videoBtn');

if (windowBox && windowVideo && btn) {

  let playing = false;

  windowBox.addEventListener('mousemove', (e) => {
    const rect = windowBox.getBoundingClientRect();
    btn.style.left = `${e.clientX - rect.left}px`;
    btn.style.top = `${e.clientY - rect.top}px`;
  });

  btn.addEventListener('click', () => {
    playing = !playing;

    if (playing) {
      windowBox.classList.add('active');
      windowVideo.play();
      btn.textContent = 'Stop Video';
    } else {
      windowBox.classList.remove('active');
      windowVideo.pause();
      windowVideo.currentTime = 0;
      btn.textContent = 'Play Video';
    }
  });

}




const bgText = document.getElementById('bgText');

if (bgText) {
  let x = 0;
  const speed = 0.25; // luxury slow speed

  function animateBgText() {
    x -= speed;

    // reset when text goes too far
    if (Math.abs(x) > bgText.offsetWidth / 2) {
      x = 0;
    }

    bgText.style.setProperty('--move-x', `${x}px`);
    requestAnimationFrame(animateBgText);
  }

  animateBgText();
}


const section = document.querySelector('.multi-frame-section');
const frameGroup = document.querySelector('.frame-group');

window.addEventListener('scroll', () => {
  const rect = section.getBoundingClientRect();
  const vh = window.innerHeight;

  let progress = (vh - rect.top) / vh;
  progress = Math.max(0, Math.min(1, progress));

  const moveY = progress * 180; // adjust movement amount

  frameGroup.style.transform = `translateY(-${moveY}px)`;
});
;

// 6 photo 

document.querySelectorAll('.exp-slider').forEach(slider => {
  const images = slider.querySelectorAll('img');
  let index = 0;

  setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, 6000);
});






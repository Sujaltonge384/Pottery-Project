const heroTrack = document.querySelector('.hero-left-track');
const heroSlides = document.querySelectorAll('.hero-left-slide');

if (heroTrack && heroSlides.length > 0) {
  let currentIndex = 0;
  const slideHeight = 100 / heroSlides.length;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % heroSlides.length;
    heroTrack.style.transform = `translateY(-${currentIndex * slideHeight}%)`;
  }, 4000);
}


const track = document.getElementById('trendingTrack');
const prevBtn = document.getElementById('trendPrev');
const nextBtn = document.getElementById('trendNext');

if (track && prevBtn && nextBtn) {
  const cards = track.children;
  const visible = 5;
  let index = 0;

  function getCardWidth() {
    return cards[0].getBoundingClientRect().width + 40;
  }

  nextBtn.addEventListener('click', () => {
    if (cards.length <= visible) return;

    index++;
    if (index > cards.length - visible) {
      index = 0;
    }

    track.style.transform = `translateX(-${index * getCardWidth()}px)`;
  });

  prevBtn.addEventListener('click', () => {
    if (cards.length <= visible) return;

    index--;
    if (index < 0) {
      index = cards.length - visible;
    }

    track.style.transform = `translateX(-${index * getCardWidth()}px)`;
  });
}

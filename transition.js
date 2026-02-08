const textEl = document.getElementById('storyText');
const words = textEl.innerText.split(' ');

// Wrap each word in span
textEl.innerHTML = words
  .map(word => `<span>${word}&nbsp;</span>`)
  .join('');

const spans = textEl.querySelectorAll('span');

window.addEventListener('scroll', () => {
  const rect = textEl.getBoundingClientRect();
  const vh = window.innerHeight;

  // Scroll progress (0 → 1)
  let progress = (vh - rect.top) / (vh * 0.8);
  progress = Math.max(0, Math.min(1, progress));

  const wordsToHighlight = Math.floor(progress * spans.length);

  spans.forEach((span, index) => {
    if (index <= wordsToHighlight) {
      span.classList.add('active');
    } else {
      span.classList.remove('active');
    }
  });
});

/*
// =======================
// VIDEO MODAL LOGIC
// =======================

function openVideoModal() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  
  if (modal && video) {
    modal.style.display = 'flex';
    video.play();
  }
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  
  if (modal && video) {
    modal.style.display = 'none';
    video.pause();
    video.currentTime = 0; // Resets the video so it starts fresh next time
  }
}

// Close modal if user clicks on the darkened background
window.addEventListener('click', function(event) {
  const modal = document.getElementById('videoModal');
  if (event.target === modal) {
    closeVideoModal();
  }
});
*/


// =======================
// VIDEO MODAL 1 LOGIC
// =======================
function openVideoModal1() {
  document.getElementById('videoModal1').style.display = 'flex';
  document.getElementById('modalVideo1').play();
}

function closeVideoModal1() {
  const video = document.getElementById('modalVideo1');
  document.getElementById('videoModal1').style.display = 'none';
  video.pause();
  video.currentTime = 0;
}

// =======================
// VIDEO MODAL 2 LOGIC
// =======================
function openVideoModal2() {
  document.getElementById('videoModal2').style.display = 'flex';
  document.getElementById('modalVideo2').play();
}

function closeVideoModal2() {
  const video = document.getElementById('modalVideo2');
  document.getElementById('videoModal2').style.display = 'none';
  video.pause();
  video.currentTime = 0;
}

// Close any modal if clicking outside
window.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal-overlay')) {
    closeVideoModal1();
    closeVideoModal2();
  }
});
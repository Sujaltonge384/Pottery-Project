// Select ALL curve paths (intro + timeline)
const curves = document.querySelectorAll(
  ".timeline-curve path, .intro-curve path"
);

function updateCurves() {
  const vh = window.innerHeight;

  curves.forEach(path => {
    const rect = path.getBoundingClientRect();

    // Scroll progress calculation
    let progress = (vh - rect.top) / (vh + rect.height);

    // Speed up animation so it finishes in time
    progress = Math.max(0, Math.min(1, progress * 1.6));

    // Use real path length (IMPORTANT)
    const length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length * (1 - progress);
  });
}

window.addEventListener("scroll", updateCurves);
window.addEventListener("load", updateCurves);

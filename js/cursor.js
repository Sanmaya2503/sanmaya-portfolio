/* ══════════════════════════════════════════
   CUSTOM CURSOR
   ══════════════════════════════════════════ */

(function () {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');

  if (!dot || !ring) return;

  // Don't run on touch devices
  if (window.matchMedia('(hover: none)').matches) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }

  animateRing();

  // Hover effect on interactive elements
  const interactiveSelectors = 'a, button, .project-card, .tech-cloud .pill, .about-tag, .cert-card';

  document.querySelectorAll(interactiveSelectors).forEach((el) => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
  });
})();

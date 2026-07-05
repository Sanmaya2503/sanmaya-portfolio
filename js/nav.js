/* ══════════════════════════════════════════
   NAVBAR BEHAVIOUR
   ══════════════════════════════════════════ */

(function () {
  const navbar   = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const drawer   = document.getElementById('navDrawer');

  /* ── Scroll state ── */
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  /* ── Mobile drawer ── */
  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });

    // Close drawer when a link is clicked
    drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => drawer.classList.remove('open'));
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && !drawer.contains(e.target)) {
        drawer.classList.remove('open');
      }
    });
  }

  /* ── Active link highlight on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function setActive() {
    let current = '';
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach((link) => {
      link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--cyan)' : '';
    });
  }

  window.addEventListener('scroll', setActive, { passive: true });
})();

/* ══════════════════════════════════════════
   SCROLL-DRIVEN ANIMATIONS
   ══════════════════════════════════════════ */

(function () {

  /* ── Utility ── */
  function isInView(el) {
    return el.getBoundingClientRect().top < window.innerHeight - 60;
  }

  /* ── 1. Reveal on scroll ── */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObserver.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ── 2. Counter animation ── */
  let countersRun = false;

  function runCounters() {
    if (countersRun) return;
    const counters = document.querySelectorAll('.metric-num');
    if (!counters.length) return;
    if (!isInView(counters[0])) return;
    countersRun = true;

    counters.forEach((el) => {
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      let current  = 0;
      const step   = target / 40;
      const timer  = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.round(current) + suffix;
        if (current >= target) clearInterval(timer);
      }, 40);
    });
  }

  /* ── 3. Skill bar fill ── */
  let skillsRun = false;

  function runSkillBars() {
    if (skillsRun) return;
    const fills = document.querySelectorAll('.skill-fill');
    if (!fills.length) return;
    if (!isInView(fills[0])) return;
    skillsRun = true;
    fills.forEach((fill) => {
      fill.style.width = fill.dataset.width + '%';
    });
  }

  /* ── 4. Progress rings ── */
  let ringsRun = false;

  function runRings() {
    if (ringsRun) return;
    const rings = document.querySelectorAll('.ring-prog');
    if (!rings.length) return;
    if (!isInView(rings[0])) return;
    ringsRun = true;
    const circumference = 175.9;
    rings.forEach((ring) => {
      const pct = parseInt(ring.dataset.pct, 10);
      ring.style.strokeDashoffset = circumference - (pct / 100) * circumference;
    });
  }

  /* ── 5. Radar chart ── */
  let radarRun = false;

  function runRadar() {
    if (radarRun) return;
    const poly = document.getElementById('radarPoly');
    if (!poly) return;
    if (!isInView(poly)) return;
    radarRun = true;

    // Values: Python, ML, PowerBI, SQL, Stats, MLOps  (0–100)
    const data   = [93, 87, 80, 82, 78, 70];
    const cx = 150, cy = 150, maxR = 110;
    const angles = [
      -Math.PI / 2,
      -Math.PI / 6,
       Math.PI / 6,
       Math.PI / 2,
       5 * Math.PI / 6,
      -5 * Math.PI / 6,
    ];

    let progress = 0;

    function step() {
      progress = Math.min(progress + 0.04, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const pts = data.map((val, i) => {
        const r = (val / 100) * maxR * eased;
        return `${cx + r * Math.cos(angles[i])},${cy + r * Math.sin(angles[i])}`;
      });
      poly.setAttribute('points', pts.join(' '));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  /* ── 6. Spark bars ── */
  let sparksRun = false;

  function runSparks() {
    if (sparksRun) return;
    const bars = document.querySelectorAll('.spark-bar');
    if (!bars.length) return;
    if (!isInView(bars[0])) return;
    sparksRun = true;
    bars.forEach((bar) => bar.classList.add('animated'));
  }

  /* ── Master scroll handler ── */
  function onScroll() {
    runCounters();
    runSkillBars();
    runRings();
    runRadar();
    runSparks();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('load', onScroll);

})();

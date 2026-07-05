/* ══════════════════════════════════════════
   TYPEWRITER EFFECT
   — Edit `roles` array to change what cycles
   ══════════════════════════════════════════ */

(function () {
  const el = document.getElementById('typedRole');
  if (!el) return;

  // ✏️ EDIT THIS to change cycling roles
  const roles = [
    'Data Scientist',
    'ML Engineer',
    'Data Analyst',
    'AI Engineer',
    'BI Developer',
  ];

  let ri = 0, ci = 0, deleting = false;

  function tick() {
    const word = roles[ri];

    if (!deleting) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        ri = (ri + 1) % roles.length;
      }
    }

    setTimeout(tick, deleting ? 55 : 85);
  }

  tick();
})();

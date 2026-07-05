/* ══════════════════════════════════════════
   HERO NEURAL-NET CANVAS
   ══════════════════════════════════════════ */

(function () {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, nodes = [];

  const NODE_COUNT  = 60;
  const LINK_DIST   = 120;
  const NODE_SPEED  = 0.4;
  const NODE_COLOR  = 'rgba(0, 212, 255, 0.65)';
  const LINK_COLOR  = (alpha) => `rgba(0, 212, 255, ${alpha})`;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function initNodes() {
    nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x:  Math.random() * W,
        y:  Math.random() * H,
        vx: (Math.random() - 0.5) * NODE_SPEED,
        vy: (Math.random() - 0.5) * NODE_SPEED,
        r:  Math.random() * 1.8 + 0.8,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Move nodes
    nodes.forEach((n) => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });

    // Draw edges
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK_DIST) {
          ctx.strokeStyle = LINK_COLOR(0.4 * (1 - d / LINK_DIST));
          ctx.lineWidth   = 0.5;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    nodes.forEach((n) => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = NODE_COLOR;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  function init() {
    resize();
    initNodes();
    draw();
  }

  window.addEventListener('resize', () => {
    resize();
    initNodes();
  });

  init();
})();

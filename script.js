// ============================================
//   ANNIVERSAIRE ERIKA — SCRIPT.JS
// ============================================

// ===== ETOILES =====
for (let i = 0; i < 100; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  const size = (Math.random() * 3 + 0.5).toFixed(1);
  s.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    top: ${Math.random() * 100}%;
    left: ${Math.random() * 100}%;
    --d: ${(Math.random() * 3 + 1.5).toFixed(1)}s;
    animation-delay: ${(Math.random() * 4).toFixed(1)}s;
  `;
  document.getElementById('starsContainer').appendChild(s);
}

// ===== PETALES =====
const petaleEmojis = ['💗', '🌸', '✨', '💫', '🌹', '💝', '⭐'];
for (let i = 0; i < 16; i++) {
  const p = document.createElement('div');
  p.className = 'petal';
  p.textContent = petaleEmojis[i % petaleEmojis.length];
  p.style.cssText = `
    left: ${Math.random() * 100}%;
    --sz: ${(Math.random() * 12 + 10).toFixed(0)}px;
    --fd: ${(Math.random() * 9 + 7).toFixed(1)}s;
    --fs: ${(-Math.random() * 7).toFixed(1)}s;
  `;
  document.getElementById('petalsContainer').appendChild(p);
}

// ===== CONFETTI =====
const confColors = ['#ff9cf7', '#ffd700', '#cc44ff', '#ff4499', '#fff', '#ffa0d0', '#ffaa44'];
for (let i = 0; i < 35; i++) {
  const c = document.createElement('div');
  c.className = 'conf';
  c.style.cssText = `
    left: ${Math.random() * 100}%;
    background: ${confColors[i % confColors.length]};
    --w: ${(Math.random() * 9 + 5).toFixed(0)}px;
    --h: ${(Math.random() * 12 + 6).toFixed(0)}px;
    --r: ${Math.random() > 0.5 ? '50%' : '2px'};
    --d2: ${(Math.random() * 5 + 3).toFixed(1)}s;
    --cs: ${(-Math.random() * 5).toFixed(1)}s;
    transform: rotate(${Math.random() * 360}deg);
  `;
  document.getElementById('confettiContainer').appendChild(c);
}

// ===== BOUGIES GATEAU =====
const candlesRow = document.getElementById('candlesRow');
const candleColors = [
  ['#ff9cf7', '#cc66ff'], ['#ffd700', '#ff9900'],
  ['#ff6eb4', '#cc44ff'], ['#99ccff', '#6699ff'],
  ['#ff9cf7', '#ff4499'], ['#ffd700', '#ffaa00'],
  ['#cc44ff', '#ff9cf7'], ['#ff4499', '#ff9cf7'],
  ['#ffaa44', '#ffd700'], ['#44ffaa', '#33cc88'],
  ['#ff9cf7', '#cc44ff'], ['#ffd700', '#ff9cf7'],
];
for (let i = 0; i < 12; i++) {
  const candle = document.createElement('div');
  candle.className = 'candle';
  candle.innerHTML = `
    <div class="flame" style="
      --fl: ${(0.3 + Math.random() * 0.3).toFixed(2)}s;
      animation-delay: ${(Math.random() * 0.4).toFixed(2)}s;
    "></div>
    <div class="cbody" style="
      --c1: ${candleColors[i][0]};
      --c2: ${candleColors[i][1]};
    "></div>
  `;
  candlesRow.appendChild(candle);
}

// ===== FEUX D'ARTIFICE =====
const fwColors = ['#ffd700', '#ff9cf7', '#cc44ff', '#ff4499', '#fff'];

function launchFirework() {
  const fw = document.createElement('div');
  fw.className = 'fw';
  fw.style.cssText = `
    left: ${Math.random() * window.innerWidth}px;
    top:  ${(Math.random() * 0.6 + 0.05) * window.innerHeight}px;
  `;
  const color = fwColors[Math.floor(Math.random() * fwColors.length)];
  for (let i = 0; i < 10; i++) {
    const angle    = (i / 10) * Math.PI * 2;
    const distance = 45 + Math.random() * 40;
    const particle = document.createElement('div');
    particle.className = 'fwp';
    particle.style.cssText = `
      background: ${color};
      --tx: ${(Math.cos(angle) * distance).toFixed(0)}px;
      --ty: ${(Math.sin(angle) * distance).toFixed(0)}px;
      animation-delay: ${(Math.random() * 0.2).toFixed(2)}s;
    `;
    fw.appendChild(particle);
  }
  document.body.appendChild(fw);
  setTimeout(() => fw.remove(), 1600);
}

// Lancement des feux d'artifice
setInterval(launchFirework, 2500);
setTimeout(launchFirework, 500);
setTimeout(launchFirework, 1200);
setTimeout(launchFirework, 2000);

// ===== CŒURS AU CLIC =====
const clickEmojis = ['💗', '💖', '💝', '✨', '🌹', '💫'];

document.addEventListener('click', (e) => {
  for (let i = 0; i < 4; i++) {
    const heart = document.createElement('div');
    heart.className = 'ch';
    heart.textContent = clickEmojis[Math.floor(Math.random() * clickEmojis.length)];
    heart.style.cssText = `
      left: ${e.clientX - 11}px;
      top:  ${e.clientY - 11}px;
      --tx: ${(Math.random() * 100 - 50).toFixed(0)}px;
      --ty: ${(-70 - Math.random() * 70).toFixed(0)}px;
      animation-delay: ${(i * 0.07).toFixed(2)}s;
    `;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
  }
});
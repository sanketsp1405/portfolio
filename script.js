// Toggle education details on click
const boxes = document.querySelectorAll('.edu-box');
boxes.forEach(box => {
  box.addEventListener('click', () => {
    box.classList.toggle('active');
  });
});

// --- Futuristic Code Rain Animation ---
function createCodeRain() {
  const codeRain = document.querySelector('.code-rain');
  if (!codeRain) return;
  const columns = Math.floor(window.innerWidth / 24);
  codeRain.innerHTML = '';
  for (let i = 0; i < columns; i++) {
    const stream = document.createElement('div');
    stream.className = 'code-rain-stream';
    stream.style.position = 'absolute';
    stream.style.top = '0';
    stream.style.left = `${i * 24}px`;
    stream.style.height = '100vh';
    stream.style.display = 'flex';
    stream.style.flexDirection = 'column';
    stream.style.justifyContent = 'flex-start';
    stream.style.pointerEvents = 'none';
    stream.style.animation = `rainDrop 2.5s linear infinite`;
    stream.style.animationDelay = `${Math.random() * 3}s`;
    stream.innerHTML = Array.from({length: Math.floor(Math.random()*12)+8}, () =>
      `<span style="color:#00fff0; font-size:18px; opacity:${0.5 + Math.random()*0.5}; display:block;">${String.fromCharCode(0x30A0 + Math.random() * 96)}</span>`
    ).join('');
    codeRain.appendChild(stream);
  }
}
window.addEventListener('resize', createCodeRain);
document.addEventListener('DOMContentLoaded', createCodeRain);

// Add keyframes for rainDrop in JS if not present in CSS
(function addRainDropKeyframes() {
  const style = document.createElement('style');
  style.innerHTML = `@keyframes rainDrop { 0% { transform: translateY(-100vh); } 100% { transform: translateY(100vh); } }`;
  document.head.appendChild(style);
})();

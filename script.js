// Add your JavaScript here if needed
console.log("Portfolio Loaded");
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
  function toggleEduCard(box) {
    box.classList.toggle('active');
}

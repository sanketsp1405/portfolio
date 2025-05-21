// Toggle education details on click
const boxes = document.querySelectorAll('.edu-box');
boxes.forEach(box => {
  box.addEventListener('click', () => {
    box.classList.toggle('active');
  });
});

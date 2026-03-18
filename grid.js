const GRID_SIDE_LENGTH_PERCENT = 100;
const OPACITY_STEP = 0.1;
const container = document.querySelector('#container');

function createGrid(size) {
  container.innerHTML = '';

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");

    square.classList.add("square");
    square.dataset.opacity = 0;
    const color = getRandomRgbColor();
    square.dataset.color = color;
    square.style.backgroundColor = `rgba(${color}, 0)`;

    square.style.width = `${GRID_SIDE_LENGTH_PERCENT / size}%`;
    square.style.height = `${GRID_SIDE_LENGTH_PERCENT / size}%`;

    container.appendChild(square);
  }
}

function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `${r}, ${g}, ${b}`;
}

container.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('square')) {
    let opacity = Number(e.target.dataset.opacity);
    let color = e.target.dataset.color;

    if (opacity < 1) {
      opacity += OPACITY_STEP;
      e.target.style.backgroundColor = `rgba(${color}, ${opacity})`;
      e.target.dataset.opacity = opacity;
    }
  }
});

const resizeButton = document.querySelector('#resize')

resizeButton.addEventListener('click', () => {
  const input = prompt('Enter a number from 1 to 100');

  if (input === null) return;

  const size = Number(input);

  if (!Number.isInteger(size) || size < 1 || size > 100) {
    alert('ERROR!');
    return;
  }

  createGrid(size);
});

const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', () => {
  const squares = container.querySelectorAll('.square');

  squares.forEach((square) => {
    const color = getRandomRgbColor();
    square.dataset.color = color;
    square.dataset.opacity = 0;
    square.style.backgroundColor = `rgba(${color}, 0)`;
  });
});

createGrid(16);
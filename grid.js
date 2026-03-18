const SQUARE_SIDE_LENGTH = 960;
const container = document.querySelector('#container');

function createGrid(size) {
  container.innerHTML = '';

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");

    square.classList.add("square");

    square.style.width = `${SQUARE_SIDE_LENGTH / size}px`;
    square.style.height = `${SQUARE_SIDE_LENGTH / size}px`;

    container.appendChild(square);
  }
}

createGrid(16);

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

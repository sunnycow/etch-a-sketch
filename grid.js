const SQUARE_SIDE_LENGTH = 960;
const container = document.querySelector('#container');

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");

    square.classList.add("square");

    square.style.width = `${SQUARE_SIDE_LENGTH / size}px`;
    square.style.height = `${SQUARE_SIDE_LENGTH / size}px`;

    container.appendChild(square);
  }
}

createGrid(16);

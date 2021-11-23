const container = document.querySelector("#container");

// display slider value / get gridSize as an int
const slider = document.querySelector(".slider");
const output = document.querySelector(".sizeText");
output.textContent = slider.value;
let gridSize = 16;

slider.oninput = function () {
  output.textContent = this.value;
  gridSize = parseInt(slider.value);
  reset();
};

// initiates the first grid
createGrid(gridSize);
addColor();

// creates the grid
function createGrid(gridSize) {
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (i = 0; i < gridSize * gridSize; i++) {
    const grid = document.createElement("div");
    grid.classList.add("gridSquare");
    container.appendChild(grid);
  }
}

// adds class colored-in when square is hovered over
function addColor() {
  const squares = document.querySelectorAll(".gridSquare");
  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      square.classList.add("colored-in");
    });
  });
}

// clears grid off
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", reset);

function reset() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  createGrid(gridSize);
  addColor();
}

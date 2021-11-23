const container = document.querySelector("#container");

// initiates the first grid
createGrid();
addColor();

// creates 16 divs for the grid
function createGrid() {
  for (i = 0; i < 16; i++) {
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
  createGrid();
  addColor();
}

const container = document.querySelector("#container");

// creating 16 divs for the grid
for (i = 0; i < 16; i++) {
  const board = document.createElement("div");
  board.classList.add("gridSquare");
  board.style.cssText = "border-style: solid; border-color: black";
  container.appendChild(board);
}

// adding class colored-in when square is hovered over
const squares = document.querySelectorAll(".gridSquare");
squares.forEach((square) => {
  square.addEventListener("mouseenter", () => {
    square.classList.add("colored-in");
  });
});

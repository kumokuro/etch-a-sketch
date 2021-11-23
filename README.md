# etch-a-sketch
A simple etch-a-sketch board made with HTML, CSS, and JavaScript. 
This project took about 8 hours total to complete. 

The goals of this project were to create a grid, who's size can be adjusted based on user input. When each grid square is hovered over, a color is added, thus creating an etch-a-sketch board. The user can reset the board using the reset button located at the top. 

##How it works and what I learned 

The main purpose of this project was to gain more practice with DOM manipulation. I also learned about CSS grid and gained a deeper insight into function callbacks.

To gain input from the user, I implemented a range slider, then held its value in a variable (gridSize) to use as a parameter for the function that would build the grid, createGrid(). In order to make sure the value would be updated after every use, I used a function that:
  1) Outputted the value as text the user could see
  2) Updated the value of gridSize
  3) reset the grid after each adjustment of the slider

Creating the grid itself was the most challenging part of this project. In order to create the grid, I had to research CSS Grid, and how to use it.  After thinking about it a while, I realized that I could simply have the rows and columns repeat (gridSize) times for the structure, then use a for loop to append each square to the grid. 

To add the color to each square touched, I read about events, and found that mouseenter would suit my needs perfectly. I used a forEach() function to attach an event listener to each square and change colors when the event is triggered. 

The reset button works by removing all the children of container, then reinstating them by calling createGrid(). 

##End of project thoughts

I believe that there is a lot of cleaning up I can do in the future! But I am very excited to have the project working as intended. In the future I would like to add color options. 

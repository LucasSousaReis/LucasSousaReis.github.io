function convertRomanToArabic() {
    var romanNumeral = document.getElementById("romanInput").value.toUpperCase();
    var arabicNumeral = 0;
    var romanNumerals = {
      "M": 1000,
      "CM": 900,
      "D": 500,
      "CD": 400,
      "C": 100,
      "XC": 90,
      "L": 50,
      "XL": 40,
      "X": 10,
      "IX": 9,
      "V": 5,
      "IV": 4,
      "I": 1
    };

    for (var i = 0; i < romanNumeral.length; i++) {
      var currentSymbol = romanNumeral[i];
      var currentValue = romanNumerals[currentSymbol];
      var nextSymbol = romanNumeral[i + 1];
      var nextValue = romanNumerals[nextSymbol];

      if (nextValue && currentValue < nextValue) {
        arabicNumeral += nextValue - currentValue;
        i++;
      } else {
        arabicNumeral += currentValue;
      }
    }

    document.getElementById("arabicOutput").innerHTML = arabicNumeral;
}

// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Size of the grid
const gridSize = 20;
const totalCells = gridSize * gridSize;

// Create a 2D array to represent the grid
let grid = new Array(gridSize);
for (let i = 0; i < gridSize; i++) {
  grid[i] = new Array(gridSize);
}

// Generate the initial grid state randomly
function generateRandomGrid() {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      grid[i][j] = Math.random() < 0.5 ? 0 : 1;
    }
  }
}

// Update the grid for the next generation
function updateGrid() {
  let newGrid = new Array(gridSize);
  for (let i = 0; i < gridSize; i++) {
    newGrid[i] = new Array(gridSize);
  }

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const cellState = grid[i][j];
      const liveNeighbors = countLiveNeighbors(i, j);

      if (cellState === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
        newGrid[i][j] = 0; // Cell dies
      } else if (cellState === 0 && liveNeighbors === 3) {
        newGrid[i][j] = 1; // Cell comes alive
      } else {
        newGrid[i][j] = cellState; // Cell remains the same
      }
    }
  }

  grid = newGrid;
}

// Count the number of live neighbors around a cell
function countLiveNeighbors(row, col) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue; // Skip the current cell

      const newRow = (row + i + gridSize) % gridSize;
      const newCol = (col + j + gridSize) % gridSize;
      count += grid[newRow][newCol];
    }
  }
  return count;
}

// Render the grid on the HTML page
function renderGrid() {
  const gridElement = document.getElementById("grid");
  gridElement.innerHTML = "";

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.style.backgroundColor = grid[i][j] === 1 ? "#000" : "#fff";
      gridElement.appendChild(cell);
    }
  }
}

// Start the game
let interval;
function startGame() {
  generateRandomGrid();
  renderGrid();
  interval = setInterval(() => {
    updateGrid();
    renderGrid();
  }, 200);
}

// Stop the game
function stopGame() {
  clearInterval(interval);
}

// Reset the game
function resetGame() {
  stopGame();
  generateRandomGrid();
  renderGrid();
}

// Initialize the game on page load
document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-button");
  const stopButton = document.getElementById("stop-button");
  const resetButton = document.getElementById("reset-button");

  startButton.addEventListener("click", startGame);
  stopButton.addEventListener("click", stopGame);
}
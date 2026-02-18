let size = 10;
let mineCount = 15;
const gridElement = document.getElementById("grid");
const difficultySelect = document.getElementById("difficulty");
const customSettings = document.getElementById("customSettings");

let grid = [];
let firstClick = true;
let revealedSafeCells = 0;
let gameOver = false;

difficultySelect.addEventListener("change", () => {
  customSettings.style.display = difficultySelect.value === "custom" ? "block" : "none";
});

function startGame() {
  const difficulty = difficultySelect.value;

  if (difficulty === "easy") {
    size = 8;
    mineCount = 10;
  } else if (difficulty === "medium") {
    size = 10;
    mineCount = 15;
  } else if (difficulty === "hard") {
    size = 15;
    mineCount = 40;
  } else {
    const customSize = parseInt(document.getElementById("customSize").value);
    const customMines = parseInt(document.getElementById("customMines").value);

    if (!customSize || !customMines || customMines >= customSize * customSize) {
      alert("Paramètres invalides");
      return;
    }

    size = customSize;
    mineCount = customMines;
  }

  init();
}

function init() {
  grid = [];
  gridElement.innerHTML = "";
  gridElement.style.gridTemplateColumns = `repeat(${size}, 30px)`;

  firstClick = true;
  revealedSafeCells = 0;
  gameOver = false;

  for (let i = 0; i < size * size; i++) {
    const cell = {
      mine: false,
      revealed: false,
      flagged: false,
      element: document.createElement("div")
    };

    cell.element.className = "cell";
    cell.element.addEventListener("click", () => reveal(i));
    cell.element.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      toggleFlag(i);
    });

    gridElement.appendChild(cell.element);
    grid.push(cell);
  }
}

function placeMines(firstIndex) {
  let placed = 0;
  while (placed < mineCount) {
    const i = Math.floor(Math.random() * grid.length);
    if (!grid[i].mine && i !== firstIndex) {
      grid[i].mine = true;
      placed++;
    }
  }
}

function neighbors(index) {
  const x = index % size;
  const y = Math.floor(index / size);
  const result = [];

  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) continue;
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < size && ny >= 0 && ny < size) {
        result.push(ny * size + nx);
      }
    }
  }
  return result;
}

function toggleFlag(index) {
  const cell = grid[index];
  if (cell.revealed || gameOver) return;

  cell.flagged = !cell.flagged;
  cell.element.textContent = cell.flagged ? "🚩" : "";
}

function checkVictory() {
  if (revealedSafeCells === size * size - mineCount) {
    gameOver = true;
    setTimeout(() => {
      alert("Victoire ! 🎉");
    }, 50);
  }
}

function reveal(index) {
  const cell = grid[index];
  if (cell.revealed || cell.flagged || gameOver) return;

  if (firstClick) {
    placeMines(index);
    firstClick = false;
  }

  cell.revealed = true;
  cell.element.classList.add("revealed");

  if (cell.mine) {
    cell.element.classList.add("mine");
    cell.element.textContent = "💣";
    gameOver = true;
    setTimeout(() => alert("Perdu ! 💥"), 50);
    return;
  }

  revealedSafeCells++;

  const count = neighbors(index).filter(i => grid[i].mine).length;
  if (count > 0) {
    cell.element.textContent = count;
  } else {
    neighbors(index).forEach(reveal);
  }

  checkVictory();
}

startGame();
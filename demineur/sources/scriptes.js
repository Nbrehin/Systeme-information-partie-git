  const size = 10;
const mineCount = 15;
const gridElement = document.getElementById("grid");

let grid = [];
let firstClick = true;
let revealedSafeCells = 0;

function init() {
    grid = [];
    gridElement.innerHTML = "";
    firstClick = true;
    revealedSafeCells = 0;

    for (let i = 0; i < size * size; i++) {
    const cell = {
        mine: false,
        revealed: false,
        element: document.createElement("div")
    };

    cell.element.className = "cell";
    cell.element.addEventListener("click", () => reveal(i));
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

function checkVictory() {
    if (revealedSafeCells === size * size - mineCount) {
    setTimeout(() => {
        alert("Victoire !");
        init();
    }, 50);
    }
}

function reveal(index) {
    const cell = grid[index];
    if (cell.revealed) return;

    if (firstClick) {
    placeMines(index);
    firstClick = false;
    }

    cell.revealed = true;
    cell.element.classList.add("revealed");

    if (cell.mine) {
    cell.element.classList.add("mine");
    cell.element.textContent = "💣";
    alert("Perdu !");
    init();
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

init();
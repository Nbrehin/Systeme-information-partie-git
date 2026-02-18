const size = 10;
const mineCount = 15;
const gridElement = document.getElementById("grid");

let grid = [];

function init() {
    grid = [];
    gridElement.innerHTML = "";

    // Créer cellules
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

    // Placer mines
    let placed = 0;
    while (placed < mineCount) {
    const i = Math.floor(Math.random() * grid.length);
    if (!grid[i].mine) {
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

function reveal(index) {
    const cell = grid[index];
    if (cell.revealed) return;
    cell.revealed = true;
    cell.element.classList.add("revealed");

    if (cell.mine) {
    cell.element.classList.add("mine");
    cell.element.textContent = "💣";
    alert("Perdu !");
    init();
    return;
    }

    const count = neighbors(index).filter(i => grid[i].mine).length;
    if (count > 0) {
    cell.element.textContent = count;
    } else {
    neighbors(index).forEach(reveal);
    }
}

init();
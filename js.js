window.onload = defaultGrid;

let def = 16;
let grid = document.querySelector('.grid-container');


function deleteGrid() {
    let divs = document.querySelectorAll('.box');
    for (let i = 0; i < divs.length; i++) {
        grid.removeChild(divs[i]);
        console.log(divs[i]);
    }
}

function defaultGrid() {
    deleteGrid();
    grid.style.gridTemplateColumns = `repeat(${def},1fr)`;

    for (let e = 0; e < def*def; e++) {
        let box = document.createElement('div');
        box.classList = 'box';
        box.addEventListener('mouseover', function() {
            box.style.backgroundColor = "rgb(222,0,88)";
        });
        grid.appendChild(box);
    }

}

function getSize() {
    let x;
    do {
        x = prompt("Enter grid between 1 to 64:")
    }
    while (x < 1 || x > 64);
    return x;
}

function newGrid() {
    deleteGrid();
    let user = getSize();
    grid.style.gridTemplateColumns = `repeat(${user},1fr)`;
    for (let i = 0; i < user*user; i++) {
        let box = document.createElement('div');
        box.classList = 'box';
        box.addEventListener('mouseover', function() {
            box.style.backgroundColor = "rgb(222,0,88)";
        });
        grid.appendChild(box);
    }
    
}




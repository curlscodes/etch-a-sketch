
const currentDiv = document.getElementById('container');
const newDiv = document.getElementsByClassName('gridcell');

const submit = document.getElementById('submitButton');

function makeGrid(input) {
    currentDiv.innerHTML = ''
    for (rows = 0; rows < input; rows++) {
        for (columns = 0; columns < input; columns++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('gridcell');
            currentDiv.appendChild(newDiv);
        }
    }
    currentDiv.style.gridTemplateRows = `repeat(${input}, 1fr)`;
    currentDiv.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
};

function inputGrid() {
    let input = prompt("Enter grid size: ")
    if (input > 100) {
        alert("Woah there, buddy! Choose a smaller number!")
    }
    else makeGrid(input)
}


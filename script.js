
const currentDiv = document.getElementById('container');
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function colorGrid(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    this.style.backgroundColor = 'black'
}

function makeGrid(input) {
    const newDiv = document.getElementsByClassName('gridcell');
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

    let newDivs = currentDiv.querySelectorAll('div')
    newDivs.forEach(newDiv => newDiv.addEventListener('mousedown', colorGrid));
    newDivs.forEach(newDiv => newDiv.addEventListener('mouseover', colorGrid));
};



function inputGrid() {
    let input = prompt("Enter grid size: ")
    if (input > 100) {
        alert("Woah there, buddy! Choose a smaller number!")
    }
    else makeGrid(input)
}

makeGrid(10)
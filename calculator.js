function add(a,b) {
    return a + b;
};

function subtract(a,b) {
    return a - b;
	
};

function multiply(a,b) {
    return a * b;
};

function divide(a,b) {
    return a / b;
};

let mapping = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
}

function operate(firstNumber, secondNumber, operator) {
    let output = mapping[operator](firstNumber,secondNumber);
    return output;
};

console.log(operate(1, 2 ,'+'))

// Create HTML elements
const display = document.querySelector('#display');
const deleteButtons = document.querySelector('#deleteButtons');
const buttons = document.querySelector('#buttons');

function createDeleteButtons() {
    for (let i=1; i<=3; i++) {
        const deleteButton = document.createElement('div');
        deleteButton.classList.add(`deleteButton${i}`);
        
        deleteButtons.appendChild(deleteButton);
    }
}

createDeleteButtons();

function createButtonContainer() {
    for (let i=1 ; i<=4; i++) {
        const newRow = document.createElement('div');
        newRow.classList.add(`row${i}`);
        buttons.appendChild(newRow);
        for (let n=1; n<=4; n++) {
            const row = document.querySelector(`.row${i}`);
            const button = document.createElement('div');
            button.classList.add(`button${n}`);
            button.style.border = '1px solid black';
            row.appendChild(button);
        };
    };
};

createButtonContainer();

function addToCalc(lst) {
    const toAdd = lst[0]
    const rowNum = lst[1]
    const colNum = lst[2]
    const location = document.querySelector(`.row${rowNum} > .button${colNum}`)
    location.textContent = String(toAdd)
}

const buttonsToAdd = [
    // first row
    ['/', 1, 4],
    [9, 1, 3],
    [8, 1, 2],
    [7, 1, 1],
    // second row
    ['*', 2, 4],
    [6, 2, 3],
    [5, 2, 2],
    [4, 2, 1],
    // third row
    ['-', 3, 4],
    [3, 3, 3],
    [2, 3, 2],
    [1, 3, 1],
    // fourth row
    ['+', 4, 4],
    ['=', 4, 3],
    [0, 4, 2],
    ['.', 4, 1],
]

buttonsToAdd.map(addToCalc)
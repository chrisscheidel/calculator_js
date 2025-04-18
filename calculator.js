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

let firstNumber;
let secondNumber;
let operator;

let mapping = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
}

function operate(firstNumber, secondNumber, operator, mapping) {
    let output = mapping[operator](firstNumber,secondNumber);
    return output;
};

// Create HTML elements
const display = document.querySelector('#display');
const buttons = document.querySelector('#buttons');

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
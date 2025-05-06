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

const col3 = document.querySelectorAll('.button3')
const col2 = document.querySelectorAll('.button2')
const col1 = document.querySelectorAll('.button1')

function addNumsToCalc(column, start, end) {
    let number = start;
    for (let i = 0; i < column.length; i++) {
        if (number >= end) {
            column[i].textContent = number;
            number -= 3;
        } else
        {
            break;
        }
        
    }
}

addNumsToCalc(col3, 9, 3);
addNumsToCalc(col2, 8, 2);
addNumsToCalc(col1, 7, 1);


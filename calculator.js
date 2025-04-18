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


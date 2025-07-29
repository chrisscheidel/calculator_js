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
    if (b === 0) {
        return "You tried to divide by 0 >:( - click AC to reset"
    } else {
        return a / b;
    }
};

let mapping = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
}

function operate(firstNumber, secondNumber, operator) {
    let output = mapping[operator](Number(firstNumber),Number(secondNumber));
    return output;
};

console.log(operate(1, 2 ,'+'))

// Create HTML elements
const display = document.querySelector('#display');
const deleteButtons = document.querySelector('#deleteButtons');
const buttons = document.querySelector('#buttons');
const displayOutput = document.querySelector('#output');

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
            button.style.background = 'gray';
            button.style.color = 'white';
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

// add placeholder and delete buttons
const valuesToAdd = ['cSv', 'AC', 'C'];
for (let i = 1; i <= 3; i++) {
    let buttonLoc = document.querySelector(`.deleteButton${i}`);
    buttonLoc.textContent = valuesToAdd[i - 1];
    buttonLoc.style.display = 'flex';
    buttonLoc.style.justifyContent = 'center';
    buttonLoc.style.alignItems = 'center';
}

let eqInputs = {
"input1" : "",
"input2" : "",
"operator" : "",
};

function updateDisplay() {
    display.style.fontSize = "24px";
}


let currentState = "";
const notNumbers = ['+','-','/','*','=','C','AC','cSv'];
const operatorOptions = ['+','-','/','*','='];

const parents = document.querySelectorAll('.row1,.row2,.row3,.row4');
parents.forEach(parent => {
    const children = parent.querySelectorAll('*');

    children.forEach(button => {
        button.addEventListener('click', () => {
            display.style.display = 'flex';
            display.style.justifyContent = 'flex-end';
            display.style.alignItems = 'flex-end';
        
            if (!(notNumbers.includes(button.textContent)) && eqInputs.operator === "") {
                if (eqInputs.input1.includes(".") && button.textContent === ".") {
                    eqInputs.input1;
                } else {
                    eqInputs.input1 += button.textContent;
                    updateDisplay();
                    display.textContent = eqInputs.input1;
                    console.log(`input1 is now ${eqInputs.input1}`);
                }
            } else if (!(notNumbers.includes(button.textContent)) && eqInputs.operator !== "") {
                if (eqInputs.input2.includes(".") && button.textContent === ".") {
                    eqInputs.input2;
                } else {
                    eqInputs.input2 += button.textContent;
                    updateDisplay();
                    display.textContent = `${eqInputs.input1} ${eqInputs.operator} ${eqInputs.input2}`;
                    console.log(`input2 is now ${eqInputs.input2}`)
                }
            } else if (eqInputs.input1 !== "" && eqInputs.input2 === "" && eqInputs.operator === "" && button.textContent !== '=') {
                eqInputs.operator = button.textContent;
                updateDisplay();
                display.textContent = `${eqInputs.input1} ${eqInputs.operator}`;
                console.log(`operator is ${eqInputs.operator}`)
            } else if (eqInputs.input1 !== "" && eqInputs.input2 !== "" && eqInputs.operator !== "" && button.textContent === '=') {
                eqInputs.input1 = operate(eqInputs.input1, eqInputs.input2, eqInputs.operator);
                updateDisplay();
                display.textContent = eqInputs.input1;
                eqInputs.input2 = "";
                eqInputs.operator = "";
                console.log("operated with equals sign")
            } else if (eqInputs.input1 !== "" && eqInputs.input2 !== "" && eqInputs.operator !== "" && operatorOptions.includes(button.textContent)) {
                eqInputs.input1 = operate(eqInputs.input1, eqInputs.input2, eqInputs.operator);
                eqInputs.input2 = "";
                eqInputs.operator = button.textContent;
                console.log("operated with other operator")
                updateDisplay();
                display.textContent = `${eqInputs.input1} ${eqInputs.operator}`;
            }

            })
        })
    })

let clearButtons = deleteButtons.querySelectorAll('*')
clearButtons.forEach(button => {
        button.addEventListener('click', () => {
            display.style.display = 'flex';
            display.style.justifyContent = 'flex-end';
            display.style.alignItems = 'flex-end';

            if (button.textContent === 'cSv') {
                updateDisplay();
                display.textContent = "This calculator is a product of cSv. Press AC to clear."
            } else if (button.textContent === "AC"){
                eqInputs.input1 = "";
                eqInputs.operator = "";
                eqInputs.input2 = "";
                updateDisplay();
                display.textContent = "";
            } else if (button.textContent === "C") {
                if (eqInputs.input1 === "") {
                    updateDisplay();
                    display.textContent = "";
                } else if (eqInputs.operator === "") {
                    eqInputs.input1 = "";
                    updateDisplay();
                    display.textContent = "";
                } else if (eqInputs.input2 === "") {
                    eqInputs.operator = "";
                    updateDisplay();
                    display.textContent = eqInputs.input1;
                } else {
                    eqInputs.input2 = "";
                    updateDisplay();
                    display.textContent = `${eqInputs.input1} ${eqInputs.operator}`;
                }
            }

        })
    }
)

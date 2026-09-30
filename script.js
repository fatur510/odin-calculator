const buttonNumbers = document.querySelectorAll(".btn-num");
const buttonOperator = document.querySelectorAll(".btn-op");
const display = document.getElementById("display");
const equalButton = document.getElementById("equalButton");
const clearButton = document.getElementById("clearButton");

let number = "";
let storedNumber = "";
let operator = "";

buttonNumbers.forEach((btn) => {
    btn.addEventListener("click", (parameter) => {        
        const value = btn.value;
        number += value;
        display.textContent = number 
    });
})

buttonOperator.forEach((btn) => {
    btn.addEventListener("click", (parameter) => {
        if(number === "") return;

        storedNumber = number;
        operator = btn.value;
        number = "";
        display.textContent = operator;
    })
})

equalButton.addEventListener("click", () => {
    if(number === "" || storedNumber === "") return;

    const num1 = parseFloat(storedNumber);
    const num2 = parseFloat(number);

    const result = operate(operator,num1,num2);

    display.textContent = result;
    number = result.toString();
    storedNumber = "";
    operator= "";
})


clearButton.addEventListener("click", function() {
    display.textContent = "";
    number = "";
    storedNumber = "";
    operator = "";
})


function add(a, b) {
    return a + b
}

function substract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b ;
}


function operate(operator, num1, num2){
    if(operator === "+")return add(num1, num2);
    if(operator === "-")return substract(num1, num2);
    if(operator === "*")return multiply(num1,num2);
    if(operator === "/"){
        if (num2 === 0)return "Error";
        return divide(num1,num2);
    }
    return null;
}



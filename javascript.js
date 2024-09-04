let firstNum = 0;
let secondNum = 0;
let operator;
const container = document.querySelector(".container");
let display = document.querySelector(".display");
function add ( firstNum, secondNum) {

};
function subtract (firstNum, secondNum) {

};
function multiply (num, multiplier){

};
function divide (num, divisor) {

};
function operate (firstNum, secondNum, operator) {
    
};

container.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.className) {
        case "one":
            display.textContent += "1";
            break;
        case "two":
            display.textContent += "2";
            break;
        case "three":
            display.textContent += "3";
            break;
        case "four":
            display.textContent += "4";
            break;
        case "five":
            display.textContent += "5";
            break;
        case "six":
            display.textContent += "6";
            break;
        case "seven":
            display.textContent += "7";
            break;
        case "eight":
            display.textContent += "8";
            break;
        case "nine":
            display.textContent += "9";
            break;
    }
});
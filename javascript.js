let nums = [];
let operator;
let idx = 0;
const container = document.querySelector(".container");
let display = document.querySelector(".display");
function add ( firstNum, secondNum) {
    return +firstNum + +secondNum;
};
function subtract (firstNum, secondNum) {
    return +firstNum - +secondNum;
};
function multiply (num, multiplier){
    return +num * +multiplier;
};
function divide (num, divisor) {
    return +num / +divisor;
};
function operate (firstNum, secondNum, operator) {
    switch (operator) {
        case "+":
            display.textContent = add(firstNum, secondNum);
            break;
        case "-":
            display.textContent = subtract(firstNum, secondNum);
            break;
        case "*":
            display.textContent = multiply(firstNum, secondNum);
            break;
        case "/":
            display.textContent = divide(firstNum, secondNum);
            break;
    }
};

container.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.className) {
        case "number":
            if ( nums[idx] === undefined) {
                nums[idx] = target.textContent;
            } else {
                nums[idx].length < 15 ? nums[idx] += target.textContent : nums[idx];
            }
            display.textContent = nums[idx];
            break;
        case "operator":
            target.style.backgroundColor = "lightblue";
            if (nums[idx] === undefined) {
                operator = "";
                idx = 0;
                target.style.backgroundColor = "initial";
            } else if (operator === undefined || operator === "") {
                operator = target.textContent;
                idx = 1;
            } else {
                operate(nums[0], nums[1], operator);
                nums.fill("");
                operator = target.textContent;
                nums[0] = display.textContent;
                idx = 1;
            };
            break;
        case "clear":
            nums.fill("");
            operator = "";
            display.textContent = "";
            idx = 0;
            break;
        case "equal":
            if ( operator !== undefined) {
                operate(nums[0], nums[1], operator);
                operator = "";
                idx = 0;
            }
    };
});
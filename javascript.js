let nums = [];
let operator;
let idx = 0;
const container = document.querySelector(".container");
let display = document.querySelector(".display");
const btnOperator = document.querySelectorAll(".operator");
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
    if (num == 0 && divisor == 0) {
        return "";
    } else {
        return +num / +divisor;
    }
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
function clearBground() {
    for (let btn of btnOperator) {
        btn.style.backgroundColor = "darkgrey";
    };
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
            if (nums[0] === "" && display.textContent !== "") {
                nums[0] = display.textContent;
                operator = target.textContent;
                idx = 1;
            } else if (nums[idx] === undefined) {
                operator = "";
                idx = 0;
                clearBground();
            } else if (operator === undefined || operator === "") {
                operator = target.textContent;
                idx = 1;
            } else {
                operate(nums[0], nums[1], operator);
                nums.fill("");
                clearBground();
                operator = target.textContent;
                target.style.backgroundColor = "lightblue";
                nums[0] = display.textContent;
                idx = 1;
            };
            break;
        case "clear":
            nums.fill("");
            operator = "";
            display.textContent = "";
            idx = 0;
            clearBground();
            break;
        case "equal":
            if ( operator !== undefined) {
                operate(nums[0], nums[1], operator);
                operator = "";
                idx = 0;
                nums.fill("");
                clearBground();
            }
    };
});
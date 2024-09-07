let nums = [];
let secondNum;
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
};

container.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.className) {
        case "number":
            if ( nums[idx] === undefined) {
                nums[idx] = target.textContent;
            } else {
                nums[idx].length < 17 ? nums[idx] += target.textContent : nums[idx];
            }
            display.textContent = nums[idx];
            break;
        case "operator":
            if (operator === undefined) {
                    operator = target.textContent;
                    idx = 1;
            } else {
                switch (operator) {
                    case "+":
                        display.textContent = add(nums[0], nums[1]);
                        break;
                }
            };
            break;
        case "clear":
            nums.fill("");
            display.textContent = "";
            break;
    };
});
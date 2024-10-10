var displayHistory = document.querySelector(".display-history");
var display = document.querySelector(".display-input");
var tempResult = document.querySelector(".temp-result");
var numbers = document.querySelectorAll(".number");
var operations = document.querySelectorAll(".operation");
var equal = document.querySelector(".equal");
var clearAll = document.querySelector(".clear-all");
var clear = document.querySelector(".clear");
var modulus = document.querySelectorAll(".modulus");
var numberZero = document.querySelectorAll(".number-zero")

var dis1Num = "";
var dis2Num = "";
var result = null;
var lastOperation = "";
var haveDot = false;

numbers.forEach ((number) => {
    number.addEventListener ("click", (e) => {
        if (e.target.innerText === "." && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === "." && haveDot) {
            return;
        }
        dis2Num += e.target.innerText;
        display.innerText = dis2Num;
    })
});

numberZero.forEach ((number) => {
    number.addEventListener ("click", (e) => {
        if (e.target.innerText === "." && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === "." && haveDot) {
            return;
        }
        dis2Num += e.target.innerText;
        display.innerText = dis2Num;
    })
});

operations.forEach ((operation) => {
    operation.addEventListener ("click", (e) => {
        if (!dis2Num) return;
        haveDot = false;
        var operationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
    })
})

modulus.forEach ((operation) => {
    operation.addEventListener ("click", (e) => {
        if (!dis2Num) return;
        haveDot = false;
        var operationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
    })
})

function clearVar(name = "") {
    dis1Num += dis2Num + " " + name + " ";
    displayHistory.innerText = dis1Num;
    display.innerText = "";
    dis2Num = "";
    tempResult.innerText = result;
}

function mathOperation () {
    if (lastOperation === "x") {
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOperation === "+") {
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === "-") {
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOperation === "/") {
        result = parseFloat(result) / parseFloat(dis2Num);
    } else if (lastOperation === "%") {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}

equal.addEventListener("click", () => {
    if (!dis1Num || !   dis2Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display.innerText = result;
    tempResult.innerText = "";
    dis2Num = result;
    dis1Num = "";
})

clearAll.addEventListener("click", () => {
    dis1Num = "";
    dis2Num = "";
    haveDot = false;
    displayHistory.innerText = "";
    display.innerText = "";
    tempResult.innerText = "";
    result = "";
})

clear.addEventListener("click", () => {
    display.innerText = "";
    dis2Num = "";
})

window.addEventListener("keydown", (e) => {
    if (
      e.key === "0" ||
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "9"
    ) {
      clickButton(e.key);
    } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
      clickOperation(e.key);
    } else if (e.key === "*") {
      clickOperation("x");
    } else if (e.key === "Enter" || e.key === "=") {
      equal.click();
    } else if (e.key === "Backspace") {
      clear.click();
    } else if (e.key === "Delete") {
      clearAll.click();
    }
  });
  
function clickButton(key) {
numbers.forEach((button) => {
    if (button.innerText === key) {
    button.click();
    }
});
}

function clickOperation(key) {
operations.forEach((operation) => {
    if (operation.innerText === key) {
    operation.click();
    }
});
}
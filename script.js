//add keyboard support
//at least fix the spacing

let bottomDisplay = document.getElementById("bottomDisplay");
let topDisplay = document.getElementById("topDisplay");
let displayValue;
let operator = "";
let storedValue;
let equalsPressed = false;

function add(a,b) {
  return Math.round((a+b)*100000)/100000;
}

function multiply(a,b) {
  return Math.round((a*b)*100000)/100000;
}

function subtract(a,b) {
  return Math.round((a-b)*100000)/100000;
}

function divide(a,b) {
  return Math.round((a/b)*100000)/100000;
}

function eraseOperator() {
  operator = "";
}

function operate(a,b,operator) {
  switch(operator) {
    case "+":
        topDisplay.innerHTML = topDisplay.innerHTML + displayValue + "=" + add(a,b);
        bottomDisplay.innerHTML = "";
        storedValue = "";
        equalsPressed = true;
        return displayValue = add(a,b);
    case "-":
        topDisplay.innerHTML = topDisplay.innerHTML + displayValue + "=" + subtract(a,b);
        bottomDisplay.innerHTML = "";
        storedValue = "";
        equalsPressed = true;
        return displayValue = subtract(a,b);
    case "*":
        topDisplay.innerHTML = topDisplay.innerHTML + displayValue + "=" + multiply(a,b);
        bottomDisplay.innerHTML = "";
        storedValue = "";
        equalsPressed = true;
        return displayValue = multiply(a,b);
    case "÷":
        if (b==0) {
            bottomDisplay.innerHTML = "You can't divide by zero!";
            break;
        }
        topDisplay.innerHTML = topDisplay.innerHTML + displayValue + "=" + divide(a,b);  
        bottomDisplay.innerHTML = "";
        storedValue = "";
        equalsPressed = true;
        return displayValue = divide(a,b);
  }
}

function equalBtn (a,b,operator) {
  operate(a,b,operator);
  eraseOperator();
}

function AC() {
  bottomDisplay.innerHTML = "";
  topDisplay.innerHTML = "";
  displayValue = "";
  operator = "";
  storedValue = "";
  equalsPressed = false;
  document.getElementById("decimal").disabled = false;
}
  
function addNum(clickedBtn) {
  if (equalsPressed = true) {
    displayValue = "";
  }
  bottomDisplay.innerHTML = bottomDisplay.innerHTML +  parseInt(clickedBtn, 10);
  if (displayValue != "" && operator != "") {
    storedValue = parseFloat(bottomDisplay.innerHTML);
  } else {
  displayValue = parseFloat(bottomDisplay.innerHTML);
  }
}

function addOperator (clickedBtn) {
 if (operator != "" ) {
  storedValue = operate(storedValue, displayValue, operator);
  displayValue = '';
  bottomDisplay.innerHTML = "";
  operator = clickedBtn;
  topDisplay.innerHTML = storedValue + operator;
  document.getElementById("decimal").disabled = false;
 } else {
  operator = clickedBtn;
  topDisplay.innerHTML = displayValue + operator;
  storedValue = displayValue;
  displayValue = "";
  bottomDisplay.innerHTML = "";
  document.getElementById("decimal").disabled = false;}
}

function posNeg () {
    displayValue = -displayValue;
    bottomDisplay.innerHTML = displayValue;
}

function percent () {
    displayValue = displayValue/100;
    bottomDisplay.innerHTML = displayValue;
}

function decimal () {
    displayValue = displayValue + ".";
    bottomDisplay.innerHTML = displayValue;
    document.getElementById("decimal").disabled = true; 
}

function backspace () {
  displayValue = parseFloat(displayValue.toString().slice(0, length-1));
  if (isNaN(displayValue)) {
    displayValue = 0;
   }
  bottomDisplay.innerHTML = displayValue;
}
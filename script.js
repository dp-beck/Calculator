//You should round answers with long decimals so that they don’t overflow the screen.
//add a backspace button
//add keyboard support

var bottomDisplay = document.getElementById("bottomDisplay");
var topDisplay = document.getElementById("topDisplay");
var displayValue;
var operator = "";
var storedValue;
var equalsPressed = false;

function add(a,b) {
  return a+b;
}

function multiply(a,b) {
  return a*b;
}

function subtract(a,b) {
  return a-b;
}

function divide(a,b) {
  return a/b;
}

function eraseOperator() {
  operator = "";
}

function operate(a,b,operator) {
  switch(true) {
    case operator == "+":
        topDisplay.innerHTML = topDisplay.innerHTML + displayValue + "=" + add(a,b);
        bottomDisplay.innerHTML = "";
        storedValue = "";
        equalsPressed = true;
        return displayValue = add(a,b);
        break;
    case operator == "-":
        topDisplay.innerHTML = topDisplay.innerHTML + displayValue + "=" + subtract(a,b);
        bottomDisplay.innerHTML = "";
        storedValue = "";
        equalsPressed = true;
        return displayValue = subtract(a,b);
        break;
    case operator == "*":
        topDisplay.innerHTML = topDisplay.innerHTML + displayValue + "=" + multiply(a,b);
        bottomDisplay.innerHTML = "";
        storedValue = "";
        equalsPressed = true;
        return displayValue = multiply(a,b);
        break;
    case operator == "÷":
        if (b==0) {
            bottomDisplay.innerHTML = "You can't divide by zero!";
            break;
        }
        topDisplay.innerHTML = topDisplay.innerHTML + displayValue + "=" + divide(a,b);  
        bottomDisplay.innerHTML = "";
        storedValue = "";
        equalsPressed = true;
        return displayValue = divide(a,b);
        break;
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
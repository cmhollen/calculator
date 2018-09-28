var display = document.querySelector('.display');
var numbers = document.querySelectorAll('.nums');
var operators = document.querySelectorAll('.operators');
var clear = document.querySelector('.clear');
var equals = document.querySelector('.equals');
var decimal = document.querySelector('.decimal');
var backspace = document.querySelector('.backspace');
var operator, result, eval;
var value = '';
var num1 = 0;
var num2 = 0;


var output = [];
var opArr = [];

function operate(operator, num1, num2){
    if (operator === "+"){
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*"){
        return num1 * num2;
    } else if (operator === "/"){
        if (num2 === 0) {
            return 'Error'
        } else {
            return num1 / num2;
        }
    } else if (operator === '%'){
        return num1 % num2;
    }
}

numbers.forEach((num) => {
    num.addEventListener('click', numberAct)
})

function numberAct(e) {
    value += e.target.textContent;
    display.textContent = value;
}

decimal.addEventListener('click', decAct)


function decAct(e){
    if (!value.includes('.')){
        value += e.target.textContent;
        display.textContent = value;
      } else if (value.includes('.')){
          value = value;
      }
}

operators.forEach((op) => {
    op.addEventListener('click', opAct)
})

function opAct(e){
    output.push(Number(value));
    operator = e.target.textContent
    output.push(operator);
    opArr.push(operator);
    value = '';
}


equals.addEventListener('click', runCalc);

function calc(op) {
        operator = output[output.indexOf(op)];
        num1 = output[output.indexOf(op) - 1];
        num2 = output[output.indexOf(op) + 1];
        result = operate(operator, num1, num2);
        output.splice(output.indexOf(op) - 1, 3, result);
}

function runCalc() {
    output.push(Number(value));
    
  
  for (var i = 1; i <= opArr.length; i++){
    if (output.includes('*')) {
        calc('*');
    } else if (output.includes('/')){
        calc('/');
    } else if (output.includes('%')){
        calc('%')
    } else if (output.includes('+')){
        calc('+');
    } else if (output.includes('-')){
        calc('-');
    }
  }
    
   display.textContent = result;
}

backspace.addEventListener('click', backAct)

function backAct(){
    var backArr = value.split('')
    backArr.pop();
    value = backArr.join('');
    display.textContent = value;
}



document.addEventListener('keypress', pressKeys)

function pressKeys(keyEvent){
    var pressedKey = keyEvent.key;

    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(pressedKey)){
        value += pressedKey;
        display.textContent = value;
    } else if (['.'].includes(pressedKey)){
       if (!value.includes('.')){
        value += pressedKey;
        display.textContent = value;
       } else if (value.includes('.')){
          value = value;
        }
    } else if (['%', '/', '*', '-', '+'].includes(pressedKey)){
        output.push(Number(value));
        operator = pressedKey;
        output.push(operator);
        opArr.push(operator);
        value = '';
    } else if (['=', 'Enter'].includes(pressedKey)){
        runCalc();
    } else if (['c', 'C'].includes(pressedKey)){
        clearAct();
    } else if (keyEvent.keyCode === '8', '46'){
        backAct();
    } 
}

clear.addEventListener('click', clearAct)

function clearAct(){
    display.textContent = '';
    value = '';
    result = 0;
    num1 = 0;
    num2 = 0;
    output = [];
    opArr = [];
}
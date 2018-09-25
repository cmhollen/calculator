var display = document.querySelector('.display');
var numbers = document.querySelectorAll('.nums');
var operators = document.querySelectorAll('.operators');
var clear = document.querySelector('.clear');
var equals = document.querySelector('.equals');
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
    }
}

numbers.forEach((num) => {
    num.addEventListener('click', (e) => {
            value += e.target.textContent;
            display.textContent = value;
         
    })
})

operators.forEach((op) => {
    op.addEventListener('click', (e) => {
        output.push(Number(value));
        operator = e.target.textContent
        output.push(operator);
        opArr.push(operator);
        value = '';
    })
})


equals.addEventListener('click', runCalc);

function calc(op) {
        operator = output[output.indexOf(op)];
        console.log(output.indexOf(op))
        num1 = output[output.indexOf(op) - 1];
        num2 = output[output.indexOf(op) + 1];
        result = operate(operator, num1, num2);
        output.splice(output.indexOf(op) - 1, 3, result);
}

function runCalc() {
    output.push(Number(value));
    console.log(output)
  
  for (var i = 1; i <= opArr.length; i++){
    if (output.includes('*')) {
        calc('*');
    } else if (output.includes('/')){
        calc('/');
    } else if (output.includes('+')){
        calc('+');
    } else if (output.includes('-')){
        calc('-');
    }
  }
    
   display.textContent = result
}

clear.addEventListener('click', () => {
    display.textContent = '';
    value = '';
    result = 0;
    num1 = 0;
    num2 = 0;
    output = [];
    opArr = [];
    
})
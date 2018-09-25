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
        opArr.push(operator);
        value = '';
    })
})


equals.addEventListener('click', runCalc);

function runCalc() {
    output.push(Number(value));
    
    if (output.length > 2){
        operator = opArr.shift();
        num1 = output[0];
        num2 = output[1];
        result = operate(operator, num1, num2);
        for (var i = 1; i <= output.length - 2; i++){
            console.log(result)
            num1 = result;
            num2 = output[i + 1];
            operator = opArr.shift();
            console.log(num1)
            console.log(num2)
            console.log(i)
            result = operate(operator, num1, num2);
        }
    } else {
        operator = opArr.shift();
        num1 = output[0];
        num2 = output[1];
        result = operate(operator, num1, num2);
        console.log(result)
    }
      
    
    
    display.textContent = result;
}

clear.addEventListener('click', () => {
    display.textContent = '';
    value = '';
    result = 0;
    num1 = 0;
    num2 = 0;
    
})
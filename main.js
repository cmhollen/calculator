var display = document.querySelector('.display');
var numbers = document.querySelectorAll('.nums');
var operators = document.querySelectorAll('.operators');
var clear = document.querySelector('.clear');
var equals = document.querySelector('.equals');
var operator, result, history;
var value = '';
var num1 = 0;
var num2 = 0;
var formula;

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
        if (num1 !== 0 && num2 !== 0){
            history = operate(operator, num1, num2);
            num1 = history;
            num2 = 0;
        }
        
        if (num1 === 0) {
            num1 = +value;
        } else {
            num2 = +value;
        }
        operator = e.target.textContent
        value = '';
        
        console.log(num1)
        console.log(num2)
    })
})

equals.addEventListener('click', () => {
    if (num1 === 0) {
        num1 = +value;
    } else {
        num2 = +value;
    }
    result = operate(operator, num1, num2);
    display.textContent = result;
    console.log(result)
})

clear.addEventListener('click', () => {
    display.textContent = '';
    value = '';
    result = 0;
    num1 = 0;
    num2 = 0;
    
})
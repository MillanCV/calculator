let operatorOne = 0;
let operatorTwo = 0;
let previousResult = 0;
let result = 0;
let operator = null;



const buttonC = document.querySelector('.button.c');
const buttonArrow = document.querySelector('.button.arrow');
const buttonDivide = document.querySelector('.button.divide');
const buttonMult = document.querySelector('.button.mult');
const buttonMinus = document.querySelector('.button.minus');
const buttonPlus = document.querySelector('.button.plus');
const buttonEqual = document.querySelector('.button.equal');
const button0 = document.querySelector('.button.zero');
const button1 = document.querySelector('.button.one');
const button2 = document.querySelector('.button.two');
const button3 = document.querySelector('.button.three');
const button4 = document.querySelector('.button.four');
const button5 = document.querySelector('.button.five');
const button6 = document.querySelector('.button.six');
const button7 = document.querySelector('.button.seven');
const button8 = document.querySelector('.button.eight');
const button9 = document.querySelector('.button.nine');

function concatNum(previousNum, operand){
    return previousNum * 10 + operand;
}

function newNumber(operand){
    if (!operator) {
        previousResult = operatorOne;
        operatorOne = concatNum(operatorOne, operand);
        writeNumber(operatorOne);
    }
    else {
        previousResult = operatorOne;
        operatorTwo = concatNum(operatorTwo, operand);
        writeNumber(operatorTwo);
    }
}


function writeNumber(value){
    const numberResult = document.querySelector('.number-result');
    numberResult.innerText = value;
}

buttonC.addEventListener('click', function(){
    operatorOne = 0;
    operatorTwo = 0;
    result = 0;
    operator = null;
    writeNumber(0);
});

buttonArrow.addEventListener('click', function(){
    if (!operator) {
        operatorOne = previousResult;
        writeNumber(operatorOne);
    }
    else {
        operatorTwo = previousResult;
        writeNumber(operatorTwo);
    }
});

buttonDivide.addEventListener('click', function(){
    operator = "/";
});

buttonMult.addEventListener('click', function(){
    operator = "*";
});

buttonMinus.addEventListener('click', function(){
    operator = "-";
});

buttonPlus.addEventListener('click', function(){
    operator = "+";
});

buttonEqual.addEventListener('click', function(){
    if (operator === "+"){
        result = operatorOne + operatorTwo;
    }
    else if (operator === "-"){
        result = operatorOne - operatorTwo;
    }
    else if (operator === "*"){
        result = operatorOne * operatorTwo;
    }
    else if (operator === "/"){
        result = operatorOne / operatorTwo;
    }
    operatorOne = result
    operatorTwo = 0;
    writeNumber(result);
    console.log(operator)
});

button0.addEventListener('click', function(){
    newNumber(0)
});

button1.addEventListener('click', function(){
    newNumber(1)
});

button2.addEventListener('click', function(){
    newNumber(2)
});

button3.addEventListener('click', function(){
    newNumber(3)
});

button4.addEventListener('click', function(){
    newNumber(4)
});

button5.addEventListener('click', function(){
    newNumber(5)
});

button6.addEventListener('click', function(){
    newNumber(6)
});

button7.addEventListener('click', function(){
    newNumber(7)
});

button8.addEventListener('click', function(){
    newNumber(8)
});

button9.addEventListener('click', function(){
    newNumber(9)
});
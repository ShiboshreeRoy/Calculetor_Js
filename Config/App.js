
const display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert('Invalid input');
        clearDisplay();
    }
}

function calculateSquareRoot() {
    display.value = Math.sqrt(eval(display.value));
}

function calculatePower() {
    display.value = Math.pow(eval(display.value), 2);
}

function calculateFactorial() {
    let number = eval(display.value);
    if (number < 0) {
        alert('Factorial of negative number is undefined');
        clearDisplay();
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    display.value = factorial;
}

function calculateSin() {
    display.value = Math.sin(toRadians(eval(display.value)));
}

function calculateCos() {
    display.value = Math.cos(toRadians(eval(display.value)));
}

function calculateTan() {
    display.value = Math.tan(toRadians(eval(display.value)));
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

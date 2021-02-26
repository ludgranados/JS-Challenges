// === Create a simple calculator app ===
// 1. On your web page, add a button that triggers a confirm
// asking the user if they would like to calculate two numbers

// 2. if they confirm it should then trigger a prompt
// that asks if they would like to 'add', 'subtract',
// 'multiply' or 'divide' the two values
// then trigger prompts that asks for the number values
// And finally an alert that lets the user know the result of their values
// Create a js-challenge-three.html and js-challenge-three.js file and submit
//to github when you are done
// Aside: Create separate functions to run different tasks. And feel free to
//make your code as dynamic and efficient as you see fit




// simple calculator


function calc () {
let question = prompt('Would you like to calculate two numbers? Enter yes or no.')
// debugger;

if (question == 'Yes') {

    // operator input
    let operator = prompt('Enter the operator you would like to use ( +, -, * or / ): ');

    // debugger;

    // operand input
    let number1 = parseFloat(prompt('Enter the first number you would like to use!'));
    let number2 = parseFloat(prompt('Enter the second number you would like to use!'));


    let result;

    // if...else if... else to add, subtract, multiply, or divide
    if (operator == '+') {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2;
    }
    else {
        result = number1 / number2;
    }
    alert('The answer is ' + result);
    }
// debugger;

else if (question == 'yes') {

    // operator input
    let operator = prompt('Enter the operator you would like to use ( +, -, * or / ): ');

    // debugger;

    // operand input
    let number1 = parseFloat(prompt('Enter the first number you would like to use!'));
    let number2 = parseFloat(prompt('Enter the second number you would like to use!'));


    let result;

    // if...else if... else to add, subtract, multiply, or divide
    if (operator == '+') {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2;
    }
    else {
        result = number1 / number2;
    }
    alert('The answer is ' + result);
    }
// debugger;

if (question == 'No') {
    alert('Thank you for your time, good day to you!')
}
else if (question == 'no') {
    alert('Thank you for your time, good day to you!')
}
};

// calc();


/** Styles */

document.getElementById(col).style.marginLeft= "50%";
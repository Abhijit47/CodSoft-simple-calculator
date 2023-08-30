// add event listener when the dom is loaded successfully.
document.addEventListener('DOMContentLoaded', function () {
  // input and buttons references gather
  const display = document.getElementById('display');
  const numButtons = document.querySelectorAll('.num');
  const operatorButtons = document.querySelectorAll('.operator');
  const clearButton = document.getElementById('clear');
  const calculateButton = document.getElementById('calculate');

  // initial values;
  let currentInput = '';
  let currentOperator = '';
  let previousInput = '';

  // add event listeners for every number buttons using for...Each
  numButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // current input increment +1 with each button text content
      currentInput += button.textContent;
      // display the value of current input
      display.value = currentInput;
    });
  });

  // add event listeners for every operator buttons using for...Each
  operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // check if the current input is empty or not
      if (currentInput !== '') {
        // previous input will be the current input
        previousInput = currentInput;
        // clear the current input
        currentInput = '';
        // current operator will be the which operator button i pressed
        currentOperator = button.textContent;
      }
    });
  });

  // add event listener for clear button
  clearButton.addEventListener('click', () => {
    // clear out all values to the initial point
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    display.value = '';
  });

  // add event listeners for calculate button '='
  calculateButton.addEventListener('click', () => {
    // check if the current input and current operator and previous input is empty or not
    if (currentInput !== '' && currentOperator !== '' && previousInput !== '') {
      // parse string to number
      const num1 = parseFloat(previousInput);
      const num2 = parseFloat(currentInput);
      // define a result variable
      let result;

      // check conditions using switch case statement
      switch (currentOperator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        default:
          result = 0;
      }

      // display the calculated value
      display.value = result;
      // convert the result to string using toString method
      currentInput = result.toString();
      // initialize empty the current operator and previous input
      currentOperator = '';
      previousInput = '';
    }
  });
});

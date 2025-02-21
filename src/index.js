   // dom
   document.addEventListener('DOMContentLoaded', () => {
    const buttonsContainer = document.getElementById('buttons');
    const display = document.getElementById('display');
    
    //data for buttons
    const data = [
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=', '/'],
        ['CE', 'C']
      ];

  //create buttons
    data.forEach(row => {
      row.forEach(value => {
        const button = document.createElement('button');
        button.innerText = value;
        button.addEventListener('click', () => handleButtonClick(value));
        buttonsContainer.appendChild(button);
        
      });
    });
  
    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';
  //handle button click
    const handleButtonClick = (value) => {
      if (value === 'CE') {
        currentInput = '';
        firstOperand = '';
        secondOperand = '';
        operator = '';
        display.value = '';
      } else if (value === 'C') {
        currentInput = '';
        display.value = '';
      } else if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput !== '') {
          firstOperand = currentInput;
          operator = value;
          currentInput = '';
        }
      } else if (value === '=') {
        if (currentInput !== '' && firstOperand !== '' && operator !== '') {
          secondOperand = currentInput;
          const result = calculate(parseFloat(firstOperand), parseFloat(secondOperand), operator);
          display.value = result;
          currentInput = result.toString();
          firstOperand = '';
          secondOperand = '';
          operator = '';
        }
      } else {
        currentInput += value;
        display.value = currentInput;
      }
    }
  
    //calculate function
    const calculate = (a, b, op) => {
      switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return 0;
      }
    }
  });
  
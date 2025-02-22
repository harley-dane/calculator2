// data
const data = [
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=', '/'],
  ['CE', 'C']
];

// dom
const calculator = document.getElementById('calculator');

// Create display
let expression = '';

const display = document.createElement('input');
display.className = 'display';
display.value = '0';
display.readOnly = true;
calculator.appendChild(display);

// Create buttons
data.forEach(rowData => {
  const row = document.createElement('div');
  row.className = 'row';
  
  rowData.forEach(value => {
      const button = document.createElement('button');
      button.textContent = value;
      button.addEventListener('click', () => {
          if (value === 'C') {
              expression = '';
              display.value = '0';
          } else if (value === 'CE') {
              expression = expression.slice(0, -1);
              display.value = expression || '0';
          } else if (value === '=') {
              try {
                  expression = eval(expression).toString();
                  display.value = expression;
              } catch {
                  display.value = 'Error';
                  expression = '';
              }
          } else {
              expression += value;
              display.value = expression;
          }
      });
      row.appendChild(button);
  });
  
  calculator.appendChild(row);
});
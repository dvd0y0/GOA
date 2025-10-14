// # 1
function sum(a, b) {
  return a + b;
}

// # 2
function multiply(a, b) {
  return a * b;
}

// # 3
function subtract(a, b) {
  return a - b;
}

// # 4
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero!";
  }
  return a / b;
}


export { sum, multiply, subtract, divide };

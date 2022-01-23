function calc(operation, a, b) {
  if (a === undefined || b === undefined) {
    return "Error";
  }
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
    case "%":
      return a % b;
    case "**":
      return a ** b;
    default:
      return "unknown operation";
  }
}

let result = calc("*", 6, 4);
let result = calc("+", 6, 4);
let result = calc("/", 6, 4);

console.log(result);

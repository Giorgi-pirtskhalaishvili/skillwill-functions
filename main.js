// Task #1

function equal(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return `ტოლია `;
  } else {
    return `არ არის ტოლი`;
  }
}

equal();

//  task #2

function intoCelcius(farenheit) {
  if (typeof farenheit === "number") {
    return ((farenheit - 32) * 5) / 9;
  } else {
    return false;
  }
}

intoCelcius();

// Task 3

function operations(a, b, operation) {
  if (operation === "plus") {
    return a + b;
  } else if (operation === "subtruct") {
    return a - b;
  } else if (operation === "multuply") {
    return a * b;
  } else if (operation === "devide") {
    return a / b;
  } else if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    operation !== true
  ) {
    return false;
  }
}
const sum = operations(5, 4, "plus");
console.log(sum);

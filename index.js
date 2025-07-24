console.log("Fahrenheit is 86 degrees");

let convertToCelsius = 86;

function subtract(convertToCelsius, num32) {
  return convertToCelsius - num32;
}

function multiply(difference, num5) {
  return difference * num5;
}

function divide(product, num9) {
  return product / num9;
}

const difference = subtract(convertToCelsius, 32);
const product = multiply(difference, 5);
const quotient = divide(product, 9);
console.log("The Temperature is", quotient, "degrees celsius");

let describeTemperature = quotient;

if (describeTemperature < 0) {
  console.log("Very cold");
} else if (describeTemperature < 20) {
  console.log("Cold");
} else if (describeTemperature < 30) {
  console.log("Warm");
} else if (describeTemperature < 40) {
  console.log("Hot");
} else if (describeTemperature >= 40) {
  console.log("Very hot");
}

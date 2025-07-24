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

if (quotient < 0) {
  ("Very cold");
} else if (quotient < 20) {
  describeTemperature = "Cold";
} else if (quotient < 30) {
  describeTemperature = "Warm";
} else if (quotient < 40) {
  describeTemperature = "Hot";
} else if (quotient >= 40) {
  describeTemperature = "Very hot";
}

alert(
  "The Temperature in Degrees Celsius is" +
    " " +
    quotient +
    ", " +
    "it is" +
    " " +
    describeTemperature +
    "."
);

let describeTemperature = 50;

if (describeTemperature < 0) {
  ("Very cold");
} else if (describeTemperature < 20) {
  ("Cold");
} else if (describeTemperature < 30) {
  ("Warm");
} else if (describeTemperature < 40) {
  ("Hot");
} else if (describeTemperature >= 40) {
  console.log("Very hot");
}

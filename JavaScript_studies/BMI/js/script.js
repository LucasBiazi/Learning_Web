// Declaring the main function
function calculate() {
  // Getting the height + weight values
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  // Calculating the BMI
  result = weight / height ** 2;
  // Verifying if the values are null
  if (weight == 0 || height == 0) {
    document.getElementById("result").textContent =
      "Fill the values correctly!";
  }
  // Rouding the value to 2 decimals.
  result = parseInt(result.toFixed(2));
  // Verification based on the result
  if (result < 15) {
    document.getElementById("result").textContent =
      "Very Severely underweight. BMI: " + result;
  } else if (result > 15 && result < 16) {
    document.getElementById("result").textContent =
      "Severely underweight. BMI: " + result;
  } else if (result > 16 && result < 18.5) {
    document.getElementById("result").textContent =
      "Underweight. BMI: " + result;
  } else if (result > 18.5 && result < 25) {
    document.getElementById("result").textContent = "Normal. BMI: " + result;
  } else if (result > 25 && result < 30) {
    document.getElementById("result").textContent =
      "Overweight. BMI: " + result;
  } else if (result > 30 && result < 35) {
    document.getElementById("result").textContent =
      "Moderately Obese. BMI: " + result;
  } else if (result > 35 && result < 40) {
    document.getElementById("result").textContent =
      "Severely Obese. BMI: " + result;
  } else if (result > 40) {
    document.getElementById("result").textContent =
      "Very Severely Obese. BMI: " + result;
  }
}

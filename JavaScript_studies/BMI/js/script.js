// Declaring the main function
function calculate() {
  // Getting the height + weight values
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  // Calculating the BMI
  result = weight / height ** 2;
  // Verifying if the values are null
  if (weight == 0 || height == 0) {
    document.getElementById("result2").textContent =
      "Fill the values correctly!";
  }
  // Rouding the value to 2 decimals.
  result = result.toFixed(2);
  // Verification based on the result
  if (result < 15) {
    document.getElementById("result").textContent = "BMI: " + result;
    document.getElementById("result2").textContent =
      "Very Severely underweight";
  } else if (result > 15 && result < 16) {
    document.getElementById("result").textContent = "BMI: " + result;
    document.getElementById("result2").textContent = "Severely underweight";
  } else if (result > 16 && result < 18.5) {
    document.getElementById("result").textContent = "BMI: " + result;
    document.getElementById("result2").textContent = "Underweight";
  } else if (result > 18.5 && result < 25) {
    document.getElementById("result").textContent = "BMI: " + result;
    document.getElementById("result2").textContent = "Normal";
  } else if (result > 25 && result < 30) {
    document.getElementById("result").textContent = "BMI: " + result;
    document.getElementById("result2").textContent = "Overweight";
  } else if (result > 30 && result < 35) {
    document.getElementById("result").textContent = "BMI: " + result;
    document.getElementById("result2").textContent = "Moderately Obese";
  } else if (result > 35 && result < 40) {
    document.getElementById("result").textContent = "BMI: " + result;
    document.getElementById("result2").textContent = "Severely Obese";
  } else if (result > 40) {
    document.getElementById("result").textContent = "BMI: " + result;
    document.getElementById("result2").textContent = "Very Severely Obese";
  }
}

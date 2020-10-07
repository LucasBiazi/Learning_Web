// Action when the checkbox is toggled
function revert_measures() {
  // If it was toggled, then change the measure values and labels content
  if (document.getElementById("measures").checked) {
    document.getElementById("main_measure_label").textContent = "Km";
    document.getElementById("second_measure_label").textContent = "miles";
    let multiplicator = 0.6;
    return multiplicator;
  } else {
    document.getElementById("main_measure_label").textContent = "Miles";
    document.getElementById("second_measure_label").textContent = "km";
    let multiplicator = 1.6;
    return multiplicator;
  }
}

function Calculate() {
  // Based if the checkbox is toggled or not, do the calculus with the value:
  let multiplicator = revert_measures();
  let main_measure_value = document.getElementById("main_measure_value").value;
  document.getElementById("second_measure_value").textContent = (
    main_measure_value * multiplicator
  ).toFixed(2);
}

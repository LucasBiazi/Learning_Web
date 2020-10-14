// Check if the user clicked inside the form, future implementation.
function click(click) {
  const pop_up = document.getElementById("pop_up");

  if (pop_up.contains(click.target)) {
    // Clicks inside.
  } else {
    // Clicks outside.
    close_form();
  }
}

// Ads an eventListener to check where the user clicked,
// future implementation.
function click_verification() {
  setTimeout(function () {
    window.addEventListener("click", click(click));
  }, 500);
}

// We give the 'dysplay_form' class, which has the display:flex property,
// hence the form is now visible.
function display_form() {
  const pop_up = document.getElementById("pop_up");
  pop_up.classList.add("display_form");
}

// By taking the 'display_form' class away, we take the property
// display: flex, hence, its visibility.
function close_form() {
  const pop_up = document.getElementById("pop_up");
  // Triggers animation.
  pop_up.classList.add("closes_form");
  // After animation: will get rid of the form.
  setTimeout(function () {
    pop_up.classList.remove("closes_form");
    pop_up.classList.remove("display_form");
  }, 300); // 300 miliseconds = .3 seconds.
}

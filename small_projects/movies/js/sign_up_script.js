const sign_up_user = (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const ps1 = document.getElementById("password1");
  const ps2 = document.getElementById("password2");

  if (ps1.value != ps2.value) {
    alert("The passwords do not match.");
  } else if (ps1.value.length <= 8) {
    alert("Password must have more than 8 characters.");
  } else if (ps1.value.length >= 30) {
    alert("Password must have less than 30 characters.");
  } else {
    // Sign up user
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("sign_up").addEventListener("click", sign_up_user);
});

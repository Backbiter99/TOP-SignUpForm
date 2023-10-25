const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

function validatePassword() {
  if (password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords do not match");
  } else confirmPassword.setCustomValidity("");
}

password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validatePassword);

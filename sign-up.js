const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

function validatePasswords() {
  if (password.value !== confirmPassword.value) {
    confirmPassword.style.outline = "2px solid red";
    confirmPassword.style.border = "1px solid red";
    confirmPassword.style.backgroundColor = "#ffe6e6";
  } else {
    confirmPassword.style.outline = "";
    confirmPassword.style.border = "";
    confirmPassword.style.backgroundColor = "";
  }
}

password.addEventListener("input", validatePasswords);
confirmPassword.addEventListener("input", validatePasswords);

document.querySelector("form").addEventListener("submit", function (event) {
  validatePasswords();

  if (password.value !== confirmPassword.value) {
    event.preventDefault();
  }
});

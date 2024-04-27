//firstname-error
const input = document.querySelector("#first-name");
document.getElementById("submit-button").addEventListener("click", function () {
  var firstName = document.getElementById("first-name").value;
  var firstNameError = document.getElementById("first-name-error");
  if (firstName.length == 0) {
    firstNameError.style.display = "block";
    input.style.border = "2px solid red";
    // span.classList.add("first-name-error");
    input.classList.add("input-form-error");
  } else {
    firstNameError.style.display = "none";
  }
});

//lastname error
const lastNameInput = document.querySelector("#last-name");
document.getElementById("submit-button").addEventListener("click", function () {
  var lastName = document.getElementById("last-name").value;
  var lastNameError = document.getElementById("last-name-error");
  if (lastName.length == 0) {
    lastNameError.style.display = "block";
    lastNameInput.style.border = "2px solid red";
    lastNameInput.classList.add("input-form-error");
  }
});

//email-error
const emailInput = document.querySelector("#e-mail");
document.getElementById("submit-button").addEventListener("click", function () {
  var email = document.getElementById("e-mail").value;
  var emailError = document.getElementById("email-error");
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.style.display = "block";
    emailInput.style.border = "2px solid red";
    emailInput.placeholder = "email@example/com";
    emailInput.classList.add("input-form-error");
  }
});

//password error
const passwordInput = document.querySelector("#password");
document.getElementById("submit-button").addEventListener("click", function () {
  var password = document.getElementById("password").value;
  var passwordError = document.getElementById("password-error");
  if (password.length == 0) {
    passwordError.style.display = "block";
    passwordInput.style.border = "2px solid red";
    passwordInput.classList.add("input-form-error");
  } else {
    password.placeholder = "Email Address";
    // password.classList.remove("input-form-error");
  }
});

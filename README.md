# Signup-Form

Hello everybody! 👋 </br>
✨ Welcome to the Signup Form project! In this project, we have created a simple signup form using HTML, CSS, and JavaScript. The purpose of this form is to allow users to sign up for our service by providing their basic information.

## 👀 Overview

### 📷 Screenshot
![screencapture-127-0-0-1-3000-index-html-2024-04-26-11_07_11](https://github.com/tucecifci/Signup-Form/assets/151346784/769bcb01-4845-4515-a492-9d15bbcfeb65)


![screencapture-127-0-0-1-3000-index-html-2024-04-26-11_07_24](https://github.com/tucecifci/Signup-Form/assets/151346784/43e6c498-dd20-4f43-9d81-d5609e93a2bd)


### 🔗 Links

- https://tucecifci.github.io/Signup-Form/

## My process

### 💡 Built with

The Signup Form is built using the following technologies:

- HTML: For creating the structure of the signup form.
- CSS: For styling the form and adding visual enhancements.
- JavaScript: For implementing client-side validation and form submission functionality.

### 🧠 What I learned

During the development of this project, I gained valuable experience in the following areas:

- Implementing client-side form validation using JavaScript.
- Working with HTML form elements and attributes.
- Styling forms and enhancing user experience with CSS.
- Managing form submissions and handling errors gracefully.
- Understanding the importance of user-friendly interfaces and feedback mechanisms in web development.

```javascript
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
```

### 👩🏼‍💻 Features

- Input Fields: The form includes input fields for the user's name, email address, password, and confirmation password.
- Validation: We have implemented client-side validation to ensure that the user's inputs are valid before submitting the form. This includes checking for empty fields, valid email format, and password strength.
- Password Confirmation: The user is required to confirm their password by entering it twice. We have added validation to ensure that the passwords match.
- Submit Button: Once all inputs are valid, the user can submit the form by clicking the submit button.
- Error Messages: If any validation errors occur, error messages are displayed to the user to indicate what needs to be corrected.

### 🤔 How to Use

To run the Signup Form project locally on your machine, follow these steps:

- Clone this repository to your local machine.
- Navigate to the project directory.
- Open the index.html file in your web browser.

### 🤌🏻 Useful resources

- [https://www.goodreads.com/quotes](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1)
- https://www.freecodecamp.org/news/learn-how-to-manipulate-css-with-javascript-by-coding-a-dynamic-picture-frame/
- https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

## 🏳️‍🌈 Author

- Tuğçe Çifci - [@tucecifci](https://github.com/tucecifci)
- Frontend Mentor - [@tucecifci](https://www.frontendmentor.io/profile/tucecifci)

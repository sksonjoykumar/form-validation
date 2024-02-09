// Selected all HTML Form ID
const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confromPass");

// from addEventListener
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   if (firstName.value === "") {
//     showError(firstName, "First Name is required!");
//   } else {
//     showSuccess(firstName);
//   }
//   if (lastName.value === "") {
//     showError(lastName, "Last Name is required!");
//   } else {
//     showSuccess(lastName);
//   }
//   if (email.value === "") {
//     showError(email, "Email is required!");
//   } else if (!isValidEmail(email.value)) {
//     showError(email, "Email is not valid!");
//   } else {
//     showSuccess(email);
//   }
//   if (password.value === "") {
//     showError(password, "Password is required!");
//   } else {
//     showSuccess(password);
//   }
//   if (password2.value === "") {
//     showError(password2, "Conform password is required!");
//   } else {
//     showSuccess(password2);
//   }
// });

// ShowError function
function showError(input, message) {
  const formCheck = input.parentElement;
  formCheck.className = "form-check error";
  const small = formCheck.querySelector("small");
  small.innerText = message;
}

// showSuccess function
function showSuccess(input) {
  const formCheck = input.parentElement;
  formCheck.className = "form-check success";
}

// Another from addEventListener
form.addEventListener("submit", function (q) {
  q.preventDefault();
  formRequired([firstName, lastName, email, password, password2]);
  checkLength(firstName, 4, 15);
  checkLength(lastName, 4, 15);
  checkLength(password, 6, 20);
  checkLength(password2, 6, 20);
  checkPassword(password, password2);
  isValidEmail(email);
});
// formRequired function
function formRequired(formArr) {
  formArr.forEach(function (ipt) {
    if (ipt.value.trim() === "") {
      //   showError(ipt, getInputName(ipt) + " " + "is required");
      showError(ipt, `${getInputName(ipt)} is required!`);
    } else {
      showSuccess(ipt);
    }
  });
}

// get inputName function
function getInputName(ipt) {
  return `${ipt.id.charAt(0).toUpperCase()}${ipt.id.slice(1)}`;
}
// isValidEmail function
function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(email.value.trim())) {
    showSuccess(email);
  } else {
    showError(email, "Email is not Valid!");
  }
}

// CheckLength function
function checkLength(inputValue, min, max) {
  if (inputValue.value.length < min) {
    showError(
      inputValue,
      `${getInputName(inputValue)} must be at least ${min} characters!`
    );
  } else if (inputValue.value.length > max) {
    showError(
      inputValue,
      `${getInputName(inputValue)} must be less then ${max} characters!`
    );
  } else {
    showSuccess(inputValue);
  }
}

// Check Password function
function checkPassword(passOne, passTwo) {
  if (passOne.value !== passTwo.value) {
    showError(passTwo, `Do not match password!`);
  }
}

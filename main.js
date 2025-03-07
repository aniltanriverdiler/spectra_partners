// Form Validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const inputs = form.querySelectorAll("input, textarea");
  const submitButton = document.getElementById("submitButton");

  function checkForm() {
    let allValid = true;
    inputs.forEach((input) => {
      if (!input.value.trim() || !input.checkValidity()) {
        allValid = false;
      }
    });
    submitButton.disabled = !allValid;
  }

  function showValidationFeedback(input) {
    if (input.checkValidity()) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      checkForm();
      showValidationFeedback(input);
    });

    input.addEventListener("blur", () => {
      showValidationFeedback(input);
    });
  });

  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add("was-validated");
  });
});

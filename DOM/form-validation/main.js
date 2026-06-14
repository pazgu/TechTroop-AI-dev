function validate() {
  const nameInput = document.getElementById("nameInput");
  const salaryInput = document.getElementById("salaryInput");
  const birthdayInput = document.getElementById("birthdayInput");
  const phoneInput = document.getElementById("phoneInput");
  const errorContainer = document.getElementById("errorContainer");

  errorContainer.innerHTML = "";

  const name = nameInput.value.trim();
  const salary = parseInt(salaryInput.value);
  const birthday = birthdayInput.value;
  const phone = phoneInput.value.trim();

  let errors = [];

  if (name.length <= 2) {
    errors.push("name must be longer than 2 characters.");
  }

  if (isNaN(salary) || salary <= 10000 || salary >= 16000) {
    errors.push("salary must be between 10,000 and 16,000 shekels.");
  }

  if (!birthday) {
    errors.push("birthday is required.");
  }
  if (phone.length !== 10 || isNaN(phone)) {
    errors.push("phone number must contain exactly 10 digits.");
  }

  if (errors.length > 0) {
    errors.forEach((errorText) => {
      const errorDiv = document.createElement("div");
      errorDiv.classList.add("error-message");
      errorDiv.textContent = `X ${errorText}`;
      errorContainer.appendChild(errorDiv);
    });
  } else {
    alert("Form submitted successfully! All data is valid.");

    nameInput.value = "";
    salaryInput.value = "";
    birthdayInput.value = "";
    phoneInput.value = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const validateButton = document.getElementById("validateButton");
  validateButton.addEventListener("click", validate);
});

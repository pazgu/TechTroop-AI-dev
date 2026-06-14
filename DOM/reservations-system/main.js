const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

function checkReservation() {
  const nameInput = document.getElementById("nameInput");
  const outputMessage = document.getElementById("outputMessage");

  const name = nameInput.value.trim();

  if (name === "") {
    outputMessage.textContent = "Please enter your name";
    return;
  }

  if (reservations[name]) {
    if (reservations[name].claimed === false) {
      outputMessage.textContent = `Welcome, ${name}`;
    } else {
      outputMessage.textContent =
        "Hmm, someone already claimed this reservation";
    }
  } else {
    outputMessage.textContent = "You have no reservation";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const checkButton = document.getElementById("checkButton");
  checkButton.addEventListener("click", checkReservation);
});

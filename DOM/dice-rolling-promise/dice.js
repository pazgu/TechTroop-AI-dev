function rollDice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isDropped = Math.random() <= 0.1;

      if (isDropped) {
        reject("The dice fell off the table, try again!");
        return;
      }

      const diceValue = Math.floor(Math.random() * 6) + 1;
      resolve(diceValue);
    }, 500);
  });
}

rollDice()
  .then((value) => {
    console.log("Dice rolled:", value);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

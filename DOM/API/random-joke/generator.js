generateJoke();

function generateJoke() {
  const jokeContainer = document.querySelector(".joke");

  jokeContainer.textContent = "Loading a funny joke... ⏳";

  setTimeout(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        const fullJoke = data.setup + " " + data.punchline;

        jokeContainer.textContent = fullJoke;
      })
      .catch((error) => {
        jokeContainer.textContent = "Oops! Failed to fetch a joke. Try again!";
        console.error(error);
      });
  }, 2000);
}

const btn = document.getElementById("generate-joke");
btn.addEventListener("click", generateJoke);

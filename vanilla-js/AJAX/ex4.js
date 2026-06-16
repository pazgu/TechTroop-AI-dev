fetchCatGif();

function fetchCatGif() {
  const apiKey = "iszo8udqhks6kWu6JzHRMnT90AJn7wBw";
  const searchQuery = "cats";

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&limit=1`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((responseObj) => {
      const gifArray = responseObj.data;

      if (gifArray.length > 0) {
        const firstGif = gifArray[0];

        const embedUrl = firstGif.embed_url;

        const container = document.getElementById("gif-container");
        container.innerHTML = `<iframe src="${embedUrl}"></iframe>`;
      } else {
        document.getElementById("gif-container").textContent =
          "No GIFs found! 🙀";
      }
    })
    .catch((error) => {
      console.error("Error fetching from GIPHY:", error);
      document.getElementById("gif-container").textContent =
        "Failed to load GIF. Check your API Key!";
    });
}

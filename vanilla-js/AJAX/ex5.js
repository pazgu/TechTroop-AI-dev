const apiKey = "iszo8udqhks6kWu6JzHRMnT90AJn7wBw";

const searchButton = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

searchButton.addEventListener("click", () => {
  const userQuery = searchInput.value.trim();

  if (userQuery === "") {
    alert("Please type something first!");
    return;
  }
  searchGif(userQuery);
});

function searchGif(query) {
  const container = document.getElementById("gif-container");
  container.textContent = "Searching for the perfect GIF... 🔍";

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=1`;

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
        const embedUrl = gifArray[0].embed_url;
        container.innerHTML = `<iframe src="${embedUrl}"></iframe>`;
      } else {
        container.textContent = `No GIFs found for "${query}"! 🤷‍♂️`;
      }
    })
    .catch((error) => {
      console.error("Error fetching from GIPHY:", error);
      container.textContent = "Failed to load GIF. Please try again! ";
    });
}

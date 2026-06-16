function fetchBook(queryType, queryValue) {
  const type = queryType.toLowerCase();

  const url = `https://openlibrary.org/search.json?q=${type}:${encodeURIComponent(queryValue)}`;

  console.log(`Searching for book where ${type} is "${queryValue}"... 🔍`);

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.docs && data.docs.length > 0) {
        const firstMatch = data.docs[0];

        console.log(`📖 Title: ${firstMatch.title}`);

        const authorNames = firstMatch.author_name
          ? firstMatch.author_name.join(", ")
          : "Unknown";
        console.log(`✍️ Author(s): ${authorNames}`);

        console.log("-----------------------------------");
      } else {
        console.log(`❌ No book found matching ${type}: "${queryValue}"`);
      }
    })
    .catch((error) => {
      console.error(`💥 Failed to fetch data:`, error.message);
    });
}

fetchBook("title", "The Wise Man's Fear");
fetchBook("isbn", "9789814561778");
fetchBook("title", "How to Win Friends and Influence People");

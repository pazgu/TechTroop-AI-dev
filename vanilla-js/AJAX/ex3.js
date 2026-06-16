function fetchBook(queryType, queryValue) {
  const type = queryType.toLowerCase();
  const url = `https://openlibrary.org/search.json?q=${type}:${encodeURIComponent(queryValue)}`;

  console.log(
    `🔎 Searching for ALL books where ${type} is "${queryValue}"...\n`,
  );

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.docs && data.docs.length > 0) {
        console.log(
          `✨ Found ${data.docs.length} books matching your search:\n`,
        );
        console.log("==================================================");

        data.docs.forEach((book, index) => {
          const title = book.title;

          const authors = book.author_name
            ? book.author_name.join(", ")
            : "Unknown Author";

          const isbn =
            book.isbn && book.isbn.length > 0
              ? book.isbn[0]
              : "No ISBN available";

          console.log(`${index + 1}. 📖 Title:  ${title}`);
          console.log(`   Author: ${authors}`);
          console.log(`   ISBN:   ${isbn}`);
          console.log("--------------------------------------------------");
        });
      } else {
        console.log(`No books found matching ${type}: "${queryValue}"`);
      }
    })
    .catch((error) => {
      console.error(`Failed to fetch data:`, error.message);
    });
}

fetchBook("title", "The Wise Man's Fear");
fetchBook("isbn", "9789814561778");
fetchBook("title", "How to Win Friends and Influence People");

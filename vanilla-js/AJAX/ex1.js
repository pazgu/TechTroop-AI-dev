function fetchBookByIsbn(isbn) {
  const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;

  console.log(`Searching Open Library for ISBN: ${isbn}... 🔍`);

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const bookKey = `ISBN:${isbn}`;

      if (data[bookKey]) {
        const bookInfo = data[bookKey];

        console.log(`📖 Title: ${bookInfo.title}`);

        if (bookInfo.authors && bookInfo.authors.length > 0) {
          const authorNames = bookInfo.authors
            .map((author) => author.name)
            .join(", ");
          console.log(`✍️ Author(s): ${authorNames}`);
        } else {
          console.log(`✍️ Author(s): Unknown`);
        }

        console.log("-----------------------------------");
      } else {
        console.log(`❌ No book found in Open Library for ISBN: ${isbn}`);
      }
    })
    .catch((error) => {
      console.error(`💥 Failed to fetch data:`, error.message);
    });
}

fetchBookByIsbn("9780575087057");
fetchBookByIsbn("9782806269171");
fetchBookByIsbn("1440633908");
fetchBookByIsbn("9781945048470");
fetchBookByIsbn("9780307417138");

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

  // comment and uncomment the three lines below to see the before and after of web page.
  let response = fetch("https://anapioficeandfire.com/api/books");
  response.then((resp) => resp.json()).then((json) => renderBooks(json));
  return response;
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});

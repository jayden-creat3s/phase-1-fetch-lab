// Function to fetch books from the Game of Thrones API
const fetchBooks = () => {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json()) // Convert the response to JSON
    .then((data) => {
      renderBooks(data); // Call renderBooks with the fetched data
    })
    .catch((error) => {
      console.error("Error fetching books:", error); // Handle any errors
    });
};

// Function to render the books on the webpage
const renderBooks = (books) => {
  const bookList = document.getElementById("book-list"); // Assuming there's an element with this ID
  bookList.innerHTML = ""; // Clear any existing content

  books.forEach((book) => {
    const listItem = document.createElement("li"); // Create a new list item
    listItem.textContent = book.name; // Set the text content to the book name
    bookList.appendChild(listItem); // Append the list item to the book list
  });
};

// Call fetchBooks when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", fetchBooks);

// Import dependencies
const express = require("express");
const cors = require("cors");

// Initialize Express app
const app = express();
const PORT = 5000;

// Enable CORS so frontend can make requests
app.use(cors());
app.use(express.json()); // Optional, in case you want to accept JSON in future

// Sample book data
const books = [
  { id: 1, title: "The Hobbit", genre: "Fantasy", author: "J.R.R. Tolkien" },
  { id: 2, title: "Harry Potter", genre: "Fantasy", author: "J.K. Rowling" },
  { id: 3, title: "1984", genre: "Dystopian", author: "George Orwell" },
  { id: 4, title: "Pride and Prejudice", genre: "Romance", author: "Jane Austen" },
  { id: 5, title: "The Great Gatsby", genre: "Fiction", author: "F. Scott Fitzgerald" }
];

// Route to get books by genre
app.get("/books", (req, res) => {
  const genre = req.query.genre;

  if (genre) {
    const filteredBooks = books.filter(
      (b) => b.genre.toLowerCase() === genre.toLowerCase()
    );
    return res.json(filteredBooks);
  }

  // Return all books if no genre is specified
  res.json(books);
});

// Start the backend server
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});

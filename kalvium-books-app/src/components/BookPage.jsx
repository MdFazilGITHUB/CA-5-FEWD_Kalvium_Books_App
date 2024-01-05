import React, { useEffect, useState } from "react";
import axios from "axios";

// BookPage component for displaying book information
function BookPage() {
  // State to store the list of books
  const [books, setBooks] = useState([]);
  // State to store the search query
  const [search, setSearch] = useState("");

  // Function to filter books based on the search query
  const filterBooks = () => {
    return books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  // Filtered books based on the search query
  const filteredBooks = filterBooks();

  // Fetch books from the API on component mount
  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => {
        setBooks(res.data.books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* Welcome section with user avatar and information */}
      <div className="welcome">
        <img
          src="https://kalvium.community/assets/launcher-hero-avatar.f66604dd.svg"
          alt=""
        />
        <div className="welcome-text">
          {/* Greet the user based on their stored first name */}
          <h1 className="userName">Hi {localStorage.getItem("firstName")} 👋</h1>
          {/* Display a message based on whether the user is registered */}
          <p>{localStorage.getItem("firstName") ? "It's good to see you." : "Never miss out. Register for instant updates."}</p>
        </div>
        {/* Image for the welcome section */}
        <img src="https://kalvium.community/images/launcher-hero-bg.svg" alt="" style={{
          height: "150px",
          position: "initial"
        }} />
      </div>
      {/* Search box for filtering books */}
      <div className="search">
        <div className="search-box">
          <img
            src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-1.png"
            alt="Search icon"
          />
          <input
            type="text"
            placeholder="Search our Library"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
      </div>
      {/* Grid for displaying filtered books */}
      <div className="grid">
        {filteredBooks.map((book, i) => (
          <div className="book-card" key={i}>
            {/* Display book cover image */}
            <img
              src={book.imageLinks.thumbnail}
              alt=""
              style={{
                width: "100%",
                height: "500px",
              }}
            />
            {/* Information about the book */}
            <div className="border">
              <h2>{book.title}</h2>
              {book?.averageRating && <p>✨{book.averageRating}</p>}
              <p>
                <b>Free</b>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BookPage;

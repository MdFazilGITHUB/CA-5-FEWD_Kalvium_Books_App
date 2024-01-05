import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import BookPage from "./components/BookPage";
import Form from "./components/Form";
import Footer from "./components/Footer";

// Main App component
function App() {
  // Function to clear firstName from local storage
  const clearLocalStorage = () => {
    localStorage.removeItem("firstName");
  };

  useEffect(() => {
    window.addEventListener("beforeunload", clearLocalStorage);
    return () => {
      window.removeEventListener("beforeunload", clearLocalStorage);
    };
  }, []);

  return (
    <>
      {/* Navbar component */}
      <Navbar />

      {/* Routes for navigation */}
      <Routes>
        {/* Route for BookPage component */}
        <Route path="/" element={<BookPage />} />

        {/* Route for Form component */}
        <Route path="/form" element={<Form />} />
      </Routes>

      {/* Footer component */}
      <Footer />
    </>
  );
}

export default App;

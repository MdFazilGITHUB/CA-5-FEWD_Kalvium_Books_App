import React from "react";
import LogoIMG from "./../assets/logo.png";
import { Link } from "react-router-dom";

// Navbar component for navigation
function Navbar() {
  return (
    <>
      {/* Navbar container with flex layout */}
      <div className="navbar-flex">
        {/* Link to the home page with the logo */}
        <Link to={"/"}>
          <img
            src={LogoIMG}
            alt=""
            style={{
              width: "450px",
            }}
          />
        </Link>

        {/* Link to the registration form page with a Register button */}
        <Link to={"/form"} style={{ textDecoration: "none" }}>
          <button className="button">
            <h1>Register</h1>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Navbar;

import React from "react";
import LogoIMGWhite from "./../assets/logo-white.png";
import footerIMG from "./../assets/footerIMG.png";

// Footer component for displaying the footer content
function Footer() {
  return (
    <>
      {/* Main container for the footer */}
      <div className="footer">
        <div className="footer-content" style={{ paddingLeft: "30px" }}>
          <img
            src={LogoIMGWhite}
            alt=""
            style={{
              width: "450px",
            }}
          />
          <h3 style={{
            color:"white"
          }}>Made with 🔥 by Mohamed Fazil </h3>
        </div>
        <img src={footerIMG} alt="" />
      </div>
    </>
  );
}

export default Footer;

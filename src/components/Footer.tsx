import React from "react";
import androidChromeImage from "../assets/android-chrome-512x512.png"; // Import the image
import "./Footer.css"; // Import your CSS file for styling

export const Footer = () => {
  return (
    <div className="footer-container">
      <img
        src={androidChromeImage}
        alt="Android Chrome Icon"
        className="footer-img"
      />
    </div>
  );
};

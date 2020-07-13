import React from "react";
import "./static/header.css";
import me from "../Image/me.jpg";

function Header() {
  return (
    <div className="cv-header">
      <div className="my-pics-container">
        <img src={me} className="my-pics" alt="me.jpg" />
      </div>
      <div className="header-info">
        <h1>ROBIN SHRESTHA</h1>
        <h3>Web Developer</h3>
      </div>
    </div>
  );
}

export default Header;

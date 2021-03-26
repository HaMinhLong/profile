import React from "react";
import { Link } from "react-router-dom";

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const toggleMenu = () => {
  var header = document.querySelector("header");
  header.classList.toggle("active");
};

const Header = () => {
  return (
    <header id="header">
      <Link to="/profile/" className="logo">
        <span>M</span>inh <span>L</span>ong <span>.</span>
      </Link>
      <div className="toggle" id="toggle" onClick={toggleMenu}></div>
      <ul>
        <li>
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#services" onClick={toggleMenu}>
            Services
          </a>
        </li>
        <li>
          <a href="#stats" onClick={toggleMenu}>
            Stats
          </a>
        </li>
        <li>
          <a href="#work" onClick={toggleMenu}>
            Work
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;

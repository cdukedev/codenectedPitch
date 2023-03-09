import "Header.scss";
import React from "react";

export const Header = () => {
  return (
    <header class="header">
      <img class="header__img" src="" alt="Codenected Logo" />
      <nav class="header__nav">
        <ul class="header__links">
          <li>
            <a class="header__link" href="index.html">
              Home
            </a>
          </li>
          <li>
            <a class="header__link" href="about.html">
              About
            </a>
          </li>
          <li>
            <a class="header__link" href="contact.html">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

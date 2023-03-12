import "./Header.scss";
import React from "react";
import logo from "../../assets/logos/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header__img" src={logo} alt="Codenected Logo" />
      <nav className="header__nav">
        <ul className="header__list-items"></ul>
      </nav>
    </header>
  );
};

export default Header;

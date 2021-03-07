import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" width="60" />
        </Link>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;

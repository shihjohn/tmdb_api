import React from "react";
import Header from "../components/Header";
import { FaSearch } from "react-icons/fa";
import "./Error.scss";

const Error = () => {
  return (
    <div className="error">
      <Header />
      <div className="error-main wrapper">
        <FaSearch className="error-main-icon" />
        <h1>Error 404 : Page Not Found.</h1>
      </div>
    </div>
  );
};

export default Error;

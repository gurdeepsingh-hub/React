import React, { Component } from "react";

const Navbar = ({ onTotal }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Item Counter:{" "}
        {onTotal() == 0
          ? "Empty list"
          : (onTotal() == 1 ? onTotal() + " item " : onTotal() + " items ") +
            " in the list"}
      </a>
    </nav>
  );
};

export default Navbar;

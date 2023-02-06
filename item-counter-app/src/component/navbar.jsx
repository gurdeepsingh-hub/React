import React, { Component } from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Item Counter:{" "}
        {props.onTotal() == 0
          ? "Empty list"
          : (props.onTotal() == 1
              ? props.onTotal() + " item "
              : props.onTotal() + " items ") + " in the list"}
      </a>
    </nav>
  );
};

export default Navbar;

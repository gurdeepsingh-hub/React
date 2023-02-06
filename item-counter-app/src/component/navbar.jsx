import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
          Item Counter:{" "}
          {this.props.onTotal() == 0
            ? "Empty list"
            : (this.props.onTotal() == 1
                ? this.props.onTotal() + " item "
                : this.props.onTotal() + " items ") + " in the list"}
        </a>
      </nav>
    );
  }
}

export default Navbar;

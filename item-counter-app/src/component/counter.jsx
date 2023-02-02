import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  // for applying styles to more than one elements
  //   styles = {
  //     fontSize: 15,
  //     fontWeight: "bold",
  //   };
  render() {
    return (
      <React.Fragment>
        <span
          style={{ fontSize: 15, fontWeight: "bolder" }}
          className="badge badge-primary m-2"
        >
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }

  incrementFunc() {
    this.state.count += 1;
  }
}

export default Counter;

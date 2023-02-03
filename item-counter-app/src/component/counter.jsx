import React, { Component } from "react";

class Counter extends Component {
  //   constructor() {
  //     super();
  //     this.incrementFunc = this.incrementFunc.bind(this);
  //   }
  state = {
    count: 0,
    items: ["item1", "item2", "item3"],
  };

  // for applying styles to more than one elements
  //   styles = {
  //     fontSize: 15,
  //     fontWeight: "bold",
  //   };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.incrementFunc(
              "this is a argument passing form event handler in react"
            );
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }

  incrementFunc = (argu) => {
    console.log(argu);
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;

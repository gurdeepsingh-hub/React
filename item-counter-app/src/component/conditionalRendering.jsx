import React, { Component } from "react";

class ConditionalRender extends Component {
  state = {
    count: 1,
    items: ["item1", "item2", "item3"],
  };

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.items.length === 0 && <p>no items in list</p>}
          {this.renderTags()}
        </ul>
      </React.Fragment>
    );
  }
  renderTags() {
    return this.state.items.map((item) => <li key={item}>{item}</li>);
  }
}

export default ConditionalRender;

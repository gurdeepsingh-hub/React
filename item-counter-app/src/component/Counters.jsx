import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-secondary btn-sm m-2"
        >
          {this.props.Counters.length <= 1
            ? "Reset Counter"
            : "Reset all Counters"}
        </button>
        <button
          onClick={this.props.onAdd}
          className="btn btn-success btn-sm m-2"
        >
          {this.props.Counters.length == 0 ? "Add Counter" : "Add Counters"}
        </button>
        {this.props.Counters.map((counter) => {
          return (
            <Counter
              key={counter.id}
              onDelete={() => this.props.onDelete(counter.id)}
              onIncrement={() => this.props.onInc(counter)}
              onDecrement={() => this.props.onDec(counter)}
              counter={counter}
            />
          );
        })}
      </div>
    );
  }
}

export default Counters;

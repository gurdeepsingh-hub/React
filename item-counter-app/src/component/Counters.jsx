import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onDelete, onAdd, onInc, onDec, counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-secondary btn-sm m-2">
          {counters.length <= 1 ? "Reset Counter" : "Reset all Counters"}
        </button>
        <button onClick={onAdd} className="btn btn-success btn-sm m-2">
          {counters.length == 0 ? "Add Counter" : "Add Counters"}
        </button>
        {counters.map((counter) => {
          return (
            <Counter
              key={counter.id}
              onDelete={() => onDelete(counter.id)}
              onIncrement={() => onInc(counter)}
              onDecrement={() => onDec(counter)}
              counter={counter}
            />
          );
        })}
      </div>
    );
  }
}

export default Counters;

import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  handleDelete(id) {
    this.setState({
      counters: this.state.counters.filter((counter) => counter.id != id),
    });
  }

  handleAdd = () => {
    const { counters } = this.state;
    counters.push({
      id: counters.length ? counters[counters.length - 1].id + 1 : 1,
      value: 0,
    });
    const newCounter = counters;
    this.setState({
      counters: newCounter,
    });
  };

  decrementFunc = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };

  incrementFunc = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-secondary btn-sm m-2"
        >
          {this.state.counters.length <= 1
            ? "Reset Counter"
            : "Reset all Counters"}
        </button>
        <button onClick={this.handleAdd} className="btn btn-success btn-sm m-2">
          {this.state.counters.length == 0 ? "Add Counter" : "Add Counters"}
        </button>
        {this.state.counters.map((counter) => {
          return (
            <Counter
              key={counter.id}
              onDelete={() => this.handleDelete(counter.id)}
              onIncrement={() => this.incrementFunc(counter)}
              onDecrement={() => this.decrementFunc(counter)}
              counter={counter}
            />
          );
        })}
      </div>
    );
  }
}

export default Counters;

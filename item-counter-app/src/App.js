import React, { Component } from "react";
import "./App.css";
import Counters from "./component/Counters";
import Navbar from "./component/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  handleDelete = (id) => {
    const newCounters = this.state.counters.filter(
      (counter) => counter.id != id
    );
    this.setState({
      counters: newCounters,
    });
  };

  handleAdd = () => {
    const { counters } = this.state;
    const newCounters = [...counters];
    newCounters.push({
      id: counters.length ? counters[counters.length - 1].id + 1 : 1,
      value: 0,
    });

    this.setState({
      counters: newCounters,
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
  countTotal = () => {
    const { counters } = this.state;
    let total = 0;
    counters.map((counter) => (total += counter.value));
    return total;
  };

  render() {
    return (
      <React.Fragment>
        <Navbar onTotal={this.countTotal} />
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onAdd={this.handleAdd}
            onInc={this.incrementFunc}
            onDec={this.decrementFunc}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

import React from "react";
import "./App.css";
import Counters from "./component/Counters";
import Navbar from "./component/navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;

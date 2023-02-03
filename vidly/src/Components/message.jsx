import React, { Component } from "react";
import { getMovies } from "../Services/fakeMovieService.js";

class MessageMovie extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <p>
        {this.numberOfMovies() === 0
          ? "There is no movie in database"
          : `Showing ${this.numberOfMovies()} movies in database`}
      </p>
    );
  }

  numberOfMovies() {
    return getMovies().length;
  }
}

export default MessageMovie;

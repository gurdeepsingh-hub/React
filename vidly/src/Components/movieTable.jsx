import React, { Component } from "react";
import { getMovies, deleteMovie } from "../Services/fakeMovieService.js";

class MovieTable extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    movies: getMovies(),
  };
  render() {
    return (
      <React.Fragment>
        <p>
          {this.state.movies.length === 0
            ? "There is no movie in database"
            : `Showing ${this.state.movies.length} movies in database`}
        </p>
        {this.addTable()}
      </React.Fragment>
    );
  }

  handleDelete(id) {
    this.setState(deleteMovie(id));
  }

  addTable() {
    if (this.state.movies.length) {
      return (
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => {
              return (
                <tr key={movie._id}>
                  <td key={"title" + movie._id}>{movie.title}</td>
                  <td key={"genre" + movie._id}>{movie.genre.name}</td>
                  <td key={"stock" + movie._id}>{movie.numberInStock}</td>
                  <td key={"rate" + movie._id}>{movie.dailyRentalRate}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.handleDelete(movie._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
  }
}

export default MovieTable;

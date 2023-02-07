import React, { Component } from "react";
import { getMovies, deleteMovie } from "../Services/fakeMovieService.js";

import Table from "./table.jsx";

class MovieTable extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
  };

  handleLike = (id) => {
    const movies = this.state.movies;
    const newMovie = movies.map((movie) => {
      if (movie._id === id) {
        movie.liked = !movie.liked;
      }
      return movie;
    });
    this.setState({ movies: newMovie });
  };

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  handleDelete(id) {
    this.setState(deleteMovie(id));
  }

  render() {
    const { movies, pageSize, currentPage } = this.state;
    return (
      <React.Fragment>
        <p>
          {this.state.movies.length === 0
            ? "There is no movie in database"
            : `Showing ${this.state.movies.length} movies in database`}
        </p>
        {
          <Table
            onDelete={(id) => this.handleDelete(id)}
            onLike={(id) => this.handleLike(id)}
            movies={movies}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        }
      </React.Fragment>
    );
  }
}

export default MovieTable;

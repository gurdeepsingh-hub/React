import React, { Component } from "react";
import { getMovies, deleteMovie } from "../Services/fakeMovieService.js";
import { getGenres } from "../Services/fakeGenreService.js";
import ListGroup from "./listGroup.jsx";
import Table from "./table.jsx";

class MovieTable extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    movies: [],
    genre: [],
    pageSize: 4,
    currentPage: 1,
    currentGenre: "All Genres",
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genre: getGenres() });
  }

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

  handleGenreSelect(genre) {
    this.setState({ currentGenre: genre });
  }

  render() {
    const { movies, pageSize, currentPage, genre, currentGenre } = this.state;
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            genre={genre}
            selectedGenre={currentGenre}
            onGenreSelect={(genre) => this.handleGenreSelect(genre)}
          />
        </div>
        <div className="col">
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
        </div>
      </div>
    );
  }
}

export default MovieTable;

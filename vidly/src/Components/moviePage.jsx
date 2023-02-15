import React, { Component } from "react";
import { getMovies, deleteMovie } from "../Services/fakeMovieService.js";
import { getGenres } from "../Services/fakeGenreService.js";
import FilterGenre from "../utils/filter.js";
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
    selectedColumn: { path: "", order: 0 },
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genre: getGenres() });
  }

  handleLike = (id) => {
    const { movies } = this.state;
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
    this.setState({ movies: deleteMovie(id) });
  }

  handleGenreSelect(genre) {
    this.setState({ currentGenre: genre, currentPage: 1 });
  }

  filterData() {
    const { movies, currentGenre } = this.state;
    const filteredData = FilterGenre(movies, currentGenre);
    return filteredData;
  }

  handleSort(selectedColumn) {
    this.setState({ selectedColumn });
  }
  render() {
    const { pageSize, currentPage, genre, currentGenre, selectedColumn } =
      this.state;
    const filterData = this.filterData();

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
            {filterData.length === 0
              ? "There is no movie in database"
              : `Showing ${filterData.length} movies in database`}
          </p>
          {
            <Table
              movies={filterData}
              pageSize={pageSize}
              currentPage={currentPage}
              selectedColumn={selectedColumn}
              onDelete={(id) => this.handleDelete(id)}
              onLike={(id) => this.handleLike(id)}
              onPageChange={this.handlePageChange}
              onSort={(path) => this.handleSort(path)}
            />
          }
        </div>
      </div>
    );
  }
}

export default MovieTable;

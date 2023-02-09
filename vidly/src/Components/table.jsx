import React, { Component } from "react";
import Like from "./Common/like.jsx";
import Pagination from "./Common/pagination.jsx";
import { paginateData } from "../utils/paginate.js";

import PropTypes from "prop-types";

class Table extends Component {
  render() {
    const {
      onDelete,
      movies,
      onLike,
      pageSize,
      currentPage,
      onPageChange,
      onSort,
    } = this.props;

    let pagedData = paginateData(movies, currentPage, pageSize);
    if (movies.length) {
      return (
        <React.Fragment>
          <table className="table">
            <thead>
              <tr>
                <th onClick={() => onSort("title")}>Title</th>
                <th onClick={() => onSort("genre.name")}>Genre</th>
                <th onClick={() => onSort("numberInStock")}>Stock</th>
                <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {pagedData.map((movie, index) => {
                return (
                  <tr key={movie._id}>
                    <td key={"title" + movie._id}>{movie.title}</td>
                    <td key={"genre" + movie._id}>{movie.genre.name}</td>
                    <td key={"stock" + movie._id}>{movie.numberInStock}</td>
                    <td key={"rate" + movie._id}>{movie.dailyRentalRate}</td>
                    <td>
                      <Like
                        liked={movie.liked}
                        onClick={() => onLike(movie._id)}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          onDelete(movie._id);
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
          <Pagination
            count={movies.length}
            pageSize={pageSize}
            onPageChange={onPageChange}
            currentPage={currentPage}
          />
        </React.Fragment>
      );
    }
  }
}

Table.propType = {
  onDelete: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  onLike: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Table;

import React, { Component } from "react";
import Like from "./Common/like.jsx";
import Pagination from "./Common/pagination.jsx";
import { paginateData } from "../utils/paginate.js";
import { SortData } from "../utils/sortData.js";
import TableHeader from "./Common/tableHeader.jsx";
import TableBody from "./Common/tableBody.jsx";

import PropTypes from "prop-types";

class Table extends Component {
  columns = [
    { id: 1, path: "title", label: "Title" },
    { id: 2, path: "genre.name", label: "Genre" },
    { id: 3, path: "numberInStock", label: "Stock" },
    { id: 4, path: "dailyRentalRate", label: "Rate" },
    {
      id: 5,
      content: (movie) => (
        <Like
          liked={movie.liked}
          onClick={() => this.props.onLike(movie._id)}
        />
      ),
    },
    {
      id: 6,
      content: (movie) => (
        <button
          className="btn btn-danger"
          onClick={() => {
            this.props.onDelete(movie._id);
          }}
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const {
      onDelete,
      movies,
      onLike,
      pageSize,
      onSort,
      currentPage,
      onPageChange,
      selectedColumn,
    } = this.props;

    const sortData = SortData(
      movies,
      selectedColumn.path,
      selectedColumn.order
    );
    let pagedData = paginateData(sortData, currentPage, pageSize);

    if (movies.length) {
      return (
        <React.Fragment>
          <table className="table">
            <TableHeader
              columns={this.columns}
              selectedColumn={selectedColumn}
              onSort={onSort}
            />
            <TableBody data={pagedData} columns={this.columns} />
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
  onSort: PropTypes.func.isRequired,
};

export default Table;

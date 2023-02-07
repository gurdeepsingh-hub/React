import React, { Component } from "react";
import Like from "./Common/like.jsx";

class Table extends Component {
  render() {
    const { onDelete, movies, onLike } = this.props;
    if (movies.length) {
      return (
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
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
      );
    }
  }
}

export default Table;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { type } from "@testing-library/user-event/dist/type";

const ListGroup = (props) => {
  const { genre, onGenreSelect, selectedGenre } = props;

  const genres = [{ _id: 1, name: "All Genres" }, ...genre];

  return (
    <ul className="list-group">
      {genres.map((gen) => {
        return (
          <li
            key={gen._id}
            className={
              selectedGenre === gen.name
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            <a
              herf=""
              style={{ cursor: "pointer" }}
              onClick={() => onGenreSelect(gen.name)}
            >
              {gen.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

ListGroup.propTypes = {
  genre: PropTypes.array.isRequired,
  onGenreSelect: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default ListGroup;

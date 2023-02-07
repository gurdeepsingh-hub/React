import React, { Component } from "react";

const ListGroup = (props) => {
  const { genre, onGenreSelect, selectedGenre } = props;

  let genres = [{ _id: 1, name: "All Genres" }, ...genre];

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

export default ListGroup;

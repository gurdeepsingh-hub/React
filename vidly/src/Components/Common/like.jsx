import React, { Component } from "react";
import PropTypes from "prop-types";

function Like({ liked, onClick }) {
  let classes = "fa fa-heart";
  if (!liked) {
    classes += "-o";
  }
  return (
    <i
      onClick={onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
}

Like.propTypes = {
  liked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Like;

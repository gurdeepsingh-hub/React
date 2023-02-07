import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";

const Pagination = ({ count, pageSize, onPageChange, currentPage }) => {
  let pageCount = Math.ceil(count / pageSize);
  let pages = [...Array(pageCount).keys()].map((Element) => Element + 1);

  if (pageCount === 1) return null;

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li
              key={page}
              className={page == currentPage ? "page-item active" : "page-item"}
            >
              <a
                onClick={() => onPageChange(page)}
                className="page-link"
                href="#"
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;

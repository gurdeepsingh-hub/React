import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";

const Pagination = ({ count, pageSize, onPageChange }) => {
  let pageCount = Math.ceil(count / pageSize);
  let pages = [...Array(pageCount).keys()].map((Element) => Element + 1);
  if (pageCount === 1) return null;

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">{pages.map((page) => pageFn(page))}</ul>
    </nav>
  );
};

const pageFn = (pageNo) => {
  return (
    <li className="page-item">
      <a className="page-link" href="#">
        {pageNo}
      </a>
    </li>
  );
};

export default Pagination;

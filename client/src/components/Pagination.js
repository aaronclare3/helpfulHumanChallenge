import React from "react";
import "./Pagination.css";

const Pagination = ({ currentPage, itemsPerPage, pages, setCurrentPage }) => {
  const handleClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className='Pagination'>
      <ul className='Pagination-list'>
        {pages != null &&
          pages.map((p) => {
            return (
              <li
                className='Pagination-listItem'
                key={p}
                onClick={() => handleClick(p)}
                style={{
                  textDecoration: p === currentPage ? "underline" : "",
                }}>
                {p + 1}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Pagination;

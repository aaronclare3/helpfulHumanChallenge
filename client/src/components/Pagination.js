import React from "react";
import "./Pagination.css";

const Pagination = ({
  currentPage,
  itemsPerPage,
  pages,
  setCurrentPage,
  colors,
}) => {
  const handleClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      {console.log(colors)}
      {colors != null && colors.length === 0 ? (
        <div>Sorry, try another search!</div>
      ) : (
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
                      fontSize: p === currentPage ? "23px" : "",
                      color: p === currentPage ? "black" : "",
                    }}>
                    {p + 1}
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Pagination;

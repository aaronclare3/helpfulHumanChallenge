import React, { useState, useEffect } from "react";
import ColorList from "../components/ColorList";
import "./Main.css";
import Pagination from "../components/Pagination";

const Main = ({ colors, filteredColors }) => {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(null);

  useEffect(() => {
    let pagesArray = [];
    let numPages;
    if (filteredColors.length > 0) {
      numPages = Math.ceil(filteredColors.length / itemsPerPage);
      console.log(numPages);
    } else {
      numPages = Math.ceil(colors.length / itemsPerPage);
      console.log(numPages);
    }
    for (let i = 0; i < numPages; i++) {
      pagesArray.push(i);
    }
    setPages(pagesArray);
  }, [colors, filteredColors, itemsPerPage]);

  useEffect(() => {
    setCurrentPage(0);
  }, [filteredColors]);

  return (
    <div className='Main'>
      <div>
        {filteredColors.length > 0 ? (
          <ColorList
            colors={filteredColors.slice(
              currentPage * itemsPerPage,
              currentPage * itemsPerPage + itemsPerPage
            )}
          />
        ) : (
          <ColorList
            colors={colors.slice(
              currentPage * itemsPerPage,
              currentPage * itemsPerPage + itemsPerPage
            )}
          />
        )}
      </div>
      <div>
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          pages={pages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Main;

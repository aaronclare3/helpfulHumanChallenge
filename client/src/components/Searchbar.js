import React, { useState } from "react";

const Searchbar = ({ colors, passUpdatedList }) => {
  const [userSearchFilter, setUserSearchFilter] = useState("");

  const filterHandler = (inputVal) => {
    setUserSearchFilter(inputVal);
    const updatedList =
      colors &&
      colors.filter((col) => {
        // Can also use .startsWith here if you want
        return col.hex.toLowerCase().includes(inputVal.toLowerCase());
      });
    console.log(updatedList);
    if (updatedList.length !== 0) {
      passUpdatedList(updatedList);
    } else {
      passUpdatedList([]);
    }
  };

  return (
    <div className='search'>
      <input
        type='text'
        placeholder='Search for a color...'
        onChange={(e) => filterHandler(e.target.value)}
        value={userSearchFilter}
      />
    </div>
  );
};

export default Searchbar;

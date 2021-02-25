import React, { useState } from "react";

const Searchbar = ({ colors, passUpdatedList }) => {
  const [userSearchFilter, setUserSearchFilter] = useState("");

  const filterHandler = (inputVal) => {
    setUserSearchFilter(inputVal);
    if (inputVal[0] === "#") {
      inputVal = inputVal.substr(1, inputVal.length);
    }
    const updatedList =
      colors &&
      colors.filter((col) => {
        // Can also use .startsWith here if you prefer
        return col.hex.toLowerCase().includes(inputVal.toLowerCase());
      });
    if (updatedList.length !== 0) {
      passUpdatedList(updatedList);
    } else {
      passUpdatedList([]);
    }
  };

  return (
    <input
      type='text'
      placeholder='Search for a hex...'
      onChange={(e) => filterHandler(e.target.value)}
      value={userSearchFilter}
    />
  );
};

export default Searchbar;

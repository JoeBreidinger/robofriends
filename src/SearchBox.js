import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
        value={searchfield}
      />
    </div>
  );
};
export default SearchBox;

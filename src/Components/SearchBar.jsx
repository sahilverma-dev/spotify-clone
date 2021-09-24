import React from "react";

import SeacrchIcon from "@material-ui/icons/SearchOutlined";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-icon">
        <SeacrchIcon />
      </div>
      <input type="text" placeholder="Artists, Songs or Podcats" />
    </div>
  );
};

export default SearchBar;

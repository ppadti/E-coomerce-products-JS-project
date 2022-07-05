import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import classes from "../Header/Header.module.css";

const SearchBar = () => {
  return (
    <div className={classes.search_icon}>
      <SearchIcon className={classes.searchIcon} />
      <input />
    </div>
  );
};

export default SearchBar;

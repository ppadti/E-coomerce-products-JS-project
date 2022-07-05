import React from "react";
import classes from "./Explore.module.css";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const Heading = () => {
  return (
    <div className={classes.heading}>
      <h1>Explore</h1>
      <div className={classes.filter_icon}>
        <input placeholder="Filter" />
        <FilterAltOutlinedIcon className={classes.filterIcon} />
      </div>
    </div>
  );
};

export default Heading;

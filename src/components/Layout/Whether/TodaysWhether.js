import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import classes from "../Whether/WhetherCard.module.css";

const TodaysWhether = () => {
  return (
    <div>
      <div className={classes.dots}>
        <MoreVertIcon />
      </div>
      <div className={classes.temp}>
        <h2> 71º</h2>
      </div>
      <div className={classes.sun_img}>
        <WbSunnyIcon sx={{ color: "white" }} />
      </div>
      <h4 className={classes.type}>Sunny</h4>
    </div>
  );
};

export default TodaysWhether;

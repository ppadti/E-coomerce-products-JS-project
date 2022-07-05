import React from "react";
import classes from "../Whether/WhetherCard.module.css";
import PlaceIcon from "@mui/icons-material/Place";

const LocationInfo = () => {
  return (
    <div>
      <div className={classes.date_info}>
        <h4>Sunday, 18th 2018</h4>
      </div>
      <div className={classes.location_info}>
        <PlaceIcon sx={{ color: "white" }} />
        <p>Los Angeles, CA</p>
      </div>
    </div>
  );
};

export default LocationInfo;

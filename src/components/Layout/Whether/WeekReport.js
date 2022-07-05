import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import classes from "../Whether/WhetherCard.module.css";

const WeekReport = () => {
  return (
    <div className={classes.week_info}>
      <div className={classes.day}>
        <p>
          MON
          <WbSunnyIcon sx={{ color: "white" }} />
          69º
        </p>
      </div>
      <div className={classes.day}>
        <p>
          TUE
          <ThunderstormIcon sx={{ color: "white" }} />
          74º
        </p>
      </div>
      <div className={classes.day}>
        <p>
          WED
          <ThunderstormIcon sx={{ color: "white" }} />
          73º
        </p>
      </div>
      <div className={classes.day}>
        <p>
          THR
          <WbSunnyIcon sx={{ color: "white" }} />
          68º
        </p>
      </div>
      <div className={classes.day}>
        <p>
          FRI
          <WbCloudyIcon sx={{ color: "white" }} />
          55º
        </p>
      </div>
      <div className={classes.day}>
        <p>
          SAT
          <WbSunnyIcon sx={{ color: "white" }} />
          58º
        </p>
      </div>
      <div className={classes.day}>
        <p>
          SUN
          <WbSunnyIcon sx={{ color: "white" }} />
          64º
        </p>
      </div>
    </div>
  );
};

export default WeekReport;

import Card from "../../UI/Card";
import React, { Fragment } from "react";
import classes from "../Whether/WhetherCard.module.css";
import WeekReport from "./WeekReport";
import LocationInfo from "./LocationInfo";
import TodaysWhether from "./TodaysWhether";

const WhetherCard = () => {
  return (
    <Fragment>
      <Card className={classes.whether}>
        <TodaysWhether />
        <div className={classes.info}>
          <div className={classes.info_1}>
            <p>Real Feel: 78º</p>
          </div>
          <div className={classes.info_2}>
            <p>Rain chance: 5%</p>
          </div>
        </div>
        <WeekReport />
        <LocationInfo />
      </Card>
    </Fragment>
  );
};

export default WhetherCard;

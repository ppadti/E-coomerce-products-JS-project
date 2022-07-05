import React from "react";
import Card from "../../UI/Card";
import classes from "../Stories/Stories.module.css";
import AddStory from "./AddStory";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";
import { Avatar } from "@mui/material";

const Stories = () => {
  return (
    <Card className={classes.stories}>
      <AddStory />
      <div className={classes.friends}>
        <div className={classes.users}>
          <Avatar alt="Remy Sharp" src={user1} className={classes.img} />
          <div className={classes.user_details}>
            <h4>Dan Walker</h4>
            <p>1 hour ago</p>
          </div>
        </div>
        <hr></hr>
        <div className={classes.users}>
          <Avatar alt="Remy Sharp" src={user2} className={classes.img} />
          <div className={classes.user_details}>
            <h4>Bobby Brown</h4>
            <p>3 Days ago</p>
          </div>
        </div>
        <hr></hr>
        <div className={classes.users}>
          <Avatar alt="Remy Sharp" src={user3} className={classes.img} />
          <div className={classes.user_details}>
            <h4>Ellse Walker</h4>
            <p>Last week</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Stories;

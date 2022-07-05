import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import classes from "../PostCards/Post.module.css";

const GroupOfPeople = (props) => {
  return (
    <div className={classes.group_of_people}>
      <AvatarGroup max={4}>
        <Avatar alt="Remy Sharp" src={props.data.user2} />
        <Avatar alt="Travis Howard" src={props.data.user1} />
        <Avatar alt="Cindy Baker" src={props.data.user4} />
        <Avatar alt="Agnes Walker" src={props.data.user3} />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
    </div>
  );
};

export default GroupOfPeople;

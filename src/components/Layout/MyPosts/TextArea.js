import React from "react";
import { Avatar } from "@mui/material";
import user from "../../assets/user.jpg";
import classes from "../MyPosts/PostCard.module.css";

const TextArea = () => {
  return (
    <div>
      <div className={classes.input_field}>
        <div className={classes.img}>
          <Avatar alt="Remy Sharp" src={user} />
        </div>
        <div className={classes.field}>
          <input placeholder="Write something about you..."></input>
        </div>
      </div>
    </div>
  );
};

export default TextArea;

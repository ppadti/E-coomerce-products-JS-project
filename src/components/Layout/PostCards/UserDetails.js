import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import user2 from "../../assets/user2.jpg";
import { Avatar } from "@mui/material";
import classes from "../PostCards/Post.module.css";

const PostDetails = (props) => {
  return (
    <div className={classes.users}>
      <Avatar alt="Remy Sharp" src={props.data.user} className={classes.img} />
      <div className={classes.user_details}>
        <h4>{props.data.name}</h4>
        <p>{props.data.date}</p>
      </div>
      <div className={classes.dot_wrapper}>
        <MoreVertIcon className={classes.dot} />
      </div>
    </div>
  );
};

export default PostDetails;

import React from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import TagFacesTwoToneIcon from "@mui/icons-material/TagFacesTwoTone";
import classes from "../MyPosts/PostCard.module.css";

const Tags = () => {
  return (
    <div className={classes.footer_tags}>
      <div className={classes.media}>
        <CameraAltOutlinedIcon className={classes.media_icon} />
        Media
      </div>
      <div className={classes.activity}>
        <TagFacesTwoToneIcon className={classes.media_icon} />
        activity
      </div>
      <div className={classes.dots}>
        <MoreHorizOutlinedIcon />
      </div>
    </div>
  );
};

export default Tags;

import React from "react";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import classes from "../MyPosts/PostCard.module.css";

const HeaderTags = () => {
  return (
    <div className={classes.head_tag}>
      <div className={classes.publish}>
        <DriveFileRenameOutlineOutlinedIcon className={classes.icon} />
        Publish
      </div>
      <div className={classes.albums}>
        <CollectionsOutlinedIcon className={classes.icon} />
        Albums
      </div>
      <div className={classes.video}>
        <VideocamOutlinedIcon />
        Video
      </div>
    </div>
  );
};

export default HeaderTags;

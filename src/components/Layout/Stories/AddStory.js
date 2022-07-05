import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import classes from "../Stories/Stories.module.css";

const AddStory = () => {
  return (
    <div>
      <div className={classes.heading}>
        <MoreVertIcon className={classes.dot} />
        Stories
      </div>
      <hr></hr>
      <div className={classes.story}>
        <AddCircleOutlineIcon className={classes.story_icon} />
        <div className={classes.content}>
          <h5>Add a new Story</h5>
          <p>Share an images, a video or some text</p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default AddStory;

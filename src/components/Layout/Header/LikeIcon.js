import React from "react";
import classes from "../Header/Header.module.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const LikeIcon = () => {
  return (
    <div className={classes.like_icon}>
      <FavoriteBorderOutlinedIcon
        className={classes.like}
        sx={{ color: "rgb(134, 121, 121)" }}
      />
    </div>
  );
};

export default LikeIcon;

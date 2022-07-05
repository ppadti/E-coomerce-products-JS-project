import React from "react";
import classes from "../Header/Header.module.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Notification = () => {
  return (
    <div className={classes.icon_items}>
      <NotificationsNoneIcon
        className={classes.icon}
        sx={{ color: "rgb(134, 121, 121)" }}
      />
    </div>
  );
};

export default Notification;

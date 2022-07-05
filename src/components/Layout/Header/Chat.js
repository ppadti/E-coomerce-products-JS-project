import React from "react";
import classes from "../Header/Header.module.css";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const Chat = () => {
  return (
    <div className={classes.icon_items_chat}>
      <ChatBubbleOutlineIcon
        className={classes.icon}
        sx={{ color: "rgb(134, 121, 121)" }}
      />
    </div>
  );
};

export default Chat;

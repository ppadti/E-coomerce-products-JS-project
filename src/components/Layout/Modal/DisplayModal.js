import React from "react";
import classes from "./Modal.module.css";
import user1 from "../../assets/user3.jpg";
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ModalData from "./ModalData.json";

const DisplayModal = () => {
  return (
    <>
      {ModalData.map((data) => {
        return (
          <div className={classes.users} key={data.id}>
            <Avatar alt="Remy Sharp" src={user1} className={classes.img} />

            <div className={classes.user_details}>
              <h5>{data.name}</h5>
              <p>{data.content}</p>
              <p>{data.date}</p>
            </div>

            <div className={classes.icon}>
              <ChatBubbleOutlineIcon />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DisplayModal;

import React, { useState } from "react";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import classes from "../PostCards/Post.module.css";
import Card from "../../UI/Card";
import GroupOfPeople from "./GroupOfPeople";
import UserDetails from "./UserDetails";
import { Avatar } from "@mui/material";
import Comment from "./Comment.json";
const ButtonList = (props) => {
  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
  }

  return (
    <div>
      <Card className={classes.post_card}>
        <UserDetails data={props.data} />
        <div className={classes.desc}>{props.data.desc}</div>
        <Card className={classes.content}>
          <div className={classes.img_content}>
            <img src={props.data.img} alt="img" />
          </div>
        </Card>
        {/* <ButtonList showComment={showComment} /> */}
        <div className={classes.icons}>
          <div className={classes.icon_items} onClick={toggle}>
            <ModeCommentOutlinedIcon
              className={classes.icon}
              sx={{ color: "white" }}
            />
          </div>

          <div className={classes.icon_items}>
            <ShareOutlinedIcon
              className={classes.icon}
              sx={{ color: "white" }}
            />
          </div>

          <div className={classes.icon_items}>
            <FavoriteBorderOutlinedIcon
              className={classes.like}
              sx={{ color: "rgb(134, 121, 121)" }}
            />
          </div>
        </div>

        {/* comment box */}
        {show && (
          <>
            <Card className={classes.comment_section}>
              <div className={classes.heading}>Comments (3) </div>
              {Comment.map((info) => {
                return (
                  <div key={info.id}>
                    <div className={classes.users}>
                      <Avatar
                        alt="Remy Sharp"
                        src={props.data.user4}
                        className={classes.img}
                      />
                      <div className={classes.user_details}>
                        <h4>{info.Name}</h4>
                        <p>{info.time}</p>
                      </div>
                    </div>
                    <div className={classes.desc}>{info.content}</div>
                    <div className={classes.reply}>
                      <p> 3 Reply</p>
                      <p>Edit</p>
                    </div>
                  </div>
                );
              })}
            </Card>
          </>
        )}
        <div className={classes.user_wrapper}>
          <GroupOfPeople data={props.data} />
          <div className={classes.username}>{props.data.people}</div>
        </div>
      </Card>
    </div>
  );
};

export default ButtonList;

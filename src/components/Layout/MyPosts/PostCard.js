import React from "react";
import classes from "../MyPosts/PostCard.module.css";
import Card from "../../UI/Card";
import HeaderTags from "./HeaderTags";
import TextArea from "./TextArea";
import Tags from "./Tags";

const PostCard = () => {
  return (
    <>
      <Card className={classes.post_card}>
        <HeaderTags />
        <TextArea />
        <hr></hr>
        <Tags />
      </Card>
    </>
  );
};

export default PostCard;

import React, { useState, useEffect } from "react";
// import Header from "../Layout/Header/Header";
import PostCard from "../Layout/MyPosts/PostCard";
import WhetherCard from "../Layout/Whether/WhetherCard";
import classes from "../../App.module.css";
import Stories from "../Layout/Stories/Stories";
import Post from "../Layout/PostCards/Post";
import BounceLoader from "react-spinners/BounceLoader";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <BounceLoader color={"#36D7B7"} loading={loading} size={80} />
      ) : (
        <div>
          {/* <Header /> */}
          <div className={classes.card_components}>
            <WhetherCard />
            <div className={classes.wrapper}>
              <PostCard />
              <Post />
            </div>
            <Stories />
          </div>
        </div>
      )}
    </>
  );
};

export default Feed;

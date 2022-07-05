import React from "react";
import classes from "../ExploreComponents/Explore.module.css";
import feed from "../assets/feed.svg";
import friends from "../assets/friends.svg";
import videos from "../assets/videos.svg";
import pages from "../assets/pages.svg";
import cart from "../assets/cart.svg";
import house from "../assets/house.svg";
import stories from "../assets/stories.svg";
import question from "../assets/question.svg";
import news from "../assets/news.svg";
import group from "../assets/group.svg";
import envato from "../assets/envato.svg";
import events from "../assets/calendar.svg";
import cssninja from "../assets/cssninja.svg";
import element from "../assets/element.svg";
import settings from "../assets/settings.svg";
import { Link } from "react-router-dom";

const Icons = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.row_wrapper}>
        <Link to="/">
          <div className={classes.icons}>
            <img src={feed} alt="feed" />
            <h4>Feed</h4>
          </div>
        </Link>

        <div className={classes.icons}>
          <img src={friends} alt="feed" height={80} />
          <h4>Friends</h4>
        </div>
        <div className={classes.icons}>
          <img src={videos} alt="feed" />
          <h4>Videos</h4>
        </div>
        <div className={classes.icons}>
          <img src={pages} alt="feed" />
          <h4>Pages</h4>
        </div>
        <Link to="/commerce">
          <div className={classes.icons}>
            <img src={cart} alt="feed" height={80} />
            <h4>Commerce</h4>
          </div>
        </Link>
      </div>

      <div className={classes.row_wrapper}>
        <div className={classes.icons}>
          <img src={house} alt="feed" />
          <h4>Interest</h4>
        </div>
        <div className={classes.icons}>
          <img src={stories} alt="feed" />
          <h4>Stories</h4>
        </div>
        <div className={classes.icons}>
          <img src={question} alt="feed" height={80} />
          <h4>Question</h4>
        </div>
        <div className={classes.icons}>
          <img src={news} alt="feed" />
          <h4>News</h4>
        </div>
        <div className={classes.icons}>
          <img src={group} alt="feed" />
          <h4>Groups</h4>
        </div>
      </div>

      <div className={classes.row_wrapper}>
        <div className={classes.icons}>
          <img src={envato} alt="feed" />
          <h4>Envato</h4>
        </div>
        <div className={classes.icons}>
          <img src={events} alt="feed" />
          <h4>Events</h4>
        </div>
        <div className={classes.icons}>
          <img src={cssninja} alt="feed" />
          <h4>Css Ninja</h4>
        </div>
        <div className={classes.icons}>
          <img src={element} alt="feed" height={80} />
          <h4>Elements</h4>
        </div>
        <div className={classes.icons}>
          <img src={settings} alt="feed" height={80} />
          <h4>Settings</h4>
        </div>
      </div>
    </div>
  );
};

export default Icons;

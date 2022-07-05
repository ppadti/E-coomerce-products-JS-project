import React, { Fragment } from "react";
import classes from "../Header/Header.module.css";
import logo from "../../assets/logo.png";
import Explore from "./ExploreIcon";
import Chat from "./Chat";
import Mail from "./Mail";
import Notification from "./Notification";
import LikeIcon from "./LikeIcon";
import Profile from "./Profile";
import Cart from "./Cart";
import SearchBar from "./SearchBar";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo_img}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={classes.icons}>
          <LikeIcon />
          <Notification />
          <Mail />
          <Chat />
          <Explore />
        </div>
        <SearchBar />
        <div className={classes.profile}>
          <Cart />
          <Profile />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;

import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import classes from "../Header/Header.module.css";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={classes.icon_items} onClick={() => navigate("/explore")}>
        <AppsIcon
          className={classes.icon}
          sx={{ color: "rgb(134, 121, 121)" }}
        />
      </div>
    </div>
  );
};

export default Explore;

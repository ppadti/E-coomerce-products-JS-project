import React from "react";
import classes from "../Header/Header.module.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Modal from "../Modal/Modal";
import useModal from "../Modal/useModal";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
const Mail = () => {
  const { isShowing, toggle } = useModal();

  return (
    <div className={classes.icon_items} onClick={toggle}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        variant="dot"
      >
        <MailOutlineIcon
          className={classes.icon}
          sx={{
            backgroundColor: "rgb(50, 118, 227)",
            color: "white",
            height: "1.5rem",
            width: "2rem",
            borderRadius: "0.3rem",
          }}
        />
        <Modal isShowing={isShowing} hide={toggle} />
      </StyledBadge>
    </div>
  );
};

export default Mail;

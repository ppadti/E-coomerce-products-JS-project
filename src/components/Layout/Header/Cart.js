import React from "react";
import classes from "../Header/Header.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import useModal from "../../CartModal/useModal";
// import Modal from "../../CartModal/Modal";
import CartModal from "../../CartModal/CartModal";

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

const Cart = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <div className={classes.cartIcon} onClick={toggle}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          variant="dot"
        >
          <ShoppingCartOutlinedIcon />

          {/* <Modal isShowing={isShowing} hide={toggle} /> */}
        </StyledBadge>
      </div>
      {isShowing && (
        <div className={classes.modal}>
          {/* <div className={classes.top}></div> */}
          {/* <div className={classes.modal}> */}
          <CartModal />
          {/* </div> */}
        </div>
      )}
    </>
  );
};

export default Cart;

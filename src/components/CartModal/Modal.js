import React from "react";
import ReactDOM from "react-dom";
import CartModal from "./CartModal";
import classes from "./Modal.module.css";

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className={classes.top}></div>
          <div className={classes.modal}>
            <CartModal />
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;

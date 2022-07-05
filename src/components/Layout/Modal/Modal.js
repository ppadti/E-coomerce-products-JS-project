import React from "react";
import ReactDOM from "react-dom";
import DisplayModal from "./DisplayModal";
import classes from "./Modal.module.css";

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className={classes.top}></div>
          <div className={classes.modal}>
            <div className={classes.heading}>
              <p>MESSAGES</p>
              <p>INBOX</p>
            </div>
            <hr></hr>
            <DisplayModal />
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;

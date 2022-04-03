import React, { Fragment } from "react";
import ReactDom from "react-dom";
import style from "./Modal.module.css";

const Backdrop = ({ hideCart }) => {
  return <div className={style.backdrop} onClick={hideCart} />;
};

const Overlay = ({ children }) => {
  return (
    <div className={style.modal}>
      <div>{children}</div>
    </div>
  );
};

const Modal = ({ children, hideCart }) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop hideCart={hideCart} />,
        document.getElementById("overlays")
      )}
      {ReactDom.createPortal(
        <Overlay children={children} />,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default Modal;

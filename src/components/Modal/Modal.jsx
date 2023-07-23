import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

function Backdrop(props) {
    return <div className={classes.backdrop} onClick={props.onClose} />;
}

function Overlay(props) {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}

function Modal(props) {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                document.getElementById("overlay")
            )}
            {ReactDOM.createPortal(
                <Overlay>{props.children}</Overlay>,
                document.getElementById("overlay")
            )}
        </Fragment>
    );
}

export default Modal;

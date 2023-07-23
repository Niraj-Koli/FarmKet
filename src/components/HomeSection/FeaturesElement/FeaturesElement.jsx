import React from "react";

import classes from "./FeaturesElement.module.css";

function FeaturesElement(props) {
    return (
        <div className={classes.box}>
            <img src={props.img} alt={props.alt} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default FeaturesElement;

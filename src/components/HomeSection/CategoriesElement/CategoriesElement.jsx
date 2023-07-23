import React from "react";

import classes from "./CategoriesElement.module.css";

import { NavLink } from "react-router-dom";

function CategoriesElement(props) {
    return (
        <div className={classes.box}>
            <img src={props.img} alt={props.alt} />
            <h3>{props.title}</h3>
            <h4>{props.description}</h4>
            <p>Upto {props.off} Off</p>
            <NavLink to="/products" className={classes.navlink}>
                Shop Now
            </NavLink>
        </div>
    );
}

export default CategoriesElement;

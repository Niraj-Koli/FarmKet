import React from "react";

import classes from "./Introduction.module.css";

import { NavLink } from "react-router-dom";

function Introduction() {
    return (
        <section className={classes.home}>
            <div className={classes.content}>
                <h3>
                    <span>Fresh </span>And
                    <span> Organic </span>Products For <span>You</span>
                    <p>
                        Farmket is your one-stop destination for fresh,
                        wholesome, and locally-sourced consumable goods. We
                        offer a wide range of farm-fresh vegetables, fruits,
                        dairy products, and meats that are carefully curated to
                        bring the best of nature's goodness to your table.
                    </p>
                    <NavLink to="/products" className={classes.navlink}>
                        Check In
                    </NavLink>
                </h3>
            </div>
        </section>
    );
}

export default Introduction;

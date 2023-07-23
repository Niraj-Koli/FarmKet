import React from "react";

import classes from "./CartDetails.module.css";

function CartDetails(props) {
    const price = `₹ ${props.price.toFixed(1)}`;

    return (
        <li className={classes["cart-item"]}>
            <div className={classes["item-bucket"]}>
                <img
                    src={props.img}
                    className={classes["item-img"]}
                    alt={props.name}
                />

                <div className={classes.about}>
                    <h2 className={classes["about-title"]}>{props.name}</h2>
                    <p className={classes["about-description"]}>
                        {props.description}
                    </p>
                    <p className={classes["about-quantity"]}>
                        ({props.quantity})
                    </p>
                </div>

                <div className={classes.actions}>
                    <button
                        className={classes.onRemove}
                        onClick={props.onRemove}>
                        −
                    </button>
                    <h3 className={classes["actions-amount"]}>
                        {props.amount}
                    </h3>
                    <button className={classes.onAdd} onClick={props.onAdd}>
                        +
                    </button>
                </div>

                <div className={classes.value}>
                    <h3 className={classes.price}>{price}</h3>
                </div>
            </div>
        </li>
    );
}

export default CartDetails;

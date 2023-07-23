import React, { useContext } from "react";

import classes from "./ProductsItem.module.css";

import ProductsForm from "../ProductsForm/ProductsForm";

import CartContext from "../../../context/CartContext";

function ProductsItem(props) {
    const cartCtx = useContext(CartContext);

    const price = `₹ ${props.price.toFixed(1)}`;

    function addToCartHandler(amount) {
        cartCtx.addItem({
            id: props.id,
            name: props.title,
            amount: amount,
            price: props.price,
            img: props.img,
            description: props.description,
            quantity: props.quantity,
        });
    }

    return (
        <div className={classes.box}>
            <h3 className={classes.title}>{props.title}</h3>
            <img src={props.img} className={classes.img} alt={props.title} />
            <p className={classes.description}>{props.description}</p>
            <p className={classes.price}>{price}</p>
            <p className={classes.quantity}>({props.quantity})</p>
            <div>
                <ProductsForm onAddToCart={addToCartHandler} />
            </div>
        </div>
    );
}

export default ProductsItem;

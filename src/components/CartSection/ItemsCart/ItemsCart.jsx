import React, { useContext } from "react";

import classes from "./ItemsCart.module.css";

import CartDetails from "../CartDetails/CartDetails";

import Checkout from "../../UserSection/Checkout/Checkout";

import CartContext from "../../../context/CartContext";

function ItemsCart() {
    const cartCtx = useContext(CartContext);

    const totalAmount = `₹ ${cartCtx.totalAmount.toFixed(1)}`;
    const hasItems = cartCtx.items.length > 0;

    function cartItemRemoveHandler(id) {
        cartCtx.removeItem(id);
    }

    function cartItemAddHandler(item) {
        cartCtx.addItem({ ...item, amount: 1 });
    }

    function submitOrderHandler(userData) {
        fetch(
            "", // API Endpoint Here For Storing User Data //
            {
                method: "POST",
                body: JSON.stringify({
                    user: userData,
                    orderedItems: cartCtx.items,
                }),
            }
        );
    }

    const itemsCart = (
        <ul className={classes["cart-item"]}>
            {cartCtx.items.map((item) => (
                <CartDetails
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    img={item.img}
                    description={item.description}
                    quantity={item.quantity}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    return (
        <section className={classes.cart}>
            <h1 className={classes.heading}>
                <span>Cart</span>
            </h1>

            <div className={classes["box-container"]}>
                <div className={classes.box}>
                    <div className={classes["cart-navbar"]}>
                        <h3 className={classes["items-heading"]}>Items</h3>
                        <h3 className={classes["items-about"]}>Details</h3>
                        <h3 className={classes["items-quantity"]}>Quantity</h3>
                        <h3 className={classes["items-price"]}>Price</h3>
                    </div>

                    {itemsCart}

                    <div className={classes.hr}></div>

                    <div className={classes["cart-total"]}>
                        <p className={classes["total-amount"]}>Total Amount</p>
                        <p className={classes["total-price"]}>{totalAmount}</p>
                    </div>
                </div>
            </div>

            {hasItems && <Checkout onConfirm={submitOrderHandler} />}
        </section>
    );
}

export default ItemsCart;

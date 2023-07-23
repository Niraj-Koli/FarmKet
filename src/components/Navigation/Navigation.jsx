import React, { useContext, useEffect, useState } from "react";

import classes from "./Navigation.module.css";

import { NavLink } from "react-router-dom";

import { IconContext } from "react-icons";

import CartContext from "../../context/CartContext";

import AccountContext from "../../context/AccountContext";

import { FaShoppingBasket, FaBars, FaShoppingCart } from "react-icons/fa";

function Navigation() {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const [status, setStatus] = useState(false);

    const cartCtx = useContext(CartContext);

    const { getSession, logout } = useContext(AccountContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const { items } = cartCtx;

    const btnClasses = `${classes.dancer} ${
        btnIsHighlighted ? classes.bump : ""
    }`;

    useEffect(() => {
        getSession().then((data) => {
            console.log(data);
            setStatus(true);
        });
    }, [getSession]);

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 100);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <header className={classes.header}>
            <NavLink to="/home" className={classes.logo}>
                <IconContext.Provider
                    value={{
                        style: {
                            color: "var(--lime)",
                            fontSize: "3rem",
                            marginRight: "1rem",
                            marginBottom: "-0.5rem",
                        },
                    }}>
                    <FaShoppingBasket />
                </IconContext.Provider>
                FarmKet
            </NavLink>

            <nav className={classes.navbar}>
                <NavLink to="/home" className={classes.alink}>
                    Home
                </NavLink>
                <NavLink to="/products" className={classes.alink}>
                    Products
                </NavLink>
                {status && (
                    <NavLink to="/cart" className={classes.alink}>
                        Cart
                    </NavLink>
                )}
            </nav>

            <div className={classes.icons}>
                <div className={classes["menu-btn"]}>
                    <FaBars />
                </div>
                {status && (
                    <NavLink to="/cart">
                        <button className={btnClasses}>
                            <FaShoppingCart />
                            <span className={classes.badge}>
                                {numberOfCartItems}
                            </span>
                        </button>
                    </NavLink>
                )}

                {!status && (
                    <NavLink to="/login">
                        <button className={classes["credentials-button"]}>
                            Login
                        </button>
                    </NavLink>
                )}

                {status && (
                    <button
                        className={classes["credentials-button"]}
                        onClick={logout}>
                        Logout
                    </button>
                )}
            </div>
        </header>
    );
}

export default Navigation;

import React, { useState, useContext, useEffect } from "react";

import classes from "./Footer.module.css";

import { NavLink } from "react-router-dom";

import { IconContext } from "react-icons";

import {
    FaShoppingBasket,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaPhone,
    FaEnvelope,
} from "react-icons/fa";

import { GoLocation } from "react-icons/go";

import { AiOutlineArrowRight } from "react-icons/ai";

import AccountContext from "../../context/AccountContext";

function Footer() {
    const [status, setStatus] = useState(false);

    const { getSession } = useContext(AccountContext);

    useEffect(() => {
        getSession().then(() => {
            setStatus(true);
        });
    }, [getSession]);

    return (
        <section className={classes.footer}>
            <div className={classes["box-container"]}>
                <div className={classes.box}>
                    <h3 className={classes.title}>
                        FarmKet{" "}
                        <IconContext.Provider
                            value={{
                                style: {
                                    color: "var(--lime)",
                                    marginBottom: "-0.5rem",
                                    fontSize: "3rem",
                                },
                            }}>
                            <FaShoppingBasket />
                        </IconContext.Provider>
                    </h3>

                    <p>
                        Farmket's delectable range of consumable goods! Our
                        products are carefully handcrafted using fresh,
                        locally-sourced ingredients, ensuring the highest
                        quality and flavor.
                    </p>

                    <div className={classes.share}>
                        <NavLink to="" className={classes.navlink}>
                            <FaFacebookF />
                        </NavLink>
                        <NavLink to="" className={classes.navlink}>
                            <FaInstagram />
                        </NavLink>
                        <NavLink to="" className={classes.navlink}>
                            <FaTwitter />
                        </NavLink>
                    </div>
                </div>

                <div className={classes.box}>
                    <h3>Contacts</h3>
                    <NavLink className={classes.links}>
                        <IconContext.Provider
                            value={{
                                style: {
                                    color: "var(--lime)",
                                    marginBottom: "-0.5rem",
                                    marginRight: "1rem",
                                    fontSize: "2rem",
                                },
                            }}>
                            <FaPhone />
                        </IconContext.Provider>
                        +91-9876543210
                    </NavLink>
                    <NavLink className={classes.links}>
                        <IconContext.Provider
                            value={{
                                style: {
                                    color: "var(--lime)",
                                    marginBottom: "-0.5rem",
                                    marginRight: "1rem",
                                    fontSize: "2rem",
                                },
                            }}>
                            <FaPhone />
                        </IconContext.Provider>
                        +91-1234567890
                    </NavLink>
                    <NavLink className={classes.links}>
                        <IconContext.Provider
                            value={{
                                style: {
                                    color: "var(--lime)",
                                    marginBottom: "-0.5rem",
                                    marginRight: "1rem",
                                    fontSize: "2rem",
                                },
                            }}>
                            <FaEnvelope />
                        </IconContext.Provider>
                        info@farmket.com
                    </NavLink>
                    <NavLink className={classes.links}>
                        <IconContext.Provider
                            value={{
                                style: {
                                    color: "var(--lime)",
                                    marginBottom: "-0.5rem",
                                    marginRight: "1rem",
                                    fontSize: "2rem",
                                },
                            }}>
                            <GoLocation />
                        </IconContext.Provider>
                        FarmKet HQ, Zeta Road, Epsilon City - 214773
                    </NavLink>
                </div>

                <div className={classes.box}>
                    <h3>Navigate</h3>
                    <NavLink to="/" className={classes.links}>
                        <IconContext.Provider
                            value={{
                                style: {
                                    color: "var(--lime)",
                                    marginBottom: "-0.5rem",
                                    marginRight: "1rem",
                                    fontSize: "2rem",
                                },
                            }}>
                            <AiOutlineArrowRight />
                        </IconContext.Provider>
                        Home
                    </NavLink>
                    <NavLink to="/products" className={classes.links}>
                        <IconContext.Provider
                            value={{
                                style: {
                                    color: "var(--lime)",
                                    marginBottom: "-0.5rem",
                                    marginRight: "1rem",
                                    fontSize: "2rem",
                                },
                            }}>
                            <AiOutlineArrowRight /> Products
                        </IconContext.Provider>
                    </NavLink>
                    {status && (
                        <NavLink to="/cart" className={classes.links}>
                            <IconContext.Provider
                                value={{
                                    style: {
                                        color: "var(--lime)",
                                        marginBottom: "-0.5rem",
                                        marginRight: "1rem",
                                        fontSize: "2rem",
                                    },
                                }}>
                                <AiOutlineArrowRight /> Cart
                            </IconContext.Provider>
                        </NavLink>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Footer;

import React, { useContext, useRef, useState } from "react";

import classes from "./Checkout.module.css";

import { NavLink, useNavigate } from "react-router-dom";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { BsEmojiSmile } from "react-icons/bs";

import { IconContext } from "react-icons";

import Modal from "../../Modal/Modal";

import CartContext from "../../../context/CartContext";

const isEmpty = (value) => value.trim() === "";
const isSixChars = (value) => value.trim().length === 6;
const isNumber = (value) => value.trim().length === 10;

function Checkout(props) {
    const navigate = useNavigate();
    const cartCtx = useContext(CartContext);

    const [errorModal, setErrorModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);

    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true,
        phone: true,
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();
    const phoneInputRef = useRef();

    function submitOrderHandler(event) {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalIsValid = isSixChars(enteredPostal);
        const enteredPhoneIsValid = isNumber(enteredPhone);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalIsValid,
            phone: enteredPhoneIsValid,
        });

        const formIsValid =
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredCityIsValid &&
            enteredPostalIsValid &&
            enteredPhoneIsValid;

        if (!formIsValid) {
            setErrorModal(true);
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredPostal,
            phone: enteredPhone,
        });

        setSuccessModal(true);

        cartCtx.clearCart();

        window.location.replace("/home");
    }

    function closeErrorModalHandler() {
        setErrorModal(false);
    }

    function closeSuccessModalHandler() {
        setSuccessModal(false);

        navigate("/home");
    }

    const nameControlClasses = `${classes["input-field"]} ${
        formInputsValidity.name ? "" : classes.invalid
    }`;

    const streetControlClasses = `${classes["input-field"]} ${
        formInputsValidity.street ? "" : classes.invalid
    }`;

    const cityControlClasses = `${classes["input-field"]} ${
        formInputsValidity.city ? "" : classes.invalid
    }`;

    const postalControlClasses = `${classes["input-field"]} ${
        formInputsValidity.postalCode ? "" : classes.invalid
    }`;

    const phoneControlClasses = `${classes["input-field"]} ${
        formInputsValidity.phone ? "" : classes.invalid
    }`;

    return (
        <div className={classes.checkout}>
            <h1 className={classes.heading}>
                <span>
                    <NavLink to="/cart" className={classes["left-arrow"]}>
                        <FaArrowLeft />
                    </NavLink>
                </span>
            </h1>

            <div className={classes.container}>
                <h1 className={classes.heading}>
                    <span>Checkout</span>
                </h1>
                <form onSubmit={submitOrderHandler}>
                    <div className={classes.field}>
                        <div className={nameControlClasses}>
                            <input
                                ref={nameInputRef}
                                type="text"
                                placeholder="Your Name"
                            />
                        </div>
                    </div>
                    <div className={classes.field}>
                        <div className={streetControlClasses}>
                            <input
                                ref={streetInputRef}
                                type="text"
                                placeholder="Street Name"
                            />
                        </div>
                    </div>
                    <div className={classes.field}>
                        <div className={cityControlClasses}>
                            <input
                                ref={cityInputRef}
                                type="text"
                                placeholder="City"
                            />
                        </div>
                    </div>
                    <div className={classes.field}>
                        <div className={postalControlClasses}>
                            <input
                                ref={postalInputRef}
                                type="text"
                                placeholder="Postal Code"
                            />
                        </div>
                    </div>

                    <div className={classes.field}>
                        <div className={phoneControlClasses}>
                            <input
                                ref={phoneInputRef}
                                type="tel"
                                placeholder="Phone Number"
                            />
                        </div>
                    </div>

                    <div className={classes["input-field"]}>
                        <div className={classes.button}>
                            <input type="submit" value="Order" required />
                        </div>
                    </div>
                </form>
            </div>

            {errorModal && (
                <Modal onClose={closeErrorModalHandler}>
                    <div className={classes.error}>
                        {formInputsValidity.name ? null : (
                            <p>Please Enter A Valid Name!</p>
                        )}
                        {formInputsValidity.street ? null : (
                            <p>Please Enter A Valid Street!</p>
                        )}
                        {formInputsValidity.city ? null : (
                            <p>Please Enter A Valid City!</p>
                        )}
                        {formInputsValidity.postalCode ? null : (
                            <p>Please Enter A Valid Postal Code! (6 Digits)</p>
                        )}
                        {formInputsValidity.phone ? null : (
                            <p>
                                Please Enter A Valid Phone Number! (10 Digits)
                            </p>
                        )}
                        <button
                            className={classes["button-error"]}
                            onClick={closeErrorModalHandler}>
                            Okay
                        </button>
                    </div>
                </Modal>
            )}

            {successModal && (
                <Modal onClose={closeSuccessModalHandler}>
                    <div className={classes.success}>
                        <p>Order Placed Successfully!</p>
                        <IconContext.Provider
                            value={{
                                style: { color: "lime", fontSize: "5rem" },
                            }}>
                            <BsEmojiSmile />
                        </IconContext.Provider>
                        <p>Thank You For Shopping With Us!</p>
                        <button
                            className={classes["button-success"]}
                            onClick={closeSuccessModalHandler}>
                            Okay
                        </button>
                    </div>
                </Modal>
            )}

            <h1 className={classes.heading}>
                <span>
                    <NavLink to="/home" className={classes["right-arrow"]}>
                        <FaArrowRight />
                    </NavLink>
                </span>
            </h1>
        </div>
    );
}

export default Checkout;

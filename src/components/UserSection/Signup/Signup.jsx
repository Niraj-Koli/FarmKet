import React, { useRef, useState } from "react";

import classes from "./Signup.module.css";

import { NavLink, useNavigate } from "react-router-dom";

import bcrypt from "bcryptjs";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Modal from "../../Modal/Modal";

import UserPool from "../../../UserPool";

const isLong = (value) => value.trim().length > 8;
const isEmail = (value) => value.trim().includes("@");
const isNumber = (value) => value.trim().length === 10;
const isEqual = (value1, value2) => value1 === value2;

function Signup() {
    const navigate = useNavigate();

    const [errorModal, setErrorModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);

    const [formInputsValidity, setFormInputsValidity] = useState({
        email: true,
        password1: true,
        password2: true,
        phone: true,
    });

    const emailInputRef = useRef();
    const password1InputRef = useRef();
    const password2InputRef = useRef();
    const phoneInputRef = useRef();

    function submitSignupHandler(event) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword1 = password1InputRef.current.value;
        const enteredPassword2 = password2InputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;

        const hashedEnteredPassword1 = bcrypt.hashSync(enteredPassword1);

        const enteredEmailIsValid = isEmail(enteredEmail);
        const enteredPassword1IsValid = isLong(enteredPassword1);
        const enteredPassword2IsValid = isEqual(
            enteredPassword1,
            enteredPassword2
        );
        const enteredPhoneIsValid = isNumber(enteredPhone);

        setFormInputsValidity({
            email: enteredEmailIsValid,
            password1: enteredPassword1IsValid,
            password2: enteredPassword2IsValid,
            phone: enteredPhoneIsValid,
        });

        const formIsValid =
            enteredEmailIsValid &&
            enteredPassword1IsValid &&
            enteredPassword2IsValid &&
            enteredPhoneIsValid;

        if (!formIsValid) {
            setErrorModal(true);
            return;
        }

        UserPool.signUp(
            enteredEmail,
            enteredPassword1,
            [],
            null,
            (err, data) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(data);
                }
            }
        );

        fetch(
            "", // API Endpoint Here For Storing User Data //
            {
                method: "POST",
                body: JSON.stringify({
                    user: {
                        email: enteredEmail,
                        password: hashedEnteredPassword1,
                        phone: enteredPhone,
                    },
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        setSuccessModal(true);
    }

    function closeErrorModalHandler() {
        setErrorModal(false);
    }

    function closeSuccessModalHandler() {
        setSuccessModal(false);

        navigate("/home");
    }

    const emailControlClasses = `${classes["input-field"]} ${
        formInputsValidity.email ? "" : classes.invalid
    }`;

    const password1ControlClasses = `${classes["input-field"]} ${
        formInputsValidity.password1 ? "" : classes.invalid
    }`;

    const password2ControlClasses = `${classes["input-field"]} ${
        formInputsValidity.password2 ? "" : classes.invalid
    }`;

    const phoneControlClasses = `${classes["input-field"]} ${
        formInputsValidity.phone ? "" : classes.invalid
    }`;

    return (
        <div className={classes.elements}>
            <h1 className={classes.heading}>
                <span>
                    <NavLink to="/login" className={classes["left-arrow"]}>
                        <FaArrowLeft />
                    </NavLink>
                </span>
            </h1>

            <div className={classes.container}>
                <h1 className={classes.heading}>
                    <span>Signup</span>
                </h1>

                <form onSubmit={submitSignupHandler}>
                    <div className={classes.field}>
                        <div className={emailControlClasses}>
                            <input
                                ref={emailInputRef}
                                type="email"
                                placeholder="Enter Email"
                            />
                        </div>
                    </div>

                    <div className={classes.field}>
                        <div className={password1ControlClasses}>
                            <input
                                ref={password1InputRef}
                                type="password"
                                placeholder="Enter Password"
                            />
                        </div>
                    </div>

                    <div className={classes.field}>
                        <div className={password2ControlClasses}>
                            <input
                                ref={password2InputRef}
                                type="password"
                                placeholder="Re-Type Password"
                            />
                        </div>
                    </div>

                    <div className={classes.field}>
                        <div className={phoneControlClasses}>
                            <input
                                ref={phoneInputRef}
                                type="tel"
                                placeholder="Enter Phone Number"
                            />
                        </div>
                    </div>

                    <div className={classes["input-field"]}>
                        <div className={classes.button}>
                            <input type="submit" value="Submit" required />
                        </div>
                    </div>
                </form>
            </div>

            {errorModal && (
                <Modal onClose={closeErrorModalHandler}>
                    <div className={classes.error}>
                        {formInputsValidity.email ? null : (
                            <p>Please Enter A Valid Email Address!</p>
                        )}

                        {formInputsValidity.password1 ? null : (
                            <p>
                                Please Enter A Valid Password (8+, Contains: A
                                Symbol, Uppercase and Lowercase Letters)
                            </p>
                        )}

                        {formInputsValidity.password2 ? null : (
                            <p>Passwords Do Not Match!</p>
                        )}

                        {formInputsValidity.phone ? null : (
                            <p>Phone Number Must Be 10 Digits Long!</p>
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
                        <p>Signup Successful!</p>
                        <p>Welcome To A New Dimension!</p>
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

export default Signup;

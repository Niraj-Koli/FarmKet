import React, { useRef, useState, useContext } from "react";

import classes from "./Login.module.css";

import { NavLink, useNavigate } from "react-router-dom";

import bcrypt from "bcryptjs";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Modal from "../../Modal/Modal";

import AccountContext from "../../../context/AccountContext";

const isLong = (value) => value.trim().length > 8;
const isEmail = (value) =>
    value.trim().includes("@") && value.trim().includes(".");

function Login() {
    const navigate = useNavigate();

    const [errorModal, setErrorModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);

    const [formInputsValidity, setFormInputsValidity] = useState({
        email: true,
        password: true,
    });

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const { authenticate } = useContext(AccountContext);

    function submitLoginHandler(event) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const hashedEnteredPassword = bcrypt.hashSync(enteredPassword);

        const enteredEmailIsValid = isEmail(enteredEmail);
        const enteredPasswordIsValid = isLong(enteredPassword);

        setFormInputsValidity({
            email: enteredEmailIsValid,
            password: enteredPasswordIsValid,
        });

        const formIsValid = enteredEmailIsValid && enteredPasswordIsValid;

        if (!formIsValid) {
            setErrorModal(true);
            return;
        }
        authenticate(enteredEmail, enteredPassword);

        fetch(
            "", // API Endpoint Here For Storing User Data //
            {
                method: "POST",
                body: JSON.stringify({
                    user: {
                        email: enteredEmail,
                        password: hashedEnteredPassword,
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

        window.location.reload(false);
    }

    const emailControlClasses = `${classes["input-field"]} ${
        formInputsValidity.email ? "" : classes.invalid
    }`;

    const passwordControlClasses = `${classes["input-field"]} ${
        formInputsValidity.password ? "" : classes.invalid
    }`;

    return (
        <body>
            <div className={classes.elements}>
                <h1 className={classes.heading}>
                    <span>
                        <NavLink to="/home" className={classes["left-arrow"]}>
                            <FaArrowLeft />
                        </NavLink>
                    </span>
                </h1>

                <div className={classes.container}>
                    <h1 className={classes.heading}>
                        <span>Login</span>
                    </h1>

                    <form onSubmit={submitLoginHandler}>
                        <div className={classes.field}>
                            <div className={emailControlClasses}>
                                <input
                                    ref={emailInputRef}
                                    type="email"
                                    placeholder="Enter Your Email"
                                />
                            </div>
                        </div>

                        <div className={classes.field}>
                            <div className={passwordControlClasses}>
                                <input
                                    ref={passwordInputRef}
                                    type="password"
                                    placeholder="Enter Password"
                                />
                            </div>
                        </div>

                        <div className={classes["input-field"]}>
                            <div className={classes.button}>
                                <input type="submit" value="Login" required />
                            </div>
                        </div>

                        <div className={classes.group}>
                            <NavLink to="/signup" className={classes.navlink}>
                                Signup
                            </NavLink>
                        </div>
                    </form>
                </div>

                {errorModal && (
                    <Modal onClose={closeErrorModalHandler}>
                        <div className={classes.error}>
                            {formInputsValidity.email ? null : (
                                <p>
                                    Please Enter A Valid Email
                                    (name@organization.com)
                                </p>
                            )}
                            {formInputsValidity.password ? null : (
                                <p>
                                    Please Enter A Valid Password (8+, Contains:
                                    A Symbol, Uppercase and Lowercase Letters)
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
                            <p>Login Successful!</p>
                            <p>Have A Awesome Journey!</p>
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
                        <NavLink
                            to="/signup"
                            className={classes["right-arrow"]}>
                            <FaArrowRight />
                        </NavLink>
                    </span>
                </h1>
            </div>
        </body>
    );
}

export default Login;

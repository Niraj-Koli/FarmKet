import React, { useRef, useState, useContext, useEffect } from "react";

import classes from "./ProductsForm.module.css";

import { NavLink } from "react-router-dom";

import Input from "../Input/Input";

import AccountContext from "../../../context/AccountContext";

function ProductsForm(props) {
    const [status, setStatus] = useState(false);

    const { getSession } = useContext(AccountContext);

    useEffect(() => {
        getSession().then(() => {
            setStatus(true);
        });
    }, [getSession]);

    const amountInputRef = useRef();

    const [amountIsValid, setAmountIsValid] = useState(true);

    function submitHandler(event) {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Quantity"
                input={{
                    id: "amount" + props.id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            />

            <div className={classes["input-field"]}>
                <div className={classes.btn}>
                    {status ? (
                        <button>Add To Cart</button>
                    ) : (
                        <NavLink to="/signup">
                            <button>Sign Up</button>
                        </NavLink>
                    )}
                    {!amountIsValid && <p>Please Enter A Valid Amount.</p>}
                </div>
            </div>
        </form>
    );
}

export default ProductsForm;

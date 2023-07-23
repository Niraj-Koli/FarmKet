import React from "react";

import classes from "./Features.module.css";

import FeaturesElement from "../FeaturesElement/FeaturesElement";

import f1 from "../../../images/feature-img-1.png";
import f2 from "../../../images/feature-img-2.png";
import f3 from "../../../images/feature-img-3.png";

function Features() {
    return (
        <section className={classes.features}>
            <h1 className={classes.heading}>
                FarmKet <span>Features</span>
            </h1>

            <div className={classes["box-container"]}>
                <FeaturesElement
                    title="Fresh And Organic"
                    description="Fresh and organic products are sustainably grown or produced without harmful chemicals, GMOs, and artificial additives, resulting in wholesome, flavorful, and environmentally friendly food choices."
                    img={f1}
                    alt="f1"
                />

                <FeaturesElement
                    title="Free Delivery"
                    description="Free delivery is a service where customers can receive their purchased items without incurring any additional charges for shipping or delivery."
                    img={f2}
                    alt="f2"
                />

                <FeaturesElement
                    title="Easy Payments"
                    description="We offer easy payment options including credit/debit cards, PayPal, mobile wallets, bank transfers, cash on delivery (COD), gift cards, and installment plans for your convenience."
                    img={f3}
                    alt="f3"
                />
            </div>
        </section>
    );
}

export default Features;

import React from "react";

import classes from "./ProductsMenu.module.css";

import ProductsItem from "../ProductsItem/ProductsItem";

import onion from "../../../images/onion.png";
import carrot from "../../../images/carrot.png";
import tomato from "../../../images/tomato.png";
import potato from "../../../images/potato.png";
import mango from "../../../images/mango.png";
import apple from "../../../images/apple.png";
import orange from "../../../images/orange.png";
import watermelon from "../../../images/watermelon.png";
import cucumber from "../../../images/cucumber.png";
import banana from "../../../images/banana.png";
import egg from "../../../images/egg.png";
import chicken from "../../../images/chicken.png";
import mutton from "../../../images/mutton.png";
import butter from "../../../images/butter.png";
import cheese from "../../../images/cheese.png";
import milk from "../../../images/milk.png";
import yogurt from "../../../images/yogurt.png";
import paneer from "../../../images/paneer.png";

function ProductsMenu() {
    return (
        <section className={classes.products}>
            <h1 className={classes.heading}>
                <span>Products</span>
            </h1>

            <div className={classes["box-container"]}>
                <ProductsItem
                    id="p1"
                    key="p1"
                    title="Onion"
                    img={onion}
                    description="Layered, Pungent, Versatile."
                    price={23}
                    quantity="1 kg"
                />
                <ProductsItem
                    id="p2"
                    key="p2"
                    title="Carrot"
                    img={carrot}
                    description="Orange, Crunchy, Nutritious."
                    price={10}
                    quantity="250 g"
                />
                <ProductsItem
                    id="p3"
                    key="p3"
                    title="Cucumber"
                    img={cucumber}
                    description="Green, Refreshing, Crisp."
                    price={20.5}
                    quantity="1 kg"
                />
                <ProductsItem
                    id="p4"
                    key="p4"
                    title="Tomato"
                    img={tomato}
                    description="Red, Juicy, Versatile."
                    price={26}
                    quantity="1 kg"
                />
                <ProductsItem
                    id="p5"
                    key="p5"
                    title="Potato"
                    img={potato}
                    description="Starchy, Versatile, Comforting."
                    price={49}
                    quantity="2 kg"
                />
                <ProductsItem
                    id="p6"
                    key="p6"
                    title="Watermelon"
                    img={watermelon}
                    description="Sweet, Juicy, Refreshing."
                    price={35}
                    quantity="1 pc"
                />
                <ProductsItem
                    id="p7"
                    key="p7"
                    title="Mango"
                    img={mango}
                    description="Tropical, Sweet, Luscious."
                    price={88}
                    quantity="1 kg"
                />
                <ProductsItem
                    id="p8"
                    key="p8"
                    title="Apple"
                    img={apple}
                    description="Crisp, Juicy, Tart."
                    price={153}
                    quantity="4 pc"
                />
                <ProductsItem
                    id="p9"
                    key="p9"
                    title="Orange"
                    img={orange}
                    description="Citrusy, Tangy, Vitamin-rich."
                    price={75}
                    quantity="4 pc"
                />
                <ProductsItem
                    id="p10"
                    key="p10"
                    title="Banana"
                    img={banana}
                    description="Yellow, Creamy, Energizing."
                    price={23}
                    quantity="500 g"
                />
                <ProductsItem
                    id="p11"
                    key="p11"
                    title="Paneer"
                    img={paneer}
                    description="Soft, Creamy, Vegetarian."
                    price={92}
                    quantity="200 g"
                />
                <ProductsItem
                    id="p12"
                    key="p12"
                    title="Yogurt"
                    img={yogurt}
                    description="Creamy, Tangy, Probiotic."
                    price={42.5}
                    quantity="85 g"
                />
                <ProductsItem
                    id="p13"
                    key="p13"
                    title="Butter"
                    img={butter}
                    description="Rich, Creamy, Spreadable."
                    price={106}
                    quantity="200 g"
                />
                <ProductsItem
                    id="p14"
                    key="p14"
                    title="Milk"
                    img={milk}
                    description="Nutritious, Creamy, Essential."
                    price={32}
                    quantity="450 ml"
                />
                <ProductsItem
                    id="p15"
                    key="p15"
                    title="Cheese"
                    img={cheese}
                    description="Savory, Creamy, Versatile."
                    price={75.5}
                    quantity="100 g"
                />
                <ProductsItem
                    id="p16"
                    key="p16"
                    title="Mutton"
                    img={mutton}
                    description="Juicy, Flavorful, Protein-rich."
                    price={369}
                    quantity="250 g"
                />
                <ProductsItem
                    id="p17"
                    key="p17"
                    title="Egg"
                    img={egg}
                    description="Versatile, Protein-rich, Nutritious."
                    price={105}
                    quantity="12 pc"
                />
                <ProductsItem
                    id="p18"
                    key="p18"
                    title="Chicken"
                    img={chicken}
                    description="Lean, Tender, Versatile."
                    price={275}
                    quantity="450 g"
                />
            </div>
        </section>
    );
}

export default ProductsMenu;

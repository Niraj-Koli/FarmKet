import React from "react";

import classes from "./Categories.module.css";

import CategoriesElement from "../CategoriesElement/CategoriesElement";

import cat1 from "../../../images/cat-1.png";
import cat2 from "../../../images/cat-2.png";
import cat3 from "../../../images/cat-3.png";
import cat4 from "../../../images/cat-4.png";

function Categories() {
    return (
        <section className={classes.categories}>
            <h1 className={classes.heading}>
                Product <span>Categories</span>
            </h1>

            <div className={classes["box-container"]}>
                <CategoriesElement
                    title="Vegetables"
                    description="Nutrient-Packed Wonders"
                    off="30%"
                    img={cat1}
                    alt="Vegetables"
                />
                <CategoriesElement
                    title="Fruits"
                    description="Sweet And Juicy Treasures"
                    off="25%"
                    img={cat2}
                    alt="Fruits"
                />
                <CategoriesElement
                    title="Dairy Products"
                    description="Creamy And Wholesome Delights"
                    off="40%"
                    img={cat3}
                    alt="Dairy Products"
                />
                <CategoriesElement
                    title="Meat"
                    description="Protein-Rich Sustenance"
                    off="15%"
                    img={cat4}
                    alt="Meat"
                />
            </div>
        </section>
    );
}

export default Categories;

import React from "react";

import Introduction from "../Introduction/Introduction";
import Features from "../Features/Features";
import Categories from "../Categories/Categories";
import Footer from "../../Footer/Footer";

function Home() {
    return (
        <div>
            <Introduction />
            <Features />
            <Categories />
            <Footer />
        </div>
    );
}

export default Home;

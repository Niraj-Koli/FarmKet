import React from "react";

import "./App.css";

import { Routes, Route, Navigate } from "react-router";

import Navigation from "./components/Navigation/Navigation";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import CartProvider from "./context/CartProvider";

import AccountProvider from "./context/AccountProvider";

function App() {
    return (
        <AccountProvider>
            <CartProvider>
                <div>
                    <Navigation />
                    <main>
                        <Routes>
                            <Route path="/" element={<Navigate to="home" />} />
                            <Route path="home" element={<HomePage />} />
                            <Route path="products" element={<ProductsPage />} />
                            <Route path="cart" element={<CartPage />} />
                            <Route path="login" element={<LoginPage />} />
                            <Route path="signup" element={<SignupPage />} />
                        </Routes>
                    </main>
                </div>
            </CartProvider>
        </AccountProvider>
    );
}

export default App;

import React from 'react';
//Components
import Products from "./Components/Products";
import ProductDetail from "./Components/ProductDetail";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
//Library
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min"
import {Routes, Route, Navigate} from "react-router-dom";
//Context
import ProductContentProvider from "./Context/ProductContectProvider";
import CardContextProvider from "./Context/CardContextProvider";
//Redux
import {Provider} from "react-redux";
import store from "./Redux/store";

const App = () => {
    return (
        <Provider store={store}>
            <ProductContentProvider>
                <CardContextProvider>
                    <Navbar/>
                    <Routes>
                        <Route path="/Products/:id" element={<ProductDetail/>}/>
                        <Route path="/Products" element={<Products/>}/>
                        <Route path="/Cart" element={<Cart/>}/>
                        <Route path="/" element={<Navigate to="/Products"/>}/>
                    </Routes>
                </CardContextProvider>
            </ProductContentProvider>
        </Provider>
    );
};

export default App;

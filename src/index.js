import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./js/Login";
import Signed from "./js/Signed";
import Search from "./js/Search";
import MySign from "./js/MySigns";
// Web3-JS
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
const getLibrary = (provider) => {
    const library = new Web3Provider(provider, "any");
    return library;
};
//
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Web3ReactProvider getLibrary={getLibrary}>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/signed" element={<Signed />} />
                <Route path="/search" element={<Search />} />
                <Route path="/mysigns" element={<MySign />} />
            </Routes>
        </Web3ReactProvider>
    </BrowserRouter>
);

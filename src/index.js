import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./js/Login";
import Signed from "./js/Signed";
import Search from "./js/Search";
import MySign from "./js/MySigns";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/signed" element={<Signed />} />
            <Route path="/search" element={<Search />} />
            <Route path="/mysigns" element={<MySign />} />
        </Routes>
    </BrowserRouter>
);

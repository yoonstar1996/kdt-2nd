import React from "react";
import {  Routes, Route } from "react-router-dom";
import ProductP from "./ProductP";
import MainP from "./MainP";

export default function Content() {
  return (
    <>
        <Routes>
          <Route path="/" element={<MainP />}></Route>
          <Route path="/product/:id" element={<ProductP />}></Route>
        </Routes>
    </>
  );
}

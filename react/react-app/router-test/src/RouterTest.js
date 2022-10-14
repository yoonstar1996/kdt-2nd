import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Product from "./Product";
import Main from "./Main";

export default function RouterTest() {
  return (
    <>
      <BrowserRouter>
        <Link to="/" style={{ margin: "30px" }}>
          메인
        </Link>
        <Link to="/product/1/aaa/윤경민">1번 상품</Link>
        <Link to="/product/2/aaa/홍길동">2번 상품</Link>
        <Link to="/product/3/aaa/익명?productName=가방방&price=1000#test">3번 상품</Link>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/product/:id/aaa/:name" element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

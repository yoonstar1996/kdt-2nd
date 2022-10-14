import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

export default function Nav() {
  const styles = {
    fontSize: "1rem",
    margin: "0 15px",
  };
  const BGC = {
    backgroundColor: "skyblue",
    width: "100%",
  };
  return (
    <>
        <div style={BGC}>
          <h3>navbar입니다</h3>
          <Link to="">메인</Link>
          <Link to="/product/1" style={styles}>
            1번 상품
          </Link>
          <Link to="/product/2" style={styles}>
            2번 상품
          </Link>
          <Link to="/product/3" style={styles}>
            3번 상품
          </Link>
        </div>
    </>
  );
}

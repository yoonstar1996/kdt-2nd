import "./App.css";
import React from "react";
// import RouterTest from "./RouterTest";
import Nav from "./Nav";
import Content from "./Content";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import Sticky from "./Sticky";
import LifeCycleTest from "../../first-app/src/LifeCycleTest";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="container">
          <LifeCycleTest></LifeCycleTest>
          <Content />
          <Sticky />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

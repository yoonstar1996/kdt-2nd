import "./App.css";
import React from "react";
// import RouterTest from "./RouterTest";
import Nav from "./Nav";
import Content from "./Content";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Content />
        <Footer />
      </BrowserRouter>
    </>
  );
}

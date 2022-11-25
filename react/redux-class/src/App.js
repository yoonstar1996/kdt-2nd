import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Box1Container } from "./containers/BoxesContainer";

export default function App() {
  const number = useSelector((state) => {
    return state.counter.number;
  });
  return (
    <>
      <div className="box-container">
        <h2> number : {number}</h2>
        <Box1Container></Box1Container>
      </div>
    </>
  );
}

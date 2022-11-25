import React from "react";
import { Box1, Box2, Box3, Box4 } from "../components/Boxes";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../store/counter";
import { useCallback } from "react";

export const Box1Container = React.memo(function () {
  return (
    <>
      <Box1 />
    </>
  );
});
export const Box2Container = React.memo(() => {
  return (
    <>
      <Box2 />
    </>
  );
});
export function Box3Container() {
  const number = useSelector((state) => {
    return state.counter.number;
  });
  return (
    <>
      <Box3 number={number} />
    </>
  );
}
export function Box4Container() {
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);
  const onDecrease = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);
  return (
    <>
      <Box4 onIncrease={onIncrease} onDecrease={onDecrease} />
    </>
  );
}

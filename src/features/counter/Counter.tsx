import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCount } from "./counterSlice";
import { AppDispatch } from "../../store/store";

const Counter: React.FC = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;

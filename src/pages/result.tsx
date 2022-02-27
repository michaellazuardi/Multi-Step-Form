import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const state = useSelector((state) => state);

  return (
    <>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};

export default Result;

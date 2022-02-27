import React, { useState } from "react";

const UseInput = (validateValue: Function) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputInvalid = isInputFocused && enteredInput === "";
  const inputValid = isInputFocused && validateValue(enteredInput);

  const inputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredInput(event.currentTarget.value);
  };

  const inputBlurHandler = (event: any) => {
    setIsInputFocused(true);
  };

  const validityClass = inputInvalid ? "invalid-input" : "";

  const start = new Date().getDate();

  const month = new Date().getUTCMonth() + 1; //months from 1-12
  const day = new Date().getUTCDate();
  const year = new Date().getUTCFullYear();

  const newdate = year + "-" + month + "-" + day;
  //   console.log(newdate);

  return {
    input: enteredInput,
    isValid: inputValid,
    isInvalid: inputInvalid,
    validClass: validityClass,
    date: newdate,
    inputChangeHandler,
    inputBlurHandler,
  };
};

export default UseInput;

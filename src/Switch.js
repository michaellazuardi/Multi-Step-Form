import React, { useState } from "react";
import "./Switch.css";

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const clickHandler = () => {
    setIsOn(true);
  };

  const isOnClass = isOn ? "react-switch-label-on" : "react-switch-label";

  return;
};

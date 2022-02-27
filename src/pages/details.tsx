import React, { useState } from "react";
import UseInput from "../Components/Hooks/Use-input";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  updateAmount,
  updateCategory,
  updateName,
  updateUnit,
} from "../Components/Redux/CreateBonusSlice";

type FormValues = {
  bonusName: string;
  bonusCategory: string;
  bonusAmount: string;
  bonusUnit: string;
  isNameFocused: boolean;
  isAmountFocused: boolean;
};

const Details = () => {
  const selector = useSelector((state) => state.createbonus.bonusName);
  const router = useRouter();
  console.log(selector);
  const {
    input: enteredName,
    isInvalid: nameIsInvalid,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    validClass: nameValidClass,
  } = UseInput((value: any) => value.trim() !== "");

  const {
    input: enteredCategory,
    isInvalid: categoryIsInvalid,
    inputChangeHandler: categoryChangeHandler,
  } = UseInput((value: any) => value.trim() !== "");

  const {
    input: enteredAmount,
    isInvalid: amountIsInvalid,
    validClass: amountValidClass,
    inputChangeHandler: amountChangeHandler,
    inputBlurHandler: amountBlurHandler,
  } = UseInput((value: any) => value.trim() !== "");

  const {
    input: enteredBonusUnit,
    inputChangeHandler: bonusUnitChangeHandler,
  } = UseInput((value: any) => value.trim() !== "");

  const dispatch = useDispatch();

  const submitHandler = (event: any) => {
    event.preventDefault();

    if (nameIsInvalid) {
      return;
    }

    if (categoryIsInvalid) {
      return;
    }

    dispatch(updateName(enteredName));
    dispatch(updateCategory(enteredCategory));
    dispatch(updateAmount(enteredAmount));
    dispatch(updateUnit(enteredBonusUnit));
    router.push("/settings");
  };

  //a spreaded value will become property/attribute
  //masukin ke custom hook
  const repopulate = () => {
    if (selector !== "") {
      return { value: selector };
    } else {
      return {};
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="details">
        <div>
          <div>
            <label>Bonus Name: </label>
            <br />
            <input
              onBlur={nameBlurHandler}
              type="text"
              className={nameValidClass}
              onChange={nameChangeHandler}
              required
              {...repopulate()}
            />
            {nameIsInvalid && (
              <p style={{ color: "red" }}>Please Enter Bonus Name</p>
            )}
            <br />
            <label className="text">Bonus Category: </label>
            <br />
            <select
              onChange={categoryChangeHandler}
              className="upper-category"
              required
            >
              <option value=""></option>
              <option value="Sports">Sports</option>
              <option value="VIP">VIP</option>
              <option value="Long Term Bonus">Long Term Bonus</option>
              <option value="Limited Time Bonus">Limited Time Bonus</option>
            </select>
          </div>
          <br /> <br />
          <label>Bonus Amount: </label>
          <input
            onChange={amountChangeHandler}
            onBlur={amountBlurHandler}
            className={amountValidClass}
            type="number"
            min="0"
            max="10"
            required
          />
          {amountIsInvalid && (
            <p style={{ color: "red" }}>Please Enter Amount</p>
          )}
          <div>
            <form onChange={bonusUnitChangeHandler}>
              <input type="radio" name="unit" value="Fixed" required />
              <label>Fixed</label>

              <input type="radio" name="unit" value="Percentages" required />
              <label>Percentages</label>
            </form>
          </div>
          <br />
          <label>Bonus Image URL (Image review below) </label>
          <input type="text" style={{ width: 500 }} disabled />
          <button className="form-actions">Next</button>
        </div>
      </div>
    </form>
  );
};

export default Details;

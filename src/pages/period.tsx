import { time } from "console";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateCollectionDeadline,
  updateEndDate,
  updateRepeatCycle,
  updateStartDate,
} from "../Components/Redux/CreateBonusSlice";
import UseInput from "../Components/Hooks/Use-input";
import { useRouter } from "next/router";

const Period = () => {
  const router = useRouter();

  const {
    input: enteredStartDate,
    date: startDate,
    inputChangeHandler: startDateChangeHandler,
  } = UseInput((value: any) => value.trim() !== "");

  const { input: enteredEndDate, inputChangeHandler: endDateChangeHandler } =
    UseInput((value: any) => value.trim() !== "");

  const {
    input: enteredDeadline,
    isInvalid: deadlineIsInvalid,
    inputChangeHandler: deadlineChangeHandler,
    inputBlurHandler: deadlineBlurHandler,
    validClass: deadlineValidClass,
  } = UseInput((value: any) => value.trim() !== "");

  const { input: enteredCycle, inputChangeHandler: cycleChangeHandler } =
    UseInput((value: any) => value.trim() !== "");

  const dispatch = useDispatch();

  const submitHandler = (event: any) => {
    event.preventDefault();

    dispatch(updateStartDate(enteredStartDate));
    dispatch(updateEndDate(enteredEndDate));
    dispatch(updateCollectionDeadline(enteredDeadline));
    dispatch(updateRepeatCycle(enteredCycle));

    //next router
    router.push("/criteria");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="period">
        <div className="date">
          <div>
            <label>Start Date: </label>
            <input
              type="date"
              onChange={startDateChangeHandler}
              min={startDate}
              required
            />
          </div>
          <br></br>
          <div>
            <label>End Date: </label>
            <input
              type="date"
              onChange={endDateChangeHandler}
              min={startDate}
              required
            />
          </div>
        </div>
        <br />
        <div>
          <label>Collection Deadline / Collection Complete Days: </label>
          <input
            onChange={deadlineChangeHandler}
            onBlur={deadlineBlurHandler}
            type="number"
            min={0}
            max={100}
            className={deadlineValidClass}
            style={{ marginRight: 100 }}
          />
          {deadlineIsInvalid && (
            <p style={{ color: "red" }}>Please enter deadline</p>
          )}
          <label>Bonus Repeat Cycle: </label>
          <select onChange={cycleChangeHandler}>
            <option value=""></option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Monthly (Period)">Monthly (Period)</option>
          </select>
        </div>
        <br />
        <div>
          <label style={{ marginRight: 200 }}>
            Bonus Repeat Start Date: Not Applicable
          </label>
          <label>Bonus Repeat End Date: Not Applicable</label>
        </div>
        <br />
        <button>Next</button>
      </div>
    </form>
  );
};

export default Period;

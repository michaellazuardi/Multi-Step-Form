import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import {
  updateCompleteDays,
  updateLimitAmount,
  updateTurnover,
  updateTurnoverAmount,
} from "../Components/Redux/CreateBonusSlice";

import UseInput from "../Components/Hooks/Use-input";

const Settings = () => {
  const router = useRouter();
  const { input: enteredTurnover, inputChangeHandler: turnoverChangeHandler } =
    UseInput((value: any) => value.trim() !== "");

  const {
    input: enteredLimitAmount,
    isInvalid: limitAmountIsInvalid,
    validClass: limitAmountValidClass,
    inputChangeHandler: limitAmountChangeHandler,
    inputBlurHandler: limitAmountBlurHandler,
  } = UseInput((value: any) => value.trim() !== "");

  const {
    input: enteredTurnoverAmount,
    inputChangeHandler: turnoverAmountChangeHandler,
  } = UseInput((value: any) => value.trim() !== "");

  // const [completeDays, setCompleteDays] = useState("");

  const {
    input: enteredCompleteDays,
    isInvalid: completeDaysIsInvalid,
    validClass: completeDaysValidClass,
    inputChangeHandler: completeDaysChangeHandler,
    inputBlurHandler: completeDaysBlurHandler,
  } = UseInput((value: any) => value.trim() !== "");

  const dispatch = useDispatch();

  const submitHandler = (event: any) => {
    event.preventDefault();

    dispatch(updateTurnover(enteredTurnover));
    dispatch(updateLimitAmount(enteredLimitAmount));
    dispatch(updateCompleteDays(enteredCompleteDays));
    dispatch(updateTurnoverAmount(enteredTurnoverAmount));

    router.push("/period");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="settings">
        <div>
          <label style={{ marginRight: 10 }}>Required Turnover:</label>
          <select
            style={{ marginRight: 50, width: 600 }}
            onChange={turnoverChangeHandler}
            required
          >
            <option value=""></option>
            <option value="Fixed Amount">Fixed Amount</option>
            <option value="Unfixed Amount">Unfixed Amount</option>
          </select>
        </div>
        <br />
        <div>
          <label style={{ marginRight: 10 }}>$</label>
          <input
            type="number"
            min="0"
            max="10"
            onChange={limitAmountChangeHandler}
            onBlur={limitAmountBlurHandler}
            className={limitAmountValidClass}
            required
          />
          {limitAmountIsInvalid && (
            <p style={{ color: "red" }}>Please enter limit amount</p>
          )}
        </div>
        <br />
        <div>
          <label>Withdrawal Limit Amount: </label>
          <select onChange={turnoverAmountChangeHandler} required>
            <option value=""></option>
            <option value="Fixed Amount">Fixed Amount</option>
            <option value="Multiple of Bonus Amount">
              Mulitple of Bonus Amount
            </option>
          </select>
        </div>
        <br />
        <br />
        <div>
          <label>Withdrawal Limit Source: Not Applicable</label>
        </div>
        <br />
        <div>
          <label>Required Turnover Source / Games: </label>
          {/* <select>
            <option>
              <input type="checkbox">test</input>
            </option>
            <option>
              <input type="checkbox">no 2</input>
            </option>
          </select> */}
        </div>
        <br />
        <div>
          <label>Turnover Complete Days: </label>
          <input
            onChange={completeDaysChangeHandler}
            onBlur={completeDaysBlurHandler}
            className={completeDaysValidClass}
            type="number"
            min={0}
            max={100}
          />
          {completeDaysIsInvalid && (
            <p style={{ color: "red" }}>Please enter days</p>
          )}
        </div>
        <br />
        <div>
          <label>Minimum Deposit Amount: Not Applicable</label>
        </div>
        <br />
        <div>
          <label>Minimum Bonus Amount: Not Applicable</label>
        </div>
        <br />
        <div>
          <label>Minimum Withdrawal Limit: Not Applicable</label>
        </div>
        <br />
        <button>Next</button>
      </div>
    </form>
  );
};

export default Settings;

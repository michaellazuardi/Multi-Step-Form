import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCriteria } from "../Components/Redux/CreateBonusSlice";
import { useRouter } from "next/router";

import Switch from "../Components/Criteria/Switch";

const Criteria = () => {
  const [criteria, setCriteria] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const criteriaChangeHandler = (event: any) => {
    setCriteria(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();

    dispatch(updateCriteria(criteria));

    router.push("/result");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="criteria">
        <div>
          <form onChange={criteriaChangeHandler}>
            <input
              type="checkbox"
              value="Real Name Verification"
              name="criteria"
              required
            />
            <label style={{ marginRight: 15 }}> Real Name Verification</label>
            <input
              type="checkbox"
              value="Email Verification"
              name="criteria"
              required
            />
            <label style={{ marginRight: 15 }}> Email Verification</label>
            <input
              type="checkbox"
              value="Phone Verification"
              name="criteria"
              required
            />
            <label style={{ marginRight: 15 }}> Phone Verification</label>
            <input
              type="checkbox"
              value="First Time Deposit"
              name="criteria"
              required
            />
            <label> First Time Deposit</label>
          </form>
        </div>
        <br />
        <div>
          <Switch
            rounded="rounded"
            isToggled={isToggled}
            onToggle={() => setIsToggled(!isToggled)}
          />
        </div>
        <br />
        <div>
          <label>VIP Levels: </label>
          <input type="checkbox" />
        </div>
        <button>Next</button>
      </div>
    </form>
  );
};

export default Criteria;

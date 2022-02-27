import { combineReducers, configureStore, AnyAction } from "@reduxjs/toolkit";
import { createBonusSlice } from "./CreateBonusSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const combinedReducer = combineReducers({
  createbonus: createBonusSlice.reducer,
});

const reducer = (
  state: ReturnType<typeof combinedReducer>,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer,
  });

// export type RootState = ReturnType<typeof store.getState>;

export const wrapper = createWrapper(makeStore, { debug: true });

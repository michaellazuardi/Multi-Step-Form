import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { networkInterfaces } from "os";

interface SliceState {
  bonusName?: string;
  bonusCategory?: string;
  bonusAmount?: number;
  bonusUnit?: string;
  bonusTurnover?: string;
  bonusLimitAmount: number;
  turnoverAmount: number;
  bonusStartDate?: string;
  bonusEndDate: string;
  bonusCompleteDays: number;
  bonusCollectionDeadline: number;
  bonusRepeatCycle: string;
  bonusCriteria: string;
}

const initialState: SliceState = {
  bonusName: "",
  bonusCategory: "",
  bonusAmount: 0,
  bonusUnit: "",
  bonusTurnover: "",
  turnoverAmount: 0,
  bonusLimitAmount: 0,
  bonusCompleteDays: 0,
  bonusStartDate: Date(),
  bonusEndDate: Date(),
  bonusCollectionDeadline: 0,
  bonusRepeatCycle: "",
  bonusCriteria: "",
};

export const createBonusSlice = createSlice({
  name: "createbonus",
  initialState: initialState,
  reducers: {
    updateName: (state, action) => {
      state.bonusName = action.payload;
    },
    updateCategory: (state, action) => {
      state.bonusCategory = action.payload;
    },
    updateAmount: (state, action) => {
      state.bonusAmount = action.payload;
    },
    updateUnit: (state, action) => {
      state.bonusUnit = action.payload;
    },
    updateTurnover: (state, action) => {
      state.bonusTurnover = action.payload;
    },
    updateLimitAmount: (state, action) => {
      state.bonusLimitAmount = action.payload;
    },
    updateCompleteDays: (state, action) => {
      state.bonusCompleteDays = action.payload;
    },
    updateStartDate: (state, action) => {
      state.bonusStartDate = action.payload;
    },
    updateEndDate: (state, action) => {
      state.bonusEndDate = action.payload;
    },
    updateTurnoverAmount: (state, action) => {
      state.turnoverAmount = action.payload;
    },
    updateCollectionDeadline: (state, action) => {
      state.bonusCollectionDeadline = action.payload;
    },
    updateRepeatCycle: (state, action) => {
      state.bonusRepeatCycle = action.payload;
    },
    updateCriteria: (state, action) => {
      state.bonusCriteria = action.payload;
    },
  },
});

export const {
  updateName,
  updateCategory,
  updateAmount,
  updateUnit,
  updateTurnover,
  updateLimitAmount,
  updateStartDate,
  updateEndDate,
  updateCompleteDays,
  updateTurnoverAmount,
  updateCollectionDeadline,
  updateRepeatCycle,
  updateCriteria,
} = createBonusSlice.actions;

export const selectBonusName = (state: any) => state.createbonus.bonusName;
export const selectBonusCategory = (state: any) =>
  state.createbonus.bonusCategory;
export const selectBonusAmount = (state: any) => state.createbonus.bonusAmount;

export default createBonusSlice.reducer;

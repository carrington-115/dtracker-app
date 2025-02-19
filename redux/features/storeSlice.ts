import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemName: "",
  itemSize: "",
  trashType: "",
  priceControl: "default",
  priceAmount: 0,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setItemName: (state, action) => {
      state.itemName = action.payload;
    },
    setItemSize: (state, action) => {
      state.itemSize = action.payload;
    },
    setTrashType: (state, action) => {
      state.trashType = action.payload;
    },
    setPriceControl: (state, action) => {
      state.priceControl = action.payload;
    },
    setPriceAmount: (state, action) => {
      state.priceAmount = action.payload;
    },
    resetState: (state) => {
      return { ...state, ...initialState };
    },
  },
});

export const {
  setItemName,
  setItemSize,
  setTrashType,
  setPriceAmount,
  setPriceControl,
  resetState,
} = storeSlice.actions;
export default storeSlice.reducer;

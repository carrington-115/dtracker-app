import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemName: "",
  itemSize: "",
  trashType: "",
  location: {
    latitude: null,
    longtitude: null,
  },
  pricePerUnit: 0,
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
      state.pricePerUnit = action.payload;
    },
    setLocation: (state, action) => {
      state.location.latitude = action.payload?.latitude;
      state.location.longtitude = action.payload?.longtitude;
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
  setLocation,
  setPriceControl,
  resetState,
} = storeSlice.actions;
export default storeSlice.reducer;

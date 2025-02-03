import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pickupType: "",
  trashType: "",
  trashWeight: "",
  price: "",
  pickupLocation: null,
  pickupTime: null,
  pickupDate: null,
};

const trashDetailSlice = createSlice({
  name: "trashDetail",
  initialState,
  reducers: {
    setPickupType: (state, action) => {
      state.pickupType = action.payload;
    },
    setTrashType: (state, action) => {
      state.trashType = action.payload;
    },
    setTrashWeight: (state, action) => {
      state.trashWeight = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setPickupLocation: (state, action) => {
      state.pickupLocation = action.payload;
    },
    setPickupTime: (state, action) => {
      state.pickupTime = action.payload;
    },
    setPickupDate: (state, action) => {
      state.pickupDate = action.payload;
    },
  },
});

export const {
  setPickupType,
  setTrashType,
  setTrashWeight,
  setPrice,
  setPickupLocation,
  setPickupTime,
  setPickupDate,
} = trashDetailSlice.actions;
export default trashDetailSlice.reducer;

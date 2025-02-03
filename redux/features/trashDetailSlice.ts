import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pickupType: "",
  trashType: "",
  trashWeight: "",
  price: "",
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
  },
});

export const { setPickupType, setTrashType, setTrashWeight, setPrice } =
  trashDetailSlice.actions;
export default trashDetailSlice.reducer;

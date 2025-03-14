import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phoneNumber: "",
  name: "",
};

const phoneSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    addName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { addNumber, addName } = phoneSlice.actions;
export default phoneSlice.reducer;

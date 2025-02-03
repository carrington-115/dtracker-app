import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reserveImage: [],
};

const reserveImageSlice = createSlice({
  name: "reserve",
  initialState,
  reducers: {
    addTrashImage: (state, action) => {
      state.reserveImage = action.payload;
    },
  },
});

export const { addTrashImage } = reserveImageSlice.actions;
export default reserveImageSlice.reducer;

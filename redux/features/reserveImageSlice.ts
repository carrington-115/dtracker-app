import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trashImages: [],
};

const reserveImageSlice = createSlice({
  name: "reserve",
  initialState,
  reducers: {
    addTrashImage: (state, action) => {
      state.trashImages = action.payload;
    },
  },
});

export const { addTrashImage } = reserveImageSlice.actions;
export default reserveImageSlice.reducer;

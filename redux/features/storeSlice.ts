import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addImage: (state: any, action) => {
      state.images.push(action.payload);
    },
  },
});

export const { addImage } = storeSlice.actions;
export default storeSlice.reducer;

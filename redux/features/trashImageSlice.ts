import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trashImages: [],
};

const immediateTrashSlice = createSlice({
  name: "immediate",
  initialState,
  reducers: {
    addTrashImage: (state: any, action: any) => {
      state.trashImages.push(action?.payload);
    },
    removeTrashImage: (state: any, action) => {
      state.trashImages = state.trashImages.filter(
        (image: any) => image.id !== action.payload
      );
    },
  },
});

export const { addTrashImage, removeTrashImage } = immediateTrashSlice.actions;
export default immediateTrashSlice.reducer;

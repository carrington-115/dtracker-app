import { createSlice } from "@reduxjs/toolkit";

interface initialStateTypes {
  trashImages: string[];
}
const initialState: initialStateTypes = {
  trashImages: [],
};

const immediateTrashSlice = createSlice({
  name: "immediate",
  initialState,
  reducers: {
    addTrashImage: (state: initialStateTypes, action) => {
      state.trashImages.push(action.payload);
      state.trashImages.reverse();
    },
    removeTrashImage: (state: initialStateTypes, action) => {
      state.trashImages = state.trashImages.filter(
        (image: any) => image.id !== action.payload
      );
    },
    emptyState: (state: initialStateTypes) => {
      state.trashImages = [];
    },
  },
});

export const { addTrashImage, removeTrashImage, emptyState } =
  immediateTrashSlice.actions;
export default immediateTrashSlice.reducer;

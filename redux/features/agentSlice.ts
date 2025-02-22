import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  agentIDLink: "",
};

const agentSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    uploadIDImage: (state, action) => {
      state.agentIDLink = action.payload;
    },
    cancelIDImage: (state) => {
      state.agentIDLink = "";
    },
  },
});

export const { uploadIDImage, cancelIDImage } = agentSlice.actions;
export default agentSlice.reducer;

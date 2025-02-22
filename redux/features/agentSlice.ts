import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  agentIDLink: "",
  agentVerifyPhoto: "",
};

const agentSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    uploadIDImage: (state, action) => {
      state.agentIDLink = action.payload;
    },
    uploadAgentVerifyPhoto: (state, action) => {
      state.agentVerifyPhoto = action.payload;
    },
    cancelIDImage: (state) => {
      state.agentIDLink = "";
    },
  },
});

export const { uploadIDImage, cancelIDImage, uploadAgentVerifyPhoto } =
  agentSlice.actions;
export default agentSlice.reducer;

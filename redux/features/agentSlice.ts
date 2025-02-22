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
    cancelAgentVerifyPhoto: (state) => {
      state.agentVerifyPhoto = "";
    },
  },
});

export const {
  uploadIDImage,
  cancelIDImage,
  uploadAgentVerifyPhoto,
  cancelAgentVerifyPhoto,
} = agentSlice.actions;
export default agentSlice.reducer;

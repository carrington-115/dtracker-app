import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: undefined,
  profilePhotoUrl: "",
  agentPhotoUrl: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setProfilePhotoUrl: (state, action) => {
      state.profilePhotoUrl = action.payload;
    },
    setAgentPhotoUrl: (state, action) => {
      state.agentPhotoUrl = action.payload;
    },
  },
});

export const { setName, setAge, setProfilePhotoUrl, setAgentPhotoUrl } =
  profileSlice.actions;
export default profileSlice.reducer;

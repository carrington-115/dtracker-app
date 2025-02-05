import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: undefined,
  profilePhotoUrl: "",
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
  },
});

export const { setName, setAge, setProfilePhotoUrl } = profileSlice.actions;
export default profileSlice.reducer;

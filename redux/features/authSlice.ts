import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
  userDocId: string | null;
  signedInEmail: string;
}

const initialState: initialStateProps = {
  userDocId: null,
  signedInEmail: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUserDocId: (state: any, actions) => {
      state.userDocId = actions.payload;
    },
    setSignedInState: (state: any, actions) => {
      state.signedInEmail = actions;
    },
  },
});

export const { addUserDocId, setSignedInState } = authSlice.actions;
export default authSlice.reducer;

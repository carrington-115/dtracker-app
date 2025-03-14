import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
  userDocId: string | null;
  signedInEmail: string;
  phoneAuth: string;
  authName: string;
  userId: string;
}

const initialState: initialStateProps = {
  userDocId: null,
  signedInEmail: "",
  phoneAuth: "",
  authName: "",
  userId: "",
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
    setPhoneAuth: (state: any, actions) => {
      state.phoneAuth = actions.payload;
    },
    addAuthName: (state: any, actions) => {
      state.authName = actions.payload;
    },
    addUserId: (state, actions) => {
      state.userId = actions.payload;
    },
  },
});

export const {
  addUserDocId,
  setSignedInState,
  setPhoneAuth,
  addAuthName,
  addUserId,
} = authSlice.actions;
export default authSlice.reducer;

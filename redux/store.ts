import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/CounterSlice";
import phoneReducer from "./features/PhoneSlice";
import trashImageReducer from "./features/trashImageSlice";
import trashDetailReducer from "./features/trashDetailSlice";
import reserveImageReducer from "./features/reserveImageSlice";
import profileReducer from "./features/profileSlice";
import storeReducer from "./features/storeSlice";
import agentReducer from "./features/agentSlice";
import authSlicReducer from "./features/authSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    phone: phoneReducer,
    immediate: trashImageReducer,
    trashDetail: trashDetailReducer,
    reserve: reserveImageReducer,
    profile: profileReducer,
    store: storeReducer,
    agent: agentReducer,
    auth: authSlicReducer,
  },
});

export default store;

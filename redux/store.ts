import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/CounterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

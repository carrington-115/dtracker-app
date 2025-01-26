import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/CounterSlice";
import phoneReducer from "./features/PhoneSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    phone: phoneReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/CounterSlice";
import phoneReducer from "./features/PhoneSlice";
import immediateTrashReducer from "./features/trashImageSlice";
import trashDetailReducer from "./features/trashDetailSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    phone: phoneReducer,
    immediate: immediateTrashReducer,
    trashDetail: trashDetailReducer,
  },
});

export default store;

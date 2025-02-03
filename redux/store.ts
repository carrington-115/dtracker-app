import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/CounterSlice";
import phoneReducer from "./features/PhoneSlice";
import immediateTrashReducer from "./features/trashImageSlice";
import trashDetailReducer from "./features/trashDetailSlice";
import reserveImageReducer from "./features/reserveImageSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    phone: phoneReducer,
    immediate: immediateTrashReducer,
    trashDetail: trashDetailReducer,
    reserve: reserveImageReducer,
  },
});

export default store;

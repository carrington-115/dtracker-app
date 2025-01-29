import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/CounterSlice";
import phoneReducer from "./features/PhoneSlice";
import immediateTrashReducer from "./features/trashImageSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    phone: phoneReducer,
    immediateTrash: immediateTrashReducer,
  },
});

export default store;

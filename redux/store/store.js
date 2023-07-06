import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "../features/storeSlice";

const store = configureStore({
  reducer: {
    store: storeReducer,
  },
});

export default store;

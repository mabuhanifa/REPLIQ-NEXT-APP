import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  store: [],
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    hello(state) {
      state.store = [...state.store, "hello"];
    },
  },
});

export default storeSlice.reducer;
export const { hello } = storeSlice.actions;

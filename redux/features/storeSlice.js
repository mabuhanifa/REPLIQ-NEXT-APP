import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  store: [],
};

const storeSlice = createSlice({
  name: "store",
  initialState,
});

export default storeSlice.reducer;

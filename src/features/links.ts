import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../store";

interface CounterState {}

const initialState: CounterState = {};

export const linksSlice = createSlice({
  name: "links",
  initialState,
  reducers: {},
});

export const {} = linksSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default linksSlice.reducer;

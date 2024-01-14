import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heightOfScreen: 0,
  topHeight: {
    first: 0,
    second: 0,
  },
  heightOfFooter: 0,
  heightOfBottomScroller: 0,
  isLoading: true,
};

export const generalSlice = createSlice({
  name: "generalSlice",
  initialState,
  reducers: {
    setHeightOfScreen: (state, action) => {
      state.heightOfScreen = action.payload;
    },
    setTopHeightFirst: (state, action) => {
      state.topHeight.first = action.payload;
    },
    setTopHeightSecond: (state, action) => {
      state.topHeight.second = action.payload;
    },
    setHeightOfFooter: (state, action) => {
      state.heightOfFooter = action.payload;
    },
    setHeightOfBottomScroller: (state) => {
      state.heightOfBottomScroller =
        state.heightOfScreen -
        state.topHeight.first -
        state.topHeight.second -
        state.heightOfFooter;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setHeightOfScreen,
  setTopHeightFirst,
  setTopHeightSecond,
  setHeightOfBottomScroller,
  setHeightOfFooter,
  setLoading,
} = generalSlice.actions;

export default generalSlice.reducer;

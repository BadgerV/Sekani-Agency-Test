import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heightOfScreen: 0,
  topHeight: {
    first: 0,
    second: 0,
  },
  heightOfFooter: 0,
  heightOfBottomScroller: 0,
  isLoading: false,
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
      state.isLoading = true;
      state.heightOfBottomScroller =
        state.heightOfScreen -
        state.topHeight.first -
        state.topHeight.second -
        state.heightOfFooter;
      state.isLoading = false;
    },
  },
});

export const {
  setHeightOfScreen,
  setTopHeightFirst,
  setTopHeightSecond,
  setHeightOfBottomScroller,
  setHeightOfFooter,
} = generalSlice.actions;

export default generalSlice.reducer;

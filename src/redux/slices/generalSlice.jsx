import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heightOfScreen: 0,
  topHeight: {
    first: 0,
    second: 0,
  },
  heightOfFooter: 0,
  heightOfBottomScroller: 0,

  //initializes isLoading to true for demo purposes
  isLoading: true,
};

// For the section scroller section, two approaches were considered. The first involves setting fixed heights for each stacked container, calculating the total height, and applying it as inline styling. However, this method may pose responsiveness challenges. Alternatively, the useRef hook dynamically calculates heights without explicit setting, allowing for a responsive and dynamic page. The useEffect hook is employed to recalculate heights on window resize, ensuring responsiveness.

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
    //set the height of the bottom scroller because of different screen sizes(height)
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

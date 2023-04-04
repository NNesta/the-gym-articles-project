import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "all",
};

export const newsSlice = createSlice({
  initialState,
  name: "news",
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { changeCategory } = newsSlice.actions;
export default newsSlice.reducer;

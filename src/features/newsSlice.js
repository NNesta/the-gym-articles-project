import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "all",
  filter: "",
  showPublishers: false,
};

export const newsSlice = createSlice({
  initialState,
  name: "news",
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
    filterNews: (state, action) => {
      state.filter = action.payload;
    },
    setShowPublishers: (state, action) => {
      state.showPublishers = !state.showPublishers;
    },
  },
});

export const { changeCategory, filterNews, setShowPublishers } =
  newsSlice.actions;
export default newsSlice.reducer;

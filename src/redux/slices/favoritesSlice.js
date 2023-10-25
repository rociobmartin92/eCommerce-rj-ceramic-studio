import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "productSlice",
  initialState: {
    favorites: [],
  },
  reducers: {
    setFavoritesStore: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const { setFavoritesStore } = favoritesSlice.actions;

export default favoritesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "orderSlice",
  initialState: {
    cartItems: [],
  },
  reducers: {
    setCartStore: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { setCartStore } = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
    pinCode: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPinCode: (state, action) => {
      state.pinCode = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const {
  setEmail,
  setAddress,
  setCity,
  setCountry,
  setName,
  setPinCode,
} = userSlice.actions;

export default userSlice.reducer;

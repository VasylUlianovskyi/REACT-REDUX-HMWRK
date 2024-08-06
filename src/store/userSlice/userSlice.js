import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "Hugh",
  lastName: "Jackman",
  isFavourite: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleFavourite: (state) => {
      state.isFavourite = !state.isFavourite;
    },
  },
});

export const { handleFavourite } = userSlice.actions;

export default userSlice.reducer;

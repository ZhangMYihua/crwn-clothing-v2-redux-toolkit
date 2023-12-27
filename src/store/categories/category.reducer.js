import { createSlice } from '@reduxjs/toolkit';

const CATEGORIES_INITIAL_STATE = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'categories',
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
      console.log(state.categories);
    },
  },
});

export const { setCategories } = categorySlice.actions;

export const categoriesReducer = categorySlice.reducer;

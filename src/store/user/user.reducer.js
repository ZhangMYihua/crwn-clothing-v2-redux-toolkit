import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    currentUser: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        setCurentUser(state, action) {
            state.currentUser = action.payload;
        },
    },
});

export const { setCurentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;

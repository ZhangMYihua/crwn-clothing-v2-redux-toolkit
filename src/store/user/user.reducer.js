import { createSlice } from "@reduxjs/toolkit";

import { USER_ACTION_TYPES } from "./user.types";

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

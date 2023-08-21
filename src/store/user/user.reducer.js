import {createSlice} from "@reduxjs/toolkit";
import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};


export const userSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action){
      state.currentUser = action.payload
    }
  }
})


export const { setCurrentUser } = userSlice.actions

export const userReducer = userSlice.reducer
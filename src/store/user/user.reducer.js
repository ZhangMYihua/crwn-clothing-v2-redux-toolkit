import { createSlice } from '@reduxjs/toolkit/dist';

const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user', //the user in user/SET_CURRENT_USER in our user action type
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action){
      state.currentUser = action.payload // this line here, although this looks like a mutation to the onject 'state', but under the hood it is not. Redux toolkit is leveraging a library called immer, it's just for the sake of readability
                                         // as per immer, Of looks like a mutation, but instead of mutating this state object, let's create the same object, but with one differenc, this field currentUser
                                         // now in RTK, when writing reducer using create slice, you are now writing mutation (so it seems) as code im the state itself and just rely on the RTK under the hood for the generation of the brand new State object.
    }
  } //an object with a function inside
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;



import {configureStore,getDefaultMiddleware,serializableCheck} from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import logger from 'redux-logger';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

export const store=configureStore({
  reducer:rootReducer,
  middlaware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(middleWares),
});


// 1- thunk middleware

// const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
//   Boolean
// );

// 2- serilestirelemeyen middleware

// export const store=configureStore({
//   reducer:rootReducer,
//   middlaware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(middleWares),
// });

// 3- immutable middleware 



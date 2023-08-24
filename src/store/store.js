// import { compose, createStore, applyMiddleware } from 'redux';

import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./root-reducer";


import logger from 'redux-logger';

// import { compose, createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const middleWares = [logger];

// const composedEnhancers = compose(applyMiddleware(...middleWares));

// export const store = createStore(rootReducer, undefined, composedEnhancers);

//
// import { rootReducer } from './root-reducer';
//
const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);
//
// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;
//
// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user'],
// };
//
// const persistedReducer = persistReducer(persistConfig, rootReducer);
//`
// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
//
export const store = configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(middleWares),
})


  //   createStore(
  // persistedReducer,
  // undefined,
  // composedEnhancers
// );
//
// export const persistor = persistStore(store);


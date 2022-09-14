import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../reducers.js/todoReducer';

const reducer = {
  todo: todoReducer,
};
export const store = configureStore({
  reducer: reducer,
  // devTools: true,
});

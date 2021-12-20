import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userReducer from './feature/userSlice.js';
import postsReducer from './feature/postsSlice.js';

const reducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
});

const store = configureStore({
  reducer,
});

export default store;

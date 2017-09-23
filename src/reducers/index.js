import { combineReducers } from 'redux';
import usersReducer from './userReducer.js';
import worksReducer from './workReducer.js';
import categoriesReducer from './categoryReducer.js';

const rootReducer =  combineReducers({
  users: usersReducer,
  works: worksReducer,
  categories: categoriesReducer
});

export default rootReducer;
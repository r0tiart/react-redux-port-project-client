import { combineReducers } from 'redux';
import usersReducer from './userReducer.js';
import worksReducer from './workReducer.js'

const rootReducer =  combineReducers({
  users: usersReducer,
  works: worksReducer
});

export default rootReducer;
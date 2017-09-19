import { combineReducers } from 'redux';
import usersReducer from './userReducer.js';

const rootReducer =  combineReducers({
  users: usersReducer
});

export default rootReducer;
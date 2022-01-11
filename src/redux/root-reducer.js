//actual base reduce object, actual code that combines states

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer
});
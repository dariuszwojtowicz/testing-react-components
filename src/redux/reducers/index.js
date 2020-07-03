import { combineReducers } from 'redux'
import { currentUser, users } from './users'

export default combineReducers({
  currentUser,
  users
});

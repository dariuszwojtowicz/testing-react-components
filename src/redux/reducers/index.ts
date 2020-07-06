import { combineReducers } from 'redux'
import { currentUser, users } from './users'
import {User} from "../../models/User";

export default combineReducers({
  currentUser,
  users
});

export interface RootState {
  currentUser: User;
  users: User[]
}

import {User} from "../../models/User";
import {Action} from "redux";

export const userData: User = {
  id: 1,
  name: 'Darek',
  lastName: 'Wójtowicz',
  age: 28,
  login: 'dariuszwojtowicz',
  email: 'dariusz.wojtowicz@hotmail.com'
};

export const usersData: User[] = [
  {
    ...userData
  },
  {
    id: 2,
    name: 'John',
    lastName: 'Random',
    age: 18,
    login: 'johnrandom',
    email: 'john.random1@gmail.com'
  },
  {
    id: 3,
    name: 'Ann',
    lastName: 'Anonim',
    age: 23,
    login: 'annanonim',
    email: 'ann.annonim@gmail.com'
  },
]

export const currentUser = (state: User = userData, action: { type: string, email?: string }) => {
  switch (action.type) {
    case 'UPDATE_EMAIL':
      return {
        ...state,
        email: action.email
      }
    default:
      return state
  }
};

export const users = (state: User[] = usersData, action: Action ) => {
  return state;
};

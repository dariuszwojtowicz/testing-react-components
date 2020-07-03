export const userData = {
  id: 1,
  name: 'Darek',
  lastName: 'Wójtowicz',
  age: 28,
  login: 'dariuszwojtowicz',
  email: 'dariusz.wojtowicz@hotmail.com'
};

export const usersData = [
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

export const currentUser = (state = userData, action) => {
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

export const users = (state = usersData, action) => {
  return state;
};

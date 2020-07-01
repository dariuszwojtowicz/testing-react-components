const user = {
  name: 'Darek',
  lastName: 'Wójtowicz',
  age: 28,
  login: 'dariuszwojtowicz',
  email: 'dariusz.wojtowicz@hotmail.com'
};

export const currentUser = (state = user, action) => {
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

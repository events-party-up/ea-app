import * as c from './userConstants';

export const defaultState = {
  username: '',
  fullName: '',
  loginStatus: '',
  loggedIn: false
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case c.USER_LOGIN:
      return {
        ...state,
        username: action.username,
        fullName: action.fullName,
        loginStatus: 'success',
        loggedIn: true
      };
    case c.USER_LOGIN_FAILURE:
      return {
        ...state,
        username: action.username,
        fullName: '',
        loginStatus: action.error,
        loggedIn: false
      };

    case c.USER_LOGOUT:
      return {
        ...state,
        fullName: '',
        loginStatus: '',
        loggedIn: false
      };

    default:
      return state;
  }
}

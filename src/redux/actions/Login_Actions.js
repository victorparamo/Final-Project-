import { createAction } from 'redux-actions';

const LOGIN_AUTHORIZED = 'LOGIN_AUTHORIZED';
const LOGIN_FAILED = 'LOGIN_FAILED';
const NOT_LOGGED = 'NOT_LOGGED';

const loginAuthorized = createAction(LOGIN_AUTHORIZED);
const loginFailed = createAction(LOGIN_FAILED);
const notLogged = createAction(NOT_LOGGED);

export default {
  types: {
    LOGIN_AUTHORIZED,
    LOGIN_FAILED,
    NOT_LOGGED,
  },
  creators: {
    loginAuthorized,
    loginFailed,
    notLogged,
  },
};

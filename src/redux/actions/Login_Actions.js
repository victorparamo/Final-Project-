import { createAction } from 'redux-actions';

const LOGIN_AUTHORIZED = 'LOGIN_AUTHORIZED';
const LOGIN_FAILED = 'LOGIN_FAILED';

const loginAuthorized = createAction(LOGIN_AUTHORIZED);
const loginFailed = createAction(LOGIN_FAILED);

export default {
  types: {
    LOGIN_AUTHORIZED,
    LOGIN_FAILED,
  },
  creators: {
    loginAuthorized,
    loginFailed,
  },
};

import LoginActions from '../actions/Login_Actions';

const initalState = {
  LoginStatus: LoginActions.types.NOT_LOGGED,
};

const LoginReducer = (state = initalState, action) => {
  const { type } = action;
  switch (type) {
    case LoginActions.types.LOGIN_AUTHORIZED:
      return { LoginStatus: LoginActions.types.LOGIN_AUTHORIZED};

    case LoginActions.types.LOGIN_FAILED:
      return { LoginStatus: LoginActions.types.LOGIN_FAILED};

    case LoginActions.types.NOT_LOGGED:
      return { LoginStatus: LoginActions.types.NOT_LOGGED};

    default:
      return state;
  }
};

export default LoginReducer;

import LoginActions from '../actions/Login_Actions';

const initalState = {
  LoginStatus: LoginActions.creators.notLogged,
};

const LoginReducer = (state = initalState, action) => {
  const { type } = action;

  switch (type) {
    case LoginActions.types.LOGIN_AUTHORIZED:
      return { LoginStatus: LoginActions.creators.loginAuthorized};

    case LoginActions.types.LOGIN_FAILED:
      return { LoginStatus: LoginActions.creators.loginFailed };

    case LoginActions.types.NOT_LOGGED:
      return { LoginStatus: LoginActions.creators.notLogged };

    default:
      return state;
  }
};

export default LoginReducer;

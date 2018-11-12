import LoginActions from '../actions/Login_Actions';

const initalState = {
  LoginStatus: LoginActions.types.NOT_LOGGED,
  image: undefined,
  email: undefined,
  name: undefined,
};

const LoginReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LoginActions.types.LOGIN_AUTHORIZED:
      return { LoginStatus: LoginActions.types.LOGIN_AUTHORIZED,
               image: payload.imageUrl,
               email: payload.email,
               name: payload.name,};

    case LoginActions.types.LOGIN_FAILED:
      return { LoginStatus: LoginActions.types.LOGIN_FAILED,
              image: undefined,
              email: undefined,
              name: undefined,};

    case LoginActions.types.NOT_LOGGED:
      return { LoginStatus: LoginActions.types.NOT_LOGGED,
              image: undefined,
              email: undefined,
              name: undefined,};

    default:
      return state;
  }
};

export default LoginReducer;

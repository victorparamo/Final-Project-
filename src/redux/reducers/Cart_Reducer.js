import CartActions from '../actions/Cart_Actions';

const { ADD_TO_CART, REMOVE_FROM_CART } = CartActions.type;

const initalState = { 
};

const CartReducer = (state = initalState, action) => {
  const { type, payload } = action;
  const newState = { ...state };

  switch (type) {
    case ADD_TO_CART:
        newState[payload.id] = { ...payload };
        return newState;

    case REMOVE_FROM_CART:
        delete newState[payload.id];
        return newState;

    default:
      return state;
  }
};

export default CartReducer;

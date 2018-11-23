import CartActions from '../actions/Cart_Actions';

const { ADD_TO_CART, REMOVE_FROM_CART, ADDED_TO_CART } = CartActions.types;

const initalState = { 
};

const CartReducer = (state = initalState, action) => {
  const { type, payload } = action;
  const newState = { ...state };

  switch (type) {
    case ADDED_TO_CART:
        return newState;

    case REMOVE_FROM_CART:
        return newState;

    default:
      return state;
  }
};

export default CartReducer;

import { createAction } from 'redux-actions';

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const addToCart = createAction(ADD_TO_CART);
const removeFromCart = createAction(REMOVE_FROM_CART);

export default {
  types: {
    ADD_TO_CART,
    REMOVE_FROM_CART,
  },
  creators: {
    addToCart,
    removeFromCart,
  },
};

import { createAction } from 'redux-actions';

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const ADDED_TO_CART = 'ADDED_TO_CART';

const addToCart = createAction(ADD_TO_CART);
const addedToCart = createAction(ADDED_TO_CART);
const removeFromCart = createAction(REMOVE_FROM_CART);

export default {
  types: {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADDED_TO_CART,
  },
  creators: {
    addToCart,
    removeFromCart,
    addedToCart,
  },
};

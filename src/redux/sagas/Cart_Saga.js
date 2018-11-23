import { call, put, select } from 'redux-saga/effects'; 
import rsf from './ReduxFirebase';
import CartActions from '../actions/Cart_Actions';

const { addedToCart } = CartActions.creators;

export function* addToCart(action) {
    const { payload } = action;

    const getToken = (state) => state.cart;
    const token = yield select(getToken);

    let obj = token;

    if(!obj[payload.id]){
        obj[payload.id]={item:payload.obj, quantity:1}
    } else{
        obj[payload.id]={item:payload.obj, quantity:obj[payload.id].quantity + 1}
    }

    yield put(addedToCart(obj));  
}

export default addToCart;

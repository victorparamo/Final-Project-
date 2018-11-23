import { combineReducers } from 'redux';
import login from './Login_Reducer';
import inventory from './Inventory';
import cart from './Cart_Reducer'

export default combineReducers({
    login,
    inventory,
    cart,
});

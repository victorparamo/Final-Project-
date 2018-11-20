import { combineReducers } from 'redux';
import login from './Login_Reducer';
import inventory from './Inventory';

export default combineReducers({
    login,
    inventory,
});

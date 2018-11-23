import { call, put } from 'redux-saga/effects'; 
import rsf from './ReduxFirebase';
import InventoryActions from '../actions/Inventory_Actions';
import CartActions from '../actions/Cart_Actions';

const { inventoryFetched } = InventoryActions.creators;
const { addToCart } = CartActions.creators;

export function* getInventory() {
    try{
        const inventoryTodo = yield call(rsf.database.read, 'inventory');
        yield put(inventoryFetched(inventoryTodo));  
    }
    catch(err){
        console.log("-----Error---->", err);
    }
}

export function* removeInventory(action) {
    const { payload } = action;

    let obj = payload.item;
    let amount = payload.item.amount - 1;
    obj["amount"] = amount;

    try{
        yield call(rsf.database.update, `inventory/${payload.key}`,obj);
        yield put(addToCart({id:payload.key,obj}));
    }
    catch(err){
        console.log("-----Error---->", err);
    }   
}

export default getInventory;

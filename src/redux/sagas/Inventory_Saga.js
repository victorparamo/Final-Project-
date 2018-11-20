import { call, put } from 'redux-saga/effects'; 
import rsf from './ReduxFirebase';
import InventoryActions from '../actions/Inventory_Actions';

const { inventoryFetched } = InventoryActions.creators;

function* getInventory() {
    const inventoryTodo = yield call(rsf.database.read, 'inventory');
    yield put(inventoryFetched(inventoryTodo));  
}

export default getInventory;

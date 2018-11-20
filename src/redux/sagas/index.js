import { all, takeEvery } from 'redux-saga/effects'; 
import InventoryActions from '../actions/Inventory_Actions';
import getInventory from './Inventory_Saga';

function* rootSaga () {
    yield all([
      takeEvery(InventoryActions.types.FETCH_INVENTORY, getInventory),
    ]);
  }
  
  export default rootSaga;
import { all, takeEvery } from 'redux-saga/effects'; 
import InventoryActions from '../actions/Inventory_Actions';
import CartActions from '../actions/Cart_Actions';
import { getInventory, removeInventory } from './Inventory_Saga';
import { addToCart, } from './Cart_Saga';


function* rootSaga () {
    yield all([
      takeEvery(InventoryActions.types.FETCH_INVENTORY, getInventory),
      takeEvery(InventoryActions.types.REMOVE_FROM_INVENTORY, removeInventory),
      takeEvery(CartActions.types.ADD_TO_CART, addToCart),
    ]);
  }
  
  export default rootSaga;
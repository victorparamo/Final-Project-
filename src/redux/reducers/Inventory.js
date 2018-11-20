import InventoryActions from '../actions/Inventory_Actions';

const { FETCH_INVENTORY, INVENTORY_FETCHED } = InventoryActions.types;

const initalState = { 
    stateInventory: FETCH_INVENTORY, dataInventory: {}
};

const InventoryReducer = (state = initalState, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case FETCH_INVENTORY:
        return {stateInventory: FETCH_INVENTORY, dataInventory: {}};

    case INVENTORY_FETCHED:
        return {stateInventory: INVENTORY_FETCHED, dataInventory: payload};

    default:
      return state;
  }
};

export default InventoryReducer;

import { createAction } from 'redux-actions';

const FETCH_INVENTORY = 'FETCH_INVENTORY';
const INVENTORY_FETCHED = 'INVENTORY_FETCHED';
const REMOVE_FROM_INVENTORY = 'REMOVE_FROM_INVENTORY';

const fetchInventory = createAction(FETCH_INVENTORY);
const removeFromInventory = createAction(REMOVE_FROM_INVENTORY);
const inventoryFetched = createAction(INVENTORY_FETCHED);

export default {
  types: {
    FETCH_INVENTORY,
    INVENTORY_FETCHED,
    REMOVE_FROM_INVENTORY,
  },
  creators: {
    fetchInventory,
    removeFromInventory,
    inventoryFetched,
  },
};

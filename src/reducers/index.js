import { combineReducers } from 'redux';
import blockNumberReducer from './blockNumberReducer';
import blocksReducer from './blocksReducer';
import blockReducer from './blockReducer';
import transactionNumberReducer from './transactionNumberReducer';
import transactionReducer from './transactionReducer';

export default combineReducers({
  blockNumber: blockNumberReducer,
  blocks: blocksReducer,
  block: blockReducer,
  transNumber: transactionNumberReducer,
  transc: transactionReducer,

});

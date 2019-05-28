import Web3 from 'web3';

import { FETCH_BLOCKNUMBER, FETCH_BLOCKS, FETCH_BLOCK,} from './types';

var web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/e109939b94184fa0a11cfaf0f6f59eea'));

export const fetchBlockNumber = () => async dispatch => {
    const blockNumber = await web3.eth.getBlockNumber();
    dispatch({ type: FETCH_BLOCKNUMBER, payload: blockNumber });
  
    var maxBlocks = 10;
    if (blockNumber < maxBlocks) {
      maxBlocks = blockNumber;
    }
  
    var blocks = {
      ids: [],
      hash: [],
    };
  
    for (var i = 0; i < maxBlocks; i++) {
      var block = await web3.eth.getBlock(blockNumber - i);
      if (block === null) {
        console.log('null block', blockNumber - i);
      } else {
        blocks.ids.push(block.number);
        blocks.hash.push(block.hash);
      }
    }
  
    dispatch({ type: FETCH_BLOCKS, payload: blocks });
  
  };
  
  export const fetchBlock = (hash) => async dispatch => {
    const block = await web3.eth.getBlock(hash);

  
    dispatch({ type: FETCH_BLOCK, payload: block });
  };
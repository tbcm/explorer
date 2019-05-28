import Web3 from 'web3';
import { FETCH_TRANSNUMBER, FETCH_TRANSC } from './types';

var web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/e109939b94184fa0a11cfaf0f6f59eea'));

export const fetchTransNumber = (blockNumber, transkNumber) => async dispatch => {
    const transNumber = await web3.eth.getTransactionFromBlock(blockNumber, transkNumber);  
    dispatch({type: FETCH_TRANSNUMBER, payload: transNumber});
  
    var maxTrans = 10;
    if(transNumber < maxTrans){
      maxTrans = transNumber;
    }
    var transc = {
      ide: [],
      hash: [],
    };
  
    for(var i = 0; i < maxTrans; i++){
      var trans = await web3.getTransaction(transNumber - i);
      if(trans === null){
        console.log("null trans", transNumber - i);
      }else{

        transc.value.push(trans.value);
        transc.hash.push(trans.hash);
      }
    }
    dispatch({type: FETCH_TRANSC, payload: transc});
  }

  export const fetchTransc = (hash) => async dispatch => {
    const trans = await web3.eth.getTransaction(hash);

    dispatch({type: FETCH_TRANSC, payload: trans});
  }
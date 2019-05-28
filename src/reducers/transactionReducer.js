import {FETCH_TRANSC} from '../actions/types';

export default function(state=[], action){
    switch(action.payload){
        case FETCH_TRANSC:
            return action.payload;
        default:
            return state;    
    }
}
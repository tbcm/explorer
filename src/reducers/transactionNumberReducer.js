import {FETCH_TRANSNUMBER} from '../actions/types';

export default function(state=[], action){
    switch(action.type){
        case FETCH_TRANSNUMBER:
            return action.payload;
        default:
            return state;

    }
    
}
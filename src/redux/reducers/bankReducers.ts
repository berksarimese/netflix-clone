import {Action} from '../actions/index'
import { ActionType } from '../actionTypes';

const initialState = 0;



const reducer = (state: number = initialState, aciton: Action) => {

    switch (aciton.type) {
        case ActionType.DEPOSIT:
            return state + aciton.payload;
        case ActionType.WITHDRAW:
            return state - aciton.payload;
        case ActionType.BAKRUPT:
            return 0;    
        default:
            return state;
    }

}

export default reducer;
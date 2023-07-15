import { ShowAction, showState } from "../../types/showInfo";

const defaultState: showState = {
    data:[],
    loading: false,
    error:''
}

const showInfoReducer = (state: showState = defaultState, action : ShowAction) => {
    switch(action.type) {
        case'SHOW_START':
            return{...state, loading:true, error:''};
        case'SHOW_SUCCESS':
            return{...state, loading: false, data: action.payload};
        case'SHOW_ERROR':
            return{...state, loading: false, error:'LIST FAILED'};
        default:
            return state;
    }
}

export default showInfoReducer;
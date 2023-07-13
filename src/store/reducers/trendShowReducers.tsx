import { TrendShowAction, trendShowState } from "../../types/trendShow";

const defaultState: trendShowState = {
    data:[],
    loading: false,
    error:''
}

const trendShowsReducer = (state: trendShowState = defaultState, action : TrendShowAction) => {
    switch(action.type) {
        case'TRENDSHOW_START':
            return{...state, loading:true, error:''};
        case'TRENDSHOW_SUCCESS':
            return{...state, loading: false, data: action.payload};
        case'TRENDSHOW_ERROR':
            return{...state, loading: false, error:'LIST FAILED'};
        default:
            return state;
    }
}

export default trendShowsReducer;
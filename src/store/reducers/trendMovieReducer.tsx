import { TrendMvAction, trendMvState } from "../../types/trendMovie";

const defaultState: trendMvState = {
    data:[],
    loading: false,
    error:''
}

const trendMoviesReducer = (state: trendMvState = defaultState, action : TrendMvAction) => {
    switch(action.type) {
        case'TRENDMV_START':
            return{...state, loading:true, error:''};
        case'TRENDMV_SUCCESS':
            return{...state, loading: false, data: action.payload};
        case'TRENDMV_ERROR':
            return{...state, loading: false, error:'LIST FAILED'};
        default:
            return state;
    }
}

export default trendMoviesReducer;
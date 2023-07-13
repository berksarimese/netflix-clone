import { GenreTvAction, genreTvState } from "../../types/tvGenres";

const defaultState: genreTvState = {
    data:[],
    loading: false,
    error:''
}

const genreTvReducer = (state: genreTvState = defaultState, action : GenreTvAction) => {
    switch(action.type) {
        case'GENRETV_START':
            return{...state, loading:true, error:''};
        case'GENRETV_SUCCESS':
            return{...state, loading: false, data: action.payload};
        case'GENRETV_ERROR':
            return{...state, loading: false, error:'LIST FAILED'};
        default:
            return state;
    }
}

export default genreTvReducer;
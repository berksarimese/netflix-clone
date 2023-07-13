import { GenreMvAction, genreMvState } from "../../types/mvGenres";

const defaultState: genreMvState = {
    data:[],
    loading: false,
    error:''
}

const genreMvReducer = (state: genreMvState = defaultState, action : GenreMvAction) => {
    switch(action.type) {
        case'GENREMV_START':
            return{...state, loading:true, error:''};
        case'GENREMV_SUCCESS':
            return{...state, loading: false, data: action.payload};
        case'GENREMV_ERROR':
            return{...state, loading: false, error:'LIST FAILED'};
        default:
            return state;
    }
}

export default genreMvReducer;
import { SimilarAction, similarState } from "../../types/similar";

const defaultState: similarState = {
    data:[],
    loading: false,
    error:''
}

const similarReducer = (state: similarState = defaultState, action : SimilarAction) => {
    switch(action.type) {
        case'SIMILAR_START':
            return{...state, loading:true, error:''};
        case'SIMILAR_SUCCESS':
            return{...state, loading: false, data: action.payload};
        case'SIMILAR_ERROR':
            return{...state, loading: false, error:'LIST FAILED'};
        default:
            return state;
    }
}

export default similarReducer;
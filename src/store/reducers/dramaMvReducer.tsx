import { DramaMvAction, dramaMvState } from "../../types/dramaMovies";

const defaultState: dramaMvState = {
    data:[],
    loading: false,
    error:''
}

const dramaMvReducer = (state: dramaMvState = defaultState, action : DramaMvAction) => {
    switch(action.type) {
        case'DRAMAMV_START':
            return{...state, loading:true, error:''};
        case'DRAMAMV_SUCCESS':
            return{...state, loading: false, data: action.payload};
        case'DRAMAMV_ERROR':
            return{...state, loading: false, error:'LIST FAILED'};
        default:
            return state;
    }
}

export default dramaMvReducer;
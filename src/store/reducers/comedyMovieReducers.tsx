import { comedyMvState, ComedyMyAction } from "../../types/comedyMovies";

const defaultState: comedyMvState = {
    data:[],
    loading: false,
    error:''
}

const comedyMovieReducer = (state: comedyMvState = defaultState, action : ComedyMyAction) => {
    switch(action.type) {
        case'COMEDYMV_START':
            return{...state, loading:true, error:''};
        case'COMEDYMV_SUCCESS':
            return{...state, loading: false, data: action.payload};
        case'COMEDYMV_ERROR':
            return{...state, loading: false, error:'LIST FAILED'};
        default:
            return state;
    }
}

export default comedyMovieReducer;
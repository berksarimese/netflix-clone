import { ComedyShowAction, comedyShowState } from "../../types/comedyShows";

const defaultState: comedyShowState = {
    data:[],
    loading: false,
    error:''
}

const comedyShowReducer = (state: comedyShowState = defaultState, action : ComedyShowAction) => {
    switch(action.type) {
        case'COMEDYSHOW_START':
            return{...state, loading:true, error:''};
        case'COMEDYSHOW_SUCCESS':
            return{...state, loading: false, data: action.payload};
        case'COMEDYSHOW_ERROR':
            return{...state, loading: false, error:'LIST FAILED'};
        default:
            return state;
    }
}

export default comedyShowReducer;
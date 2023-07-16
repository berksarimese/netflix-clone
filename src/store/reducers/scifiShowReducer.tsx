import { ScifiShowAction, scifiShowState } from "../../types/scifiShows";

const defaultState: scifiShowState = {
    data:[],
    loading: false,
    error:''
}

const scifiShowReducer = (state: scifiShowState = defaultState, action : ScifiShowAction) => {
    switch(action.type) {
        case'SCIFISHOW_START':
            return{...state, loading:true, error:''};
        case'SCIFISHOW_SUCCESS':
            return{...state, loading: false, data: action.payload};
        case'SCIFISHOW_ERROR':
            return{...state, loading: false, error:'LIST FAILED'};
        default:
            return state;
    }
}

export default scifiShowReducer;
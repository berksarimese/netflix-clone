import { EpisodesAction, episodesState } from "../../types/episodes";

const defaultState: episodesState = {
    data:[],
    loading: false,
    error:''
}

const episodesReducer = (state: episodesState = defaultState, action : EpisodesAction) => {
    switch(action.type) {
        case'EPISODES_START':
            return{...state, loading:true, error:''};
        case'EPISODES_SUCCESS':
            return{...state, loading: false, data: action.payload};
        case'EPISODES_ERROR':
            return{...state, loading: false, error:'LIST FAILED'};
        default:
            return state;
    }
}

export default episodesReducer;
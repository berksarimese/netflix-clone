import { GenreMvDispatch } from "../../types/mvGenres";
import { GenreTvDispatch } from "../../types/tvGenres";
import api from "../../utils/api";

export const genreTv = () => async(dispatch: GenreTvDispatch) => {
    dispatch({type:'GENRETV_START'});
    try {
        const response = await  api.get('/genre/tv/list?api_key=4b6302b96ea953e5fff1cabe4032191e&language=en'); 
        const getList = response.data.genres;
        dispatch({type:'GENRETV_SUCCESS', payload: getList});
    }
    catch{
        dispatch({type:'GENRETV_ERROR'});
    }
}

export const genreMv = () => async(dispatch: GenreMvDispatch) => {
    dispatch({type:'GENREMV_START'});
    try {
        const response = await  api.get('/genre/movie/list?api_key=4b6302b96ea953e5fff1cabe4032191e&language=en');
        
        const getList = response.data.genres;
        dispatch({type:'GENREMV_SUCCESS', payload: getList});
    }
    catch{
        dispatch({type:'GENREMV_ERROR'});
    }
}


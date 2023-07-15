import { SimilarDispatch } from "../../types/similar";
import api from "../../utils/api";

export const similar = (id:number, type:string) => async(dispatch: SimilarDispatch) => {
    dispatch({type:'SIMILAR_START'});
    try {
        const response = await  api.get(`/${type}/${id}/similar?api_key=4b6302b96ea953e5fff1cabe4032191e&language=en`); 
        const getList = response.data.results.slice(0,9);
        dispatch({type:'SIMILAR_SUCCESS', payload: getList});
    }
    catch{
        dispatch({type:'SIMILAR_ERROR'});
    }
}




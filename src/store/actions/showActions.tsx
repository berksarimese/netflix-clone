import { EpisodesDispatch } from "../../types/episodes";
import { ShowDiscpatch } from "../../types/showInfo";
import api from "../../utils/api";

export const showInfo = (id:number) => async(dispatch: ShowDiscpatch) => {
    dispatch({type:'SHOW_START'});
    try {
        const response = await  api.get(`/tv/${id}?api_key=4b6302b96ea953e5fff1cabe4032191e`); 
        const getData = response.data.seasons;
        const updatedData = getData.map((movie:any) => ( 
            {
                episodes: movie.episode_count,
                season: movie.season_number
            }));
            
        dispatch({type:'SHOW_SUCCESS', payload: updatedData});
    }
    catch{
        dispatch({type:'SHOW_ERROR'});
    }
}

export const episodeList = (id:any, season:number) => async(dispatch: EpisodesDispatch) => {
    dispatch({type:'EPISODES_START'});
    try {
        const response = await  api.get(`/tv/${id}/season/${season}?api_key=4b6302b96ea953e5fff1cabe4032191e`); 
        const getData = response.data.episodes;   
        dispatch({type:'EPISODES_SUCCESS', payload: getData});
    }
    catch{
        dispatch({type:'EPISODES_ERROR'});
    }
}




        
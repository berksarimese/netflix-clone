import { ComedyMvDispatch } from "../../types/comedyMovies"
import { ComedyShowDispatch } from "../../types/comedyShows";
import { DramaMvDispatch } from "../../types/dramaMovies";
import { ScifiShowDispatch } from "../../types/scifiShows";
import { TrendMvDispatch } from "../../types/trendMovie";
import { TrendShowDispatch } from "../../types/trendShow";
import api from "../../utils/api";

export const comedyMovies = () => async(dispatch: ComedyMvDispatch) => {
    dispatch({type:'COMEDYMV_START'});
    try {
        const response = await  api.get('/discover/movie?api_key=4b6302b96ea953e5fff1cabe4032191e&include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=35');
        
        // const getList = response.data.results.slice(0,18)
        const getList = response.data.results;
        const updatedMovieList = getList.map((movie:any) => ( 
        {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            image: movie.backdrop_path,
            date: movie.release_date,
            media_type: movie.media_type,
            genre: movie.genre_ids,
            hover: false
        }));
        dispatch({type:'COMEDYMV_SUCCESS', payload: updatedMovieList});
    }
    catch{
        dispatch({type:'COMEDYMV_ERROR'});
    }
}

export const dramaMovies = () => async(dispatch: DramaMvDispatch) => {
    dispatch({type:'DRAMAMV_START'});
    try {
        const response = await  api.get('/discover/movie?api_key=4b6302b96ea953e5fff1cabe4032191e&include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=18');
        
        const getList = response.data.results;
        const updatedMovieList = getList.map((movie:any) => ( 
        {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            image: movie.backdrop_path,
            date: movie.release_date,
            media_type: movie.media_type,
            genre: movie.genre_ids,
            hover: false
        }));
        dispatch({type:'DRAMAMV_SUCCESS', payload: updatedMovieList});
    }
    catch{
        dispatch({type:'DRAMAMV_ERROR'});
    }
}

export const trendMovies = () => async(dispatch: TrendMvDispatch) => {
    dispatch({type:'TRENDMV_START'});
    try {
        const response = await  api.get('/trending/movie/day?api_key=4b6302b96ea953e5fff1cabe4032191e&language=en-US');
        
        const getList = response.data.results;
        const updatedMovieList = getList.map((movie:any) => ( 
        {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            image: movie.backdrop_path,
            date: movie.release_date,
            media_type: movie.media_type,
            genre: movie.genre_ids,
            hover: false
        }));
        dispatch({type:'TRENDMV_SUCCESS', payload: updatedMovieList});
    }
    catch{
        dispatch({type:'TRENDMV_ERROR'});
    }
}

export const trendShows = () => async(dispatch: TrendShowDispatch) => {
    dispatch({type:'TRENDSHOW_START'});
    try {
        const response = await  api.get('/tv/popular?api_key=4b6302b96ea953e5fff1cabe4032191e&language=en-US&with_origin_country=US&without_genres=16&without_keywords=anime');
        
        const getList = response.data.results;
        const updatedMovieList = getList.map((movie:any) => ( 
        {
            id: movie.id,
            title: movie.name,
            description: movie.overview,
            image: movie.backdrop_path,
            date: movie.first_air_date,
            media_type: movie.media_type,
            genre: movie.genre_ids,
            hover: false
        }));
        dispatch({type:'TRENDSHOW_SUCCESS', payload: updatedMovieList});
    }
    catch{
        dispatch({type:'TRENDSHOW_ERROR'});
    }
}

export const comedyShows = () => async(dispatch: ComedyShowDispatch) => {
    dispatch({type:'COMEDYSHOW_START'});
    try {
        const response = await  api.get('discover/tv?api_key=4b6302b96ea953e5fff1cabe4032191e&include_adult=false&language=en-US&with_genres=35&with_origin_country=US&without_genres=16&without_keywords=anime');
        
        const getList = response.data.results;
        const updatedMovieList = getList.map((movie:any) => ( 
        {
            id: movie.id,
            title: movie.name,
            description: movie.overview,
            image: movie.backdrop_path,
            date: movie.first_air_date,
            media_type: movie.media_type,
            genre: movie.genre_ids,
            hover: false
        }));
        dispatch({type:'COMEDYSHOW_SUCCESS', payload: updatedMovieList});
    }
    catch{
        dispatch({type:'COMEDYSHOW_ERROR'});
    }
}

export const scifiShows = () => async(dispatch: ScifiShowDispatch) => {
    dispatch({type:'SCIFISHOW_START'});
    try {
        const response = await  api.get('discover/tv?api_key=4b6302b96ea953e5fff1cabe4032191e&include_adult=false&language=en-US&with_genres=10765&with_origin_country=US&without_genres=16&without_keywords=anime');
        
        const getList = response.data.results;
        const updatedMovieList = getList.map((movie:any) => ( 
        {
            id: movie.id,
            title: movie.name,
            description: movie.overview,
            image: movie.backdrop_path,
            date: movie.first_air_date,
            media_type: movie.media_type,
            genre: movie.genre_ids,
            hover: false
        }));
        dispatch({type:'SCIFISHOW_SUCCESS', payload: updatedMovieList});
    }
    catch{
        dispatch({type:'SCIFISHOW_ERROR'});
    }
}
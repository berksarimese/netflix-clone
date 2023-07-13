import { combineReducers } from "redux";
import { comedyMvState } from "../types/comedyMovies";
import { genreMvState } from "../types/mvGenres";
import { trendMvState } from "../types/trendMovie";
import { trendShowState } from "../types/trendShow";
import { genreTvState } from "../types/tvGenres";
import comedyMovieReducers from "./reducers/comedyMovieReducers";
import genreMvReducer from "./reducers/genreMvReducer";
import genreTvReducer from "./reducers/genreTvReducer";
import trendMovieReducer from "./reducers/trendMovieReducer";
import trendShowsReducer from "./reducers/trendShowReducers";

export interface AppState {
    comedyMovies: comedyMvState;
    trendMovies: trendMvState;
    trendShows: trendShowState;
    genreTv: genreTvState;
    genreMv: genreMvState;
}

const rootReducer = combineReducers<AppState>({
    comedyMovies: comedyMovieReducers,
    trendMovies: trendMovieReducer,
    trendShows: trendShowsReducer,
    genreTv: genreTvReducer,
    genreMv: genreMvReducer
});

export default rootReducer;
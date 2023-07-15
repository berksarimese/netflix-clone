import { combineReducers } from "redux";
import { comedyMvState } from "../types/comedyMovies";
import { episodesState } from "../types/episodes";
import { genreMvState } from "../types/mvGenres";
import { showState } from "../types/showInfo";
import { similarState } from "../types/similar";
import { trendMvState } from "../types/trendMovie";
import { trendShowState } from "../types/trendShow";
import { genreTvState } from "../types/tvGenres";
import comedyMovieReducers from "./reducers/comedyMovieReducers";
import episodesReducer from "./reducers/episodesReducer";
import genreMvReducer from "./reducers/genreMvReducer";
import genreTvReducer from "./reducers/genreTvReducer";
import showInfoReducer from "./reducers/showInfoReducer";
import similarReducer from "./reducers/similarReducer";
import trendMovieReducer from "./reducers/trendMovieReducer";
import trendShowsReducer from "./reducers/trendShowReducers";

export interface AppState {
    comedyMovies: comedyMvState;
    trendMovies: trendMvState;
    trendShows: trendShowState;
    genreTv: genreTvState;
    genreMv: genreMvState;
    similar: similarState;
    showInfo: showState;
    episodes: episodesState;
}

const rootReducer = combineReducers<AppState>({
    comedyMovies: comedyMovieReducers,
    trendMovies: trendMovieReducer,
    trendShows: trendShowsReducer,
    genreTv: genreTvReducer,
    genreMv: genreMvReducer,
    similar: similarReducer,
    showInfo: showInfoReducer,
    episodes: episodesReducer
});

export default rootReducer;
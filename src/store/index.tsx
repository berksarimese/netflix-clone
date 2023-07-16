import { combineReducers } from "redux";
import { comedyMvState } from "../types/comedyMovies";
import { comedyShowState } from "../types/comedyShows";
import { dramaMvState } from "../types/dramaMovies";
import { episodesState } from "../types/episodes";
import { genreMvState } from "../types/mvGenres";
import { scifiShowState } from "../types/scifiShows";
import { showState } from "../types/showInfo";
import { similarState } from "../types/similar";
import { trendMvState } from "../types/trendMovie";
import { trendShowState } from "../types/trendShow";
import { genreTvState } from "../types/tvGenres";
import comedyMovieReducers from "./reducers/comedyMovieReducers";
import comedyShowReducer from "./reducers/comedyShowReducer";
import dramaMvReducer from "./reducers/dramaMvReducer";
import episodesReducer from "./reducers/episodesReducer";
import genreMvReducer from "./reducers/genreMvReducer";
import genreTvReducer from "./reducers/genreTvReducer";
import scifiShowReducer from "./reducers/scifiShowReducer";
import showInfoReducer from "./reducers/showInfoReducer";
import similarReducer from "./reducers/similarReducer";
import trendMovieReducer from "./reducers/trendMovieReducer";
import trendShowsReducer from "./reducers/trendShowReducers";

export interface AppState {
    comedyMovies: comedyMvState;
    dramaMovies: dramaMvState;
    trendMovies: trendMvState;
    trendShows: trendShowState;
    comedyShows: comedyShowState;
    scifiShows: scifiShowState;
    genreTv: genreTvState;
    genreMv: genreMvState;
    similar: similarState;
    showInfo: showState;
    episodes: episodesState;
}

const rootReducer = combineReducers<AppState>({
    comedyMovies: comedyMovieReducers,
    dramaMovies: dramaMvReducer,
    trendMovies: trendMovieReducer,
    trendShows: trendShowsReducer,
    comedyShows: comedyShowReducer,
    genreTv: genreTvReducer,
    genreMv: genreMvReducer,
    similar: similarReducer,
    showInfo: showInfoReducer,
    episodes: episodesReducer,
    scifiShows: scifiShowReducer
});

export default rootReducer;
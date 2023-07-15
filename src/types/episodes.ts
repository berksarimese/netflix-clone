import { ThunkDispatch } from "redux-thunk"


export interface Episodes {
    episodes: number,
    seasons: number
}

export interface episodesState {
    data: any;
    loading: boolean;
    error: string;
}

interface EPISODES_START {
    type: 'EPISODES_START';
}

interface EPISODES_SUCCESS {
    type: 'EPISODES_SUCCESS';
    payload: Episodes;
}

interface EPISODES_ERROR {
    type: 'EPISODES_ERROR';
}

export type EpisodesAction = EPISODES_START | EPISODES_SUCCESS | EPISODES_ERROR;
export type EpisodesDispatch = ThunkDispatch<episodesState, void, EpisodesAction>;

import { ThunkDispatch } from "redux-thunk"


export interface Show {
    episodes: number,
    seasons: number
}

export interface showState {
    data: any;
    loading: boolean;
    error: string;
}

interface SHOW_START {
    type: 'SHOW_START';
}

interface SHOW_SUCCESS {
    type: 'SHOW_SUCCESS';
    payload: Show;
}

interface SHOW_ERROR {
    type: 'SHOW_ERROR';
}

export type ShowAction = SHOW_START | SHOW_SUCCESS | SHOW_ERROR;
export type ShowDiscpatch = ThunkDispatch<showState, void, ShowAction>;

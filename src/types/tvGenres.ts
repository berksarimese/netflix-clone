import { ThunkDispatch } from "redux-thunk"


export interface Genre {
    id: number;
    name: string;
}

export interface genreTvState {
    data: any;
    loading: boolean;
    error: string;
}

interface GENRETV_START {
    type: 'GENRETV_START';
}

interface GENRETV_SUCCESS {
    type: 'GENRETV_SUCCESS';
    payload: Genre;
}

interface GENRETV_ERROR {
    type: 'GENRETV_ERROR';
}

export type GenreTvAction = GENRETV_START | GENRETV_SUCCESS | GENRETV_ERROR;
export type GenreTvDispatch = ThunkDispatch<genreTvState, void, GenreTvAction>;

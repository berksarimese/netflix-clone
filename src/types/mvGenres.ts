import { ThunkDispatch } from "redux-thunk"


export interface Genre {
    id: number;
    name: string;
}

export interface genreMvState {
    data: any;
    loading: boolean;
    error: string;
}

interface GENREMV_START {
    type: 'GENREMV_START';
}

interface GENREMV_SUCCESS {
    type: 'GENREMV_SUCCESS';
    payload: Genre;
}

interface GENREMV_ERROR {
    type: 'GENREMV_ERROR';
}

export type GenreMvAction = GENREMV_START | GENREMV_SUCCESS | GENREMV_ERROR;
export type GenreMvDispatch = ThunkDispatch<genreMvState, void, GenreMvAction>;

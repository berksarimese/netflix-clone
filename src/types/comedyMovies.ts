import { ThunkDispatch } from "redux-thunk"


export interface List {
    id: number;
    title: string,
    description: string;
    image: string;
    date: string;
    media_type: string,
    genre: any,
    hover: boolean;
}

export interface comedyMvState {
    data: any;
    loading: boolean;
    error: string;
}

interface COMEDYMV_START {
    type: 'COMEDYMV_START';
}

interface COMEDYMV_SUCCESS {
    type: 'COMEDYMV_SUCCESS';
    payload: List;
}

interface COMEDYMV_ERROR {
    type: 'COMEDYMV_ERROR';
}

export type ComedyMyAction = COMEDYMV_START | COMEDYMV_SUCCESS | COMEDYMV_ERROR;
export type ComedyMvDispatch = ThunkDispatch<comedyMvState, void, ComedyMyAction>;

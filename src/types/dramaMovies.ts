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

export interface dramaMvState {
    data: any;
    loading: boolean;
    error: string;
}

interface DRAMAMV_START {
    type: 'DRAMAMV_START';
}

interface DRAMAMV_SUCCESS {
    type: 'DRAMAMV_SUCCESS';
    payload: List;
}

interface DRAMAMV_ERROR {
    type: 'DRAMAMV_ERROR';
}

export type DramaMvAction = DRAMAMV_START | DRAMAMV_SUCCESS | DRAMAMV_ERROR;
export type DramaMvDispatch = ThunkDispatch<dramaMvState, void, DramaMvAction>;

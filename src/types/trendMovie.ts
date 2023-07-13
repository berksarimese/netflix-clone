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

export interface trendMvState {
    data: any;
    loading: boolean;
    error: string;
}

interface TRENDMV_START {
    type: 'TRENDMV_START';
}

interface TRENDMV_SUCCESS {
    type: 'TRENDMV_SUCCESS';
    payload: List;
}

interface TRENDMV_ERROR {
    type: 'TRENDMV_ERROR';
}

export type TrendMvAction = TRENDMV_START | TRENDMV_SUCCESS | TRENDMV_ERROR;
export type TrendMvDispatch = ThunkDispatch<trendMvState, void, TrendMvAction>;

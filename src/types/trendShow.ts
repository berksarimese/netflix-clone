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

export interface trendShowState {
    data: any;
    loading: boolean;
    error: string;
}

interface TRENDSHOW_START {
    type: 'TRENDSHOW_START';
}

interface TRENDSHOW_SUCCESS {
    type: 'TRENDSHOW_SUCCESS';
    payload: List;
}

interface TRENDSHOW_ERROR {
    type: 'TRENDSHOW_ERROR';
}

export type TrendShowAction = TRENDSHOW_START | TRENDSHOW_SUCCESS | TRENDSHOW_ERROR;
export type TrendShowDispatch = ThunkDispatch<trendShowState, void, TrendShowAction>;

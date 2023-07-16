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

export interface comedyShowState {
    data: any;
    loading: boolean;
    error: string;
}

interface COMEDYSHOW_START {
    type: 'COMEDYSHOW_START';
}

interface COMEDYSHOW_SUCCESS {
    type: 'COMEDYSHOW_SUCCESS';
    payload: List;
}

interface COMEDYSHOW_ERROR {
    type: 'COMEDYSHOW_ERROR';
}

export type ComedyShowAction = COMEDYSHOW_START | COMEDYSHOW_SUCCESS | COMEDYSHOW_ERROR;
export type ComedyShowDispatch = ThunkDispatch<comedyShowState, void, ComedyShowAction>;

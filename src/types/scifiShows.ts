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

export interface scifiShowState {
    data: any;
    loading: boolean;
    error: string;
}

interface SCIFISHOW_START {
    type: 'SCIFISHOW_START';
}

interface SCIFISHOW_SUCCESS {
    type: 'SCIFISHOW_SUCCESS';
    payload: List;
}

interface SCIFISHOW_ERROR {
    type: 'SCIFISHOW_ERROR';
}

export type ScifiShowAction = SCIFISHOW_START | SCIFISHOW_SUCCESS | SCIFISHOW_ERROR;
export type ScifiShowDispatch = ThunkDispatch<scifiShowState, void, ScifiShowAction>;

import { ThunkDispatch } from "redux-thunk"


export interface Similar {
    id: number;
    name: string;
}

export interface similarState {
    data: any;
    loading: boolean;
    error: string;
}

interface SIMILAR_START {
    type: 'SIMILAR_START';
}

interface SIMILAR_SUCCESS {
    type: 'SIMILAR_SUCCESS';
    payload: Similar;
}

interface SIMILAR_ERROR {
    type: 'SIMILAR_ERROR';
}

export type SimilarAction = SIMILAR_START | SIMILAR_SUCCESS | SIMILAR_ERROR;
export type SimilarDispatch = ThunkDispatch<similarState, void, SimilarAction>;

import { ActionType } from "../actionTypes"
import { Dispatch } from "redux"
import { Action } from "../actions"


export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type:ActionType.DEPOSIT,
            payload: amount
        })
    }
}

export const withdrawMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type:ActionType.WITHDRAW,
            payload: amount
        })
    }
}

export const bankrupt = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type:ActionType.BAKRUPT,
            payload: amount
        })
    }
}
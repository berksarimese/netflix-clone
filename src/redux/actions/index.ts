import { ActionType } from '../actionTypes'

interface DepositAction {
    type: ActionType.DEPOSIT
    payload: number
}

interface WithdrawAction {
    type: ActionType.WITHDRAW
    payload: number
}

interface BankruptAction {
    type: ActionType.BAKRUPT
}

export type Action = DepositAction | WithdrawAction | BankruptAction
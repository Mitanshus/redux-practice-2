import { ActionType } from "../action-type"
import { Dispatch } from "redux"
import { Action } from "../actions/action"

export const depositMoney = (amount:number) =>{
    return(dispatch:Dispatch<Action>) => {
        dispatch({
            type:ActionType.DEPOSIT,
            payload:amount
        })
    }
}

export const withdrawMoney = (amount:number) =>{
    return(dispatch:Dispatch<Action>) => {
        dispatch({
            type:ActionType.WITHDRAW,
            payload:amount
        })
    }
}


export const bankcruptMoney = (amount:number) =>{
    return(dispatch:Dispatch<Action>) => {
        dispatch({
            type:ActionType.BANKCRUPT
        })
    }
}




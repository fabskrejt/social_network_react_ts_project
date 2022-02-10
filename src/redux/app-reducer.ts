import {Dispatch} from "redux";
import {getAuthUserDataThunkCreator} from "./auth-reducer";

const initialState = {
    isInitialised: false
}

type  InitialStateType = typeof initialState
type ActionType = initialisedActionType

export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "APP-REDUCER/SET-INITIALISED":
            return {...state, isInitialised: true}
        default:
            return state
    }
}

type initialisedActionType = ReturnType<typeof initialisedSuccessAC>

export const initialisedSuccessAC = () => {
    return {
        type: 'APP-REDUCER/SET-INITIALISED'
    }
}



export const initialisedTC = () => (dispatch: Dispatch) => {
    //@ts-ignore
     let promise = dispatch(getAuthUserDataThunkCreator())
         promise.then(() => {
             dispatch(initialisedSuccessAC())
         })


}
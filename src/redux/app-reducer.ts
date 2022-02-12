import {Dispatch} from "redux";
import {getAuthUserDataThunkCreator} from "./auth-reducer";
import {appStateType} from "./store";
import {ThunkAction} from 'redux-thunk'

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


type  ThunkType = ThunkAction<void, appStateType, unknown, ActionType>
export const initialisedTC = (): ThunkType => async dispatch => {
    await dispatch(getAuthUserDataThunkCreator())
    dispatch(initialisedSuccessAC())
}
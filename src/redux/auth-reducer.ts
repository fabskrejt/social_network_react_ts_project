import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";

const SET_USER_DATA = 'AUTH-REDUCER/SET-USER-DATA';
const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

type InitialStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}
export type AuthReducerActionTypes = setUserData

export const authReducer = (state: InitialStateType = initialState, action: AuthReducerActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}
        default:
            return state
    }
}

type setUserData = ReturnType<typeof setUserDataAC>
export const setUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {id, email, login, isAuth}
    } as const
}

type  ThunkType = ThunkAction<void, AppStateType, unknown, AuthReducerActionTypes>
export const getAuthUserDataThunkCreator = (): ThunkType => async dispatch => {
    const data = await authAPI.me()
    if (data.resultCode === 0) {
        const {id, email, login} = data.data
        dispatch(setUserDataAC(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => async dispatch => {
    const data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator())
    }
}
export const logout = (): ThunkType => async dispatch => {
    const data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false))
    }
}

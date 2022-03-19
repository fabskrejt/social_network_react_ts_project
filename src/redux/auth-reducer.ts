import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";

const SET_USER_DATA = 'AUTH-REDUCER/SET-USER-DATA';
const SET_CAPTCHA_URL = "SET-CAPTCHA-URL";
const SET_ERROR = 'SET-ERROR'
const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
    error: null
}

type InitialStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    captchaUrl: null | string
    error: null | string
}
export type AuthReducerActionTypes = SetUserData | SetCaptchaURL

export const authReducer = (state: InitialStateType = initialState, action: AuthReducerActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL:
            return {...state, ...action.payload}
        default:
            return state
    }
}

type SetUserData = ReturnType<typeof setUserDataAC>
export const setUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {id, email, login, isAuth, captchaUrl: null}
    } as const
}

type SetCaptchaURL = ReturnType<typeof setCaptchaUrlAC>
export const setCaptchaUrlAC = (captchaUrl: string) => {
    return {
        type: SET_CAPTCHA_URL,
        payload: {captchaUrl}
    } as const
}

type SetErrorType = ReturnType<typeof setErrorAC>
export const setErrorAC = (error: string) => {
    return {
        type: SET_ERROR,
        payload: {error}
    } as const
}

//thunks
export const getAuthUserDataThunkCreator = (): ThunkType => async dispatch => {
    const data = await authAPI.me()
    if (data.resultCode === 0) {
        const {id, email, login} = data.data
        dispatch(setUserDataAC(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: null | string): ThunkType => async dispatch => {
    const data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator())
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptcha())
        } else if (data.resultCode === 1) {

        }
    }
}

export const logout = (): ThunkType => async dispatch => {
    const data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false))
    }
}
export const getCaptcha = (): ThunkType => async dispatch => {
    const data = await authAPI.getCaptcha()
    debugger
    dispatch(setCaptchaUrlAC(data.url))
}

type  ThunkType = ThunkAction<void, AppStateType, unknown, AuthReducerActionTypes>
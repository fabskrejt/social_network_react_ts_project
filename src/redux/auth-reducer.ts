import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

//type InitialStateType = typeof  initialState
type InitialStateType = {
    id: null | string
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
export const setUserDataAC = (id: string | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {id, email, login, isAuth}
    } as const
}

export const getAuthUserDataThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then((data) => {
                    if (data.resultCode === 0) {
                        const {id, email, login} = data.data
                        dispatch(setUserDataAC(id, email, login, true))

                    }
                    //this.props.isFetchingToggle(false)
                }
            )
    }
}

export const login =
    (email: string, password: string, rememberMe: boolean) =>
        (dispatch: Dispatch) => {
            authAPI.login(email, password, rememberMe)
                .then(res => {
                        debugger
                        if (res.resultCode === 0) {
                            //@ts-ignore
                            dispatch(getAuthUserDataThunkCreator())
                        }

                    }
                )
        }
export const logout =
    () =>
        (dispatch: Dispatch) => {
            authAPI.logout()
                .then(res => {
                        debugger
                        if (res.resultCode === 0) {
                            dispatch(setUserDataAC(null, null, null, false))
                        }

                    }
                )
        }

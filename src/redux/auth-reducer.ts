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
type ActionTypes = setUserData

export const authReducer = (state: InitialStateType = initialState, action: ActionTypes):InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload,  isAuth: true}
    }
    return state
}

type setUserData = ReturnType<typeof setUserData>
export const setUserData = (id: string, email: string, login: string) => {
 return {
     type: SET_USER_DATA,
     payload: {id, email, login}
 } as const
}
import {v1} from "uuid";

type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: string
    name: string
    city: string
    education: string
    site: string
    followed: boolean
    avatarURL: string
    photos: PhotosType
}

export type InitialUsersStateType = {
    users: Array<UserType>
    pageSize: number
    count: number
    currentPage: number
    isFetching: boolean

}
const initialState: InitialUsersStateType = {
    users: [],
    pageSize: 5,
    count: 10,
    currentPage: 1,
    isFetching: false,
}

export const usersReducer = (state = initialState, action: UserReducerActionType) => {

    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(i => i.id === action.id ? {...i, followed: !i.followed} : i)}
        case "SET-USERS":
            return {...state, users: action.users}
        case 'CHANGE-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-COUNT':
            return {...state, count: action.count}
        case "TOGGLE-FETCHING":
            return {...state, isFetching: action.value}
        default:
            return state
    }
}


type UserReducerActionType =
    FollowACType | SetUsersACType | changeCurrentPageACType | setCountACType | isFetchingType

type FollowACType = ReturnType<typeof followAC>

export const followAC = (id: string) => {
    return {
        type: 'FOLLOW',
        id
    } as const
}

type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users,
    } as const
}
type changeCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'CHANGE-CURRENT-PAGE',
        currentPage
    } as const
}

type setCountACType = ReturnType<typeof setCountAC>
export const setCountAC = (count: number) => {
    return {
        type: 'SET-COUNT',
        count,
    } as const
}

type isFetchingType = ReturnType<typeof isFetching>
export const isFetching = (value: boolean) => {
    return {
        type: 'TOGGLE-FETCHING',
        value,
    } as const
}
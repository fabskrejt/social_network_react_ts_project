import {usersAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {appStateType} from "./store";

const FOLLOWING_IN_PROGRESS = 'USERS-REDUCER/FOLLOWING-IN-PROGRESS'
const FOLLOW = 'USERS-REDUCER/FOLLOW';
const UNFOLLOW = 'USERS-REDUCER/UNFOLLOW';
const SET_USERS = 'USERS-REDUCER/SET-USERS'
const CHANGE_CURRENT_PAGE = 'USERS-REDUCER/CHANGE-CURRENT-PAGE'
const SET_COUNT = 'USERS-REDUCER/SET-COUNT'
const TOGGLE_FETCHING = 'USERS-REDUCER/TOGGLE-FETCHING'

type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: number
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
    followingInProgress: number[]

}
const initialState: InitialUsersStateType = {
    users: [],
    pageSize: 5,
    count: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action: UserReducerActionType): InitialUsersStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(i => i.id === action.id ? {...i, followed: true} : i)}
        case UNFOLLOW:
            return {...state, users: state.users.map(i => i.id === action.id ? {...i, followed: false} : i)}
        case SET_USERS:
            return {...state, users: action.users}
        case CHANGE_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_COUNT:
            return {...state, count: action.count}
        case TOGGLE_FETCHING:
            return {...state, isFetching: action.value}
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state, followingInProgress: action.status
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}


export type UserReducerActionType =
    FollowACType
    | SetUsersACType
    | ChangeCurrentPageACType
    | SetCountACType
    | IsFetchingType
    | UnFollowAC
    | FollowingToUserInProgress


type FollowACType = ReturnType<typeof followAC>
export const followAC = (id: number) => {
    return {
        type: FOLLOW,
        id
    } as const
}

type FollowingToUserInProgress = ReturnType<typeof followingToUserInProgress>
export const followingToUserInProgress = (status: boolean, userId: number) => {
    return {
        type: FOLLOWING_IN_PROGRESS,
        status,
        userId,
    } as const
}

type UnFollowAC = ReturnType<typeof unFollowAC>
export const unFollowAC = (id: number) => {
    return {
        type: UNFOLLOW,
        id
    } as const
}

type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users,
    } as const
}

type ChangeCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: CHANGE_CURRENT_PAGE,
        currentPage
    } as const
}

type SetCountACType = ReturnType<typeof setCountAC>
export const setCountAC = (count: number) => {
    return {
        type: SET_COUNT,
        count,
    } as const
}

type IsFetchingType = ReturnType<typeof isFetching>
export const isFetching = (value: boolean) => {
    return {
        type: TOGGLE_FETCHING,
        value,
    } as const
}

//Thunk
type  ThunkType = ThunkAction<void, appStateType, unknown, UserReducerActionType>
export const getUsersThunkCreator = (pageSize: number, currentPage: number): ThunkType => async dispatch => {
    dispatch(isFetching(true))
    let data = await usersAPI.getUser(pageSize, currentPage)
    if (data.error === null) {
        dispatch(setUsersAC(data.items))
        dispatch(isFetching(false))
    }
}

export const unfollowUserThunkCreator = (userId: number): ThunkType => async dispatch => {
    dispatch(followingToUserInProgress(true, userId)) //disabling button
    let data = await usersAPI.unfollowUser(userId)
    if (data.resultCode === 0) {
        dispatch(unFollowAC(userId))
        dispatch(followingToUserInProgress(false, userId))  //unDisabling button
    }
}

export const followUserThunkCreator = (userId: number): ThunkType => async dispatch => {
    dispatch(followingToUserInProgress(true, userId)) //disabling button
    let data = await usersAPI.followUser(userId)
    if (data.resultCode === 0) {
        dispatch(followAC(userId))
        dispatch(followingToUserInProgress(false, userId))  //unDisabling button
    }
}
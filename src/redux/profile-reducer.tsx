import {v1} from "uuid";
import {GetUserProfileType, profileAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import {ProfileType} from "../components/Profile/ProfileContainer";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const SET_USER_PHOTO_SUCCESS = 'SET-USER-PHOTO-SUCCESS';


export type PostsDataType = {
    postText: string
    like: number
    id: string
}

const initialState = {
    userStatus: '',
    postsData: [
        {id: v1(), postText: 'Hello my friends', like: 15},
        {id: v1(), postText: 'How are you?', like: 5},
        {id: v1(), postText: 'What are you do?', like: 25},
    ] as Array<PostsDataType>,
    profile: {
        "aboutMe": '',
        "contacts": {
            "facebook": '',
            "website": '',
            "vk": "",
            "twitter": '',
            "instagram": '',
            "youtube": '',
            "github": '',
            "mainLink": '',
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": '',
        "fullName": '',
        "userId": null,
        "photos": {
            "small": '',
            "large": '',
        }
    } as ProfileType,
}


export type InitialProfileStateType = typeof initialState
export const profileReducer = (state: InitialProfileStateType = initialState, action: ActionTypes): InitialProfileStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsDataType = {id: v1(), postText: action.value, like: 10}
            return {...state, postsData: [newPost, ...state.postsData]}
        case SET_USER_PROFILE:
            return {...state, profile: {...action.profile}}
        case SET_USER_STATUS:
            return {...state, userStatus: action.status}
        case "SET-USER-PHOTO-SUCCESS":
            return {...state, profile: {...state.profile, photos: action.photo}}
    }
    return state
}

export type ActionTypes =
    AddPostActionType
    | setUserProfileType
    | SetUserStatusType
    | SetUserPhotoSuccessType

type AddPostActionType = ReturnType<typeof addPostAC>
export const addPostAC = (value: any) => {
    return {
        type: ADD_POST,
        value,
    } as const
}

export type setUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: GetUserProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    } as const
}

export type SetUserStatusType = ReturnType<typeof setUserStatus>
export const setUserStatus = (status: string) => {
    return {
        type: SET_USER_STATUS,
        status,
    } as const
}

export type SetUserPhotoSuccessType = ReturnType<typeof setUserPhotoSuccess>
export const setUserPhotoSuccess = (photo: { "small": string, "large": string }) => {
    return {
        type: SET_USER_PHOTO_SUCCESS,
        photo,
    } as const
}

//thunk
type  ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>
export const updateUserStatusThunkCreator = (status: string): ThunkType => async dispatch => {
    const data = await profileAPI.updateUserStatus(status)
    if (data.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const getUserStatusThunkCreator = (userId: number): ThunkType => async dispatch => {
    const data = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(data.data))
}

export const getUserProfileThunkCreator = (userId: number): ThunkType => async dispatch => {
    const data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}

export const sendPhotoThunkCreator = (file: File): ThunkType => async dispatch => {
    const data = await profileAPI.sendPhoto(file)
    dispatch(setUserPhotoSuccess(data.data))
}


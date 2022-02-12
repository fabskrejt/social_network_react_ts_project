import {v1} from "uuid";
import {profileAPI} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {appStateType} from "./store";
import {AuthReducerActionTypes} from "./auth-reducer";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';


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
        "aboutMe": "",
        "contacts": {
            "facebook": "",
            "website": null,
            "vk": "",
            "twitter": '',
            "instagram": '',
            "youtube": null,
            "github": '',
            "mainLink": null,
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": '',
        "fullName": '',
        "userId": null,
        "photos": {
            "small": '',
            "large": '',
        }
    },
}


type InitialStateType = typeof initialState
export const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsDataType = {id: v1(), postText: action.value, like: 10}
            return {...state, postsData: [newPost, ...state.postsData]}
        case SET_USER_PROFILE:
            return {...state, profile: {...action.profile}}
        case SET_USER_STATUS:
            return {...state, userStatus: action.status}
    }
    return state
}

export type ActionTypes = AddPostActionType | setUserProfileType | SetUserStatusType

type AddPostActionType = ReturnType<typeof addPostAC>
export const addPostAC = (value: any) => {
    return {
        type: ADD_POST,
        value,
    } as const
}

export type setUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: any) => {
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

//thunk
type  ThunkType = ThunkAction<void, appStateType, unknown, ActionTypes>
export const updateUserStatusThunkCreator = (status: string): ThunkType => async dispatch => {
    //  this.props.isFetchingToggle(true)
    const data = await profileAPI.updateUserStatus(status)
    if (data.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
    // this.props.isFetchingToggle(false)
}

export const getUserStatusThunkCreator = (userId: number): ThunkType => async dispatch => {
    //  this.props.isFetchingToggle(true)
    const data = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(data.data))
    // this.props.isFetchingToggle(false)
}

export const getUserProfileThunkCreator = (userId: number): ThunkType => async dispatch => {
    //  this.props.isFetchingToggle(true)
    const data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
    // this.props.isFetchingToggle(false)
}

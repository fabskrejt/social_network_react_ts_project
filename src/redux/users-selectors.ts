import {appStateType} from "./store";

export const getUsers = (state: appStateType) => {
    return state.usersPage.users
}

export const getPageSize =(state:appStateType)=>{
    return state.usersPage.pageSize
}
export const getCount =(state:appStateType)=>{
    return state.usersPage.count
}
export const getCurrentPage =(state:appStateType)=>{
    return state.usersPage.currentPage
}
export const getIsFetching =(state:appStateType)=>{
    return state.usersPage.isFetching
}
export const getFollowingInProgress =(state:appStateType)=>{
    return state.usersPage.followingInProgress
}
export const getIsAuth =(state:appStateType)=>{
    return state.auth.isAuth
}

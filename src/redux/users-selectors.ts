import {AppStateType} from "./store";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}

export const getPageSize =(state:AppStateType)=>{
    return state.usersPage.pageSize
}
export const getCount =(state:AppStateType)=>{
    return state.usersPage.count
}
export const getCurrentPage =(state:AppStateType)=>{
    return state.usersPage.currentPage
}
export const getIsFetching =(state:AppStateType)=>{
    return state.usersPage.isFetching
}
export const getFollowingInProgress =(state:AppStateType)=>{
    return state.usersPage.followingInProgress
}
export const getIsAuth =(state:AppStateType)=>{
    return state.auth.isAuth
}

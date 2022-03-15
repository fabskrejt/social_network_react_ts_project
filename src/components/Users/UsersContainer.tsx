import {AppStateType} from "../../redux/store";
import {
    followingToUserInProgress,
    followUserThunkCreator,
    getUsersThunkCreator,
    InitialUsersStateType,
    isFetching,
    setCountAC,
    setCurrentPageAC,
    setUsersAC,
    unfollowUserThunkCreator,
    UserReducerActionType,
    UserType
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import React from "react";
import {UsersFC} from "./UsersFC";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";
import {ThunkDispatch} from 'redux-thunk'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCount,
    getCurrentPage,
    getFollowingInProgress,
    getIsAuth,
    getIsFetching,
    getPageSize,
    getUsers
} from "../../redux/users-selectors";

type UsersPropsType = {
    usersPage: Array<UserType>
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setCount: (Count: number) => void
    pageSize: number
    count: number
    currentPage: number
    isFetching: boolean
    isFetchingToggle: (value: boolean) => void
    followingInProgress: number[]
    followingToUserInProgress: (status: boolean, userId: number) => void
    getUsers: (pageSize: number, currentPage: number) => void
    isAuth: boolean
}

export class UsersAPIComponent extends React.Component<UsersPropsType, InitialUsersStateType> {

//Lifecycle
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    //Callback
    follow = (id: number) => {
        this.props.follow(id)
    }
    unFollow = (id: number) => {
        this.props.unFollow(id)
    }
    setUsers = (users: Array<UserType>) => {
        this.props.setUsers(users)
    }

    onPageChanged = (pageNumber: number) => {
        //this.props.getUsers(this.props.pageSize, pageNumber)
        this.props.setCurrentPage(pageNumber)
        this.props.isFetchingToggle(true)
        usersAPI.getUser(this.props.pageSize, pageNumber)
            .then((data) => {
                    this.setUsers(data.items)
                    this.props.setCount(data.totalCount)
                    this.props.isFetchingToggle(false)
                }
            )
    }

    render() {
        //if (!this.props.isAuth) return <Redirect to={'/login'}/> //If not authorised, redirect to Login
        return (
            <div>
                {this.props.isFetching
                && <Preloader/>}
                <UsersFC
                    pageSize={this.props.pageSize}
                    count={this.props.count}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    usersPage={this.props.usersPage}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    followingInProgress={this.props.followingInProgress}
                    followingToUserInProgress={this.props.followingToUserInProgress}
                />
            </div>
        )
    }
}


const mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: getUsers(state),
        pageSize: getPageSize(state),
        count: getCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state),
    }
}
//type ThunkType = ThunkAction<void, appStateType, unknown, UserReducerActionType>

const mapDispatchToProps = (dispatch: ThunkDispatch<AppStateType, unknown, UserReducerActionType>) => {
    return {
        setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        setCount: (count: number) => dispatch(setCountAC(count)),
        isFetchingToggle: (value: boolean) => dispatch(isFetching(value)),
        followingToUserInProgress: (status: boolean, userId: number) => dispatch(followingToUserInProgress(status, userId)),
        //Thunk
        getUsers: (pageSize: number, currentPage: number) => dispatch(getUsersThunkCreator(pageSize, currentPage)),
        follow: (userId: number) => dispatch(followUserThunkCreator(userId)),
        unFollow: (userId: number) => dispatch(unfollowUserThunkCreator(userId)),
    }
}

export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(UsersAPIComponent)

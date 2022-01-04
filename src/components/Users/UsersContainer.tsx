import {appStateType} from "../../redux/store";
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
import {Redirect} from "react-router-dom";

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
        if (!this.props.isAuth) return <Redirect to={'/login'}/> //If not authorised, redirect to Login
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
                {/*                {this.props.isFetching
                    ? <Preloader/>
                    : <UsersFC
                        pageSize={this.props.pageSize}
                        count={this.props.count}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        usersPage={this.props.usersPage}
                        follow={this.follow}
                    />}*/}
            </div>

        )
    }
}


const mapStateToProps = (state: appStateType) => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        count: state.usersPage.count,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth,
    }
}
//type ThunkType = ThunkAction<void, appStateType, unknown, UserReducerActionType>

const mapDispatchToProps = (dispatch: ThunkDispatch<appStateType, unknown, UserReducerActionType>) => {
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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
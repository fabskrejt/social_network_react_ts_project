import {appStateType} from "../../redux/store";
import {
    followAC,
    InitialUsersStateType,
    setCountAC,
    setCurrentPageAC,
    setUsersAC,
    UserType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import React from "react";
import {default as axios} from "axios";
import {UsersFC} from "./UsersFC";




type UsersPropsType = {
    usersPage: Array<UserType>
    follow: (id: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setCount: (Count: number) => void
    pageSize: number
    count: number
    currentPage: number
}

/*export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "92d6c8c0-8f2a-49e6-90f5-89b9382df096"
    }
});*/
export class UsersAPIComponent extends React.Component<UsersPropsType, InitialUsersStateType> {

//Lifecycle
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`)
            .then((response) => this.setUsers(response.data.items)
            )
    }

    //Callback
    follow = (id: string) => {
        this.props.follow(id)
    }
    setUsers = (users: Array<UserType>) => {
        this.props.setUsers(users)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                    this.setUsers(response.data.items)
                    this.props.setCount(response.data.totalCount)
                }
            )
    }


    render() {

        return (
            <UsersFC
                pageSize = {this.props.pageSize}
        count = {this.props.count}
        currentPage = {this.props.currentPage}
        onPageChanged = {this.onPageChanged}
        usersPage = {this.props.usersPage}
        follow = {this.follow}
        />
    )
    }
}


const mapStateToProps = (state: appStateType) => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        count: state.usersPage.count,
        currentPage: state.usersPage.currentPage,

    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (id: string) => dispatch(followAC(id)),
        setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        setCount: (count: number) => dispatch(setCountAC(count)),
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
import {appStateType} from "../../redux/store";
import {
    followAC,
    InitialUsersStateType, isFetching,
    setCountAC,
    setCurrentPageAC,
    setUsersAC, unFollowAC,
    UserType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import React from "react";
import {default as axios} from "axios";
import {UsersFC} from "./UsersFC";
import {Preloader} from "../common/Preloader/Preloader";


type UsersPropsType = {
    usersPage: Array<UserType>
    follow: (id: string) => void
    unFollow: (id: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setCount: (Count: number) => void
    pageSize: number
    count: number
    currentPage: number
    isFetching: boolean
    isFetchingToggle: (value: boolean) => void
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
        this.props.isFetchingToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`,{
            withCredentials: true
        })
            .then((response) => {
                    this.setUsers(response.data.items)
                    this.props.isFetchingToggle(false)
                }
            )

    }

    //Callback
    follow = (id: string) => {
        this.props.follow(id)
    }
    unFollow = (id: string) => {
        this.props.unFollow(id)
    }
    setUsers = (users: Array<UserType>) => {
        this.props.setUsers(users)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.isFetchingToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{
            withCredentials: true
        })
            .then((response) => {
                    this.setUsers(response.data.items)
                    this.props.setCount(response.data.totalCount)
                    this.props.isFetchingToggle(false)
                }
            )
    }

    render() {
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
        isFetching: state.usersPage.isFetching

    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (id: string) => dispatch(followAC(id)),
        unFollow: (id: string) => dispatch(unFollowAC(id)),
        setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        setCount: (count: number) => dispatch(setCountAC(count)),
        isFetchingToggle: (value: boolean) => dispatch(isFetching(value))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
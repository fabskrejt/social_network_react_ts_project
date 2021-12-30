import React from "react";
import {InitialUsersStateType, UserType} from "../../redux/users-reducer";
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
 class UsersC extends React.Component<any, InitialUsersStateType> {

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
            <div/>
/*            <UsersFC
                pageSize={this.props.pageSize}
                count={this.props.count}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                usersPage={this.props.usersPage}
                follow={this.follow}
                unFollow={this.follow}

            />*/
        )
    }
}

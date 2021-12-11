import {appStateType} from "../../redux/store";
import {followAC, setCurrentPageAC, setUsersAC, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {UsersC} from "./UsersClss";

const mapStateToProps = (state: appStateType) => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        count: state.usersPage.count,

    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (id: string) => dispatch(followAC(id)),
        setUsers:(users: Array<UserType>)=>dispatch(setUsersAC(users)),
        setCurrentPage:(currentPage:number)=>dispatch(setCurrentPageAC(currentPage))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)
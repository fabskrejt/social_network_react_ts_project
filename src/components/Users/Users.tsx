import React from "react";
import {v1} from "uuid";
import {usersReducer, UserType} from "../../redux/users-reducer";


type UsersPropsType = {
    usersPage: Array<UserType>
}
export const Users = (props: UsersPropsType) => {
    const usersList = props.usersPage.map(i => {
        return (
            <div>
                <div>
                    <img/>
                    <span>{i.folowed ? 'Unfollow' : 'Follow'}</span>
                </div>
                <div>
                    <span>{i.name}</span>
                    <span>{i.city}</span>
                    <span>{i.education}</span>
                </div>
            </div>
        )
    })
    return (
        //{id: v1(), name: 'Rusik', city: 'Tomsk', education: 'TUSUR', site: 'non', folowed: true},
        <div>
            {usersList}
        </div>
    )
}
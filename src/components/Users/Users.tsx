import React from "react";
import {UserType} from "../../redux/users-reducer";
import style from './Users.module.css'


type UsersPropsType = {
    usersPage: Array<UserType>
    follow: (id: string) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users = (props: UsersPropsType) => {

    const follow = (id: string) => {
        props.follow(id)
    }
    const setUsers = (users: Array<UserType>) => {
        props.setUsers(users)
    }

    const axios = require('axios').default
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response: any) => users = response.data.items
        )
    let users: Array<UserType>;

    const usersList = props.usersPage.map(i => {
        return (
            <div key={i.id} className={style.user}>
                <div className={style.userAva}>
                    <img src={i.avatarURL}/>
                    <span onClick={() => follow(i.id)}>{i.followed ? 'Unfollow' : 'Follow'}</span>
                </div>
                <div className={style.userInfo}>
                    <span>{i.name}</span>
                    <span>{i.city}</span>
                    <span>{i.education}</span>
                </div>
            </div>
        )
    })

    return (
        //{id: v1(), name: 'Rusik', city: 'Tomsk', education: 'TUSUR', site: 'non', folowed: true},
        <div className={style.usersList}>
            {usersList}
            <button onClick={()=>setUsers(users)}>Get users</button>
        </div>
    )
}
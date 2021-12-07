import React from "react";
import {UserType} from "../../redux/users-reducer";
import style from './Users.module.css'


type UsersPropsType = {
    usersPage: Array<UserType>
    follow: (id: string) => void
}

export const Users = (props: UsersPropsType) => {

    const follow = (id: string) => {
        props.follow(id)
    }
    const axios = require('axios')

    axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response: any) => console.log(response.data.items)
    )


    const usersList = props.usersPage.map(i => {
        return (
            <div key={i.id} className={style.user}>
                <div className={style.userAva}>
                    <img src={i.avatarURL}/>
                    <span onClick={() => follow(i.id)}>{i.folowed ? 'Unfollow' : 'Follow'}</span>
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
        </div>
    )
}
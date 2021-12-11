import React from "react";
import {UserType} from "../../redux/users-reducer";
import style from './Users.module.css'
import {default as axios} from "axios";


type UsersPropsType = {
    usersPage: Array<UserType>
    follow: (id: string) => void
    setUsers: (users: Array<UserType>) => void
}

export class UsersC extends React.Component<UsersPropsType, any> {

    constructor(props: any) {
        super(props);
        this.setUsers = this.setUsers.bind(this)
        this.follow = this.follow.bind(this)
    }

//Callback
    follow = (id: string) => {
        this.props.follow(id)
    }
    setUsers = (users: Array<UserType>) => {
        this.props.setUsers(users)
    }

//Lifecycle
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response: any) => this.setUsers(response.data.items)
            )
    }

    render() {
        return (
            <div className={style.usersList}>
                {this.props.usersPage.map(i => {
                    return (
                        <div key={i.id} className={style.user}>
                            <div className={style.userAva}>
                                <img src={i.photos && i.avatarURL}/>
                                <span onClick={() => this.follow(i.id)}>{i.folowed ? 'Unfollow' : 'Follow'}</span>
                            </div>
                            <div className={style.userInfo}>
                                <span>{i.name}</span>
                                <span>{i.city}</span>
                                <span>{i.education}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

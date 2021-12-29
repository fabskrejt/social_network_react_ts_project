import React from "react";
import style from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";
import {Preloader} from "../common/Preloader/Preloader";
import {default as axios} from "axios";


export type UsersFCPropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    usersPage: Array<UserType>
    follow: (id: string) => void
    unFollow: (id: string) => void
    pageSize: number
    count: number
}
export const UsersFC = (props: UsersFCPropsType) => {
    //need fix pagination (quantity pages)
    const pageCount = Math.ceil(props.count / props.pageSize)
    const pages = []
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }
    return (
        <div className={style.usersList}>
            <div className={style.pagination}>
                {pages.map(p => p === props.currentPage
                    ? <span className={style.active} onClick={() => props.onPageChanged(p)}>{p}</span>
                    : <span onClick={() => props.onPageChanged(p)}>{p}</span>
                )}
            </div>

            {props.usersPage.map(i => {
                return (
                    <div key={i.id} className={style.user}>
                        <div className={style.userAva}>
                            <img
                                src={i.photos.small === null ? 'https://image.shutterstock.com/image-vector/conversation-talking-black-icon-50x50-260nw-1037215327.jpg' : i.photos.small}/>

                            {i.followed ?
                                <span onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${i.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '3938ec03-652e-45e2-8e89-4b9560fc50c6',
                                        },
                                    })
                                        .then((response) => {
                                                if (response.data.resultCode === 0) {
                                                    props.unFollow(i.id)
                                                }
                                            }
                                        )
                                }
                                }>Unfollow</span> :
                                <span onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${i.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '3938ec03-652e-45e2-8e89-4b9560fc50c6',
                                        },
                                    })
                                        .then((response) => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(i.id)
                                            }
                                        })
                                }
                                }>Follow</span>
                            }
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


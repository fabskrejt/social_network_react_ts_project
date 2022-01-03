import React from "react";
import style from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";


export type UsersFCPropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    usersPage: Array<UserType>
    follow: (id: number) => void
    unFollow: (id: number) => void
    followingInProgress: number[]
    followingToUserInProgress: (status: boolean, userId: number) => void
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
                                <button disabled={props.followingInProgress.some(id => id === i.id)} onClick={() => {
                                    props.unFollow(i.id) //Thunk callback
                                }
                                }>Unfollow</button> :
                                <button disabled={props.followingInProgress.some(id => id === i.id)} onClick={() => {
                                    props.follow(i.id) //Thunk callback
                                }
                                }>Follow</button>
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


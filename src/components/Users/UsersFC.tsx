import React, {useState} from "react";
import style from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import userAva from "../../assets/defaultUserAva.png"

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

    return (
        <div className={style.usersList}>
            <Paginator
                count={props.count}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                portionSize={15}
            />

            {props.usersPage.map(i => {
                return (
                    <div key={i.id} className={style.user}>
                        <div className={style.userAva}>
                            <NavLink to={`/profile/${i.id}`}>
                                <img
                                    src={i.photos.small === null ? userAva : i.photos.large}
                                />
                            </NavLink>
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

const Paginator = (props: any) => {
    const pagesCount = Math.ceil(props.count / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize
    let rightPortionPageNumber = portionNumber * props.portionSize

    return (
        <div className={style.pagination}>
            {
                portionNumber > 1
                && <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => p === props.currentPage
                    ? <span key={p} className={style.active} onClick={() => props.onPageChanged(p)}>{p}</span>
                    : <span key={p} onClick={() => props.onPageChanged(p)}>{p}</span>
                )
            }
            {
                portionCount > portionNumber
                && <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
            }
        </div>
    )
}

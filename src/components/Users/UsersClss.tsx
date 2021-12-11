import React from "react";
import {setCurrentPageAC, UserType} from "../../redux/users-reducer";
import style from './Users.module.css'
import {default as axios} from "axios";


type UsersPropsType = {
    usersPage: Array<UserType>
    follow: (id: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage:(currentPage:number)=>void
    pageSize: number
    count: number
}

/*type GetUsersResponse = {
{
    "items": [
        {
            "name": "Shubert",
            "id": 1,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
}*/

/*export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "92d6c8c0-8f2a-49e6-90f5-89b9382df096"
    }
});*/
export class UsersC extends React.Component<UsersPropsType, any> {

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
    onPageChanged=(pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response: any) => this.setUsers(response.data.items)
            )
    }

    render() {
        const pageCount = Math.ceil(this.props.count / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        return (
            <div className={style.usersList}>

                <div>
                    {pages.map(p => <span onClick={()=>this.onPageChanged(p)}>{p}</span>)}
                </div>

                {this.props.usersPage.map(i => {
                    return (
                        <div key={i.id} className={style.user}>
                            <div className={style.userAva}>
                                <img
                                    src={i.photos.small === null ? 'https://image.shutterstock.com/image-vector/conversation-talking-black-icon-50x50-260nw-1037215327.jpg' : i.photos.small}/>
                                <span onClick={() => this.follow(i.id)}>{i.followed ? 'Unfollow' : 'Follow'}</span>
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

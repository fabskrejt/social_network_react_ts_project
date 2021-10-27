import React from "react";
import pStyle from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsDataType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (value: string) => void
    posts: Array<PostsDataType>
}
const Profile = (props: ProfilePropsType) => {
    return (
        <main className={pStyle.main}>
            <ProfileInfo userName={'Vovchick'} birthday={'31.10.1992'} city={'Rostov-on-Don'} education={'TPU'}
                         site={'I have not'}/>
            <MyPosts postsData={props.posts} addPost={props.addPost} />
        </main>
    )
}

export default Profile
import React from "react";
import pStyle from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsDataPropsType} from "../../index";

export type ProfilePropsType = {
    postsData: Array<PostsDataPropsType>
}
const Profile = (props: ProfilePropsType) => {
    return (
        <main className={pStyle.main}>
            <ProfileInfo userName={'Vovchick'} birthday={'31.10.1992'} city={'Rostov-on-Don'} education={'TPU'} site={'I have not'}/>
            <MyPosts postsData={props.postsData} />
        </main>
    )
}

export default Profile
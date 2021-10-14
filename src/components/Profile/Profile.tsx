import React from "react";
import pStyle from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <main className={pStyle.main}>
            <ProfileInfo userName={'Vovchick'} birthday={'31.10.1992'} city={'Rostov-on-Don'} education={'TPU'} site={'I have not'}/>
            <MyPosts/>
        </main>
    )
}

export default Profile
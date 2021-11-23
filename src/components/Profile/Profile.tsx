import React from "react";
import pStyle from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


const Profile = () => {
    return (
        <main className={pStyle.main}>
            <ProfileInfo userName={'Vovchick'} birthday={'31.10.1992'} city={'Rostov-on-Don'} education={'TPU'}
                         site={'I have not'}/>
            <MyPostsContainer/>
        </main>
    )
}

export default Profile
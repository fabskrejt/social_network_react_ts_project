import React from "react";
import pStyle from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


const Profile = (props:any) => {
    debugger
    return (
        <main className={pStyle.main}>
            <ProfileInfo userName={props.profile.fullName} birthday={'31.10.1992'} city={'Rostov-on-Don'} education={'TPU'}
                         site={'I have not'}/>
            <MyPostsContainer/>
        </main>
    )
}

export default Profile
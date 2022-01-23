import React from "react";
import pStyle from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileStatus} from "./ProfileInfo/ProfileStatus";


const Profile = (props:any) => {
        return (
        <main className={pStyle.main}>
            <ProfileInfo userName={props.profile.fullName} birthday={'31.10.1992'} city={'Rostov-on-Don'} education={'TPU'}
                         site={'I have not'} photos={props.profile.photos}/>
            <ProfileStatus userStatus={props.userStatus} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </main>
    )
}

export default Profile
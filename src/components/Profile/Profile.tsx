import React from "react";
import pStyle from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType, StoreType} from "../../redux/state";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

/*type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
}*/
type ProfilePropsType = {
/*store:StoreType*/
}
const Profile = (props: ProfilePropsType) => {
    return (
        <main className={pStyle.main}>
            <ProfileInfo userName={'Vovchick'} birthday={'31.10.1992'} city={'Rostov-on-Don'} education={'TPU'}
                         site={'I have not'}/>
         {/*   <MyPostsContainer store={props.store}/>*/}
            <MyPostsContainer/>
            {/*<MyPosts postsData={props.profilePage.postsData} dispatch={props.dispatch}/>*/}
        </main>
    )
}

export default Profile
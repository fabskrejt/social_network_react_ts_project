import React from "react";
import {StoreType,} from "../../../redux/state";
import {addPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsContainerPropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    let state = props.store.getState()
    let addPost = (postChangeValue: string) => {
        if (postChangeValue) {
            props.store.dispatch(addPostAC(postChangeValue))
        }
    }

    return (
        <MyPosts postsData={state.profilePage.postsData}
                 addPost={addPost}
        />
    )
}


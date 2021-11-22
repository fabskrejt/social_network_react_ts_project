import React from "react";
import {StoreType,} from "../../../redux/state";
import {addPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {appStateType} from "../../../redux/store";
import {Dispatch} from "redux";

type MyPostsContainerPropsType = {
    store: StoreType
}

/*export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
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
}*/

const mapStateToProps = (state:appStateType) => {
    return{
        postsData: state.profilePage.postsData
    }
}
const mapDispatchToProps = (dispatch:Dispatch) => {
return{
    addPost: (postChangeValue: string) => dispatch(addPostAC(postChangeValue))
}
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)


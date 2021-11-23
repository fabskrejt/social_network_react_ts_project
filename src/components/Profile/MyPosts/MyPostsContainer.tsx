import React from "react";
import {addPostAC, PostsDataType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {appStateType} from "../../../redux/store";
import {Dispatch} from "redux";

type MapStateProps = {
    postsData: Array<PostsDataType>
}

const mapStateToProps = (state: appStateType): MapStateProps => {
    return {
        postsData: state.profilePage.postsData
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (postChangeValue: string) => dispatch(addPostAC(postChangeValue))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


import React, {ChangeEvent, useState} from "react";
import pStyle from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionTypes, PostsDataType,} from "../../../redux/state";
import {Button} from "../../Button/Button";
import {addPostAC} from "../../../redux/profile-reducer";

/*type MyPostsPropsType = {
    postsData: Array<PostsDataType>
    dispatch: (action: ActionTypes) => void
}*/

type MyPostsPropsType = {
    postsData: Array<PostsDataType>
    addPost: (postChangeValue: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {
    const [postChangeValue, setPostChangeValue] = useState('')
    let postElement = props.postsData.map(i => <Post key={i.id} message={i.postText} like={i.like}/>)
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => setPostChangeValue(e.currentTarget.value)
    let onAddPost = () => {
        props.addPost(postChangeValue)
        setPostChangeValue('')
        /*        if (postChangeValue) {
                    props.dispatch(addPostAC(postChangeValue))
                    setPostChangeValue('')
                }*/
    }

    return (<div>
            <section className={pStyle.postsMaker}>
                <header className='posts-maker__title'>My posts</header>
                <textarea value={postChangeValue} onChange={onPostChange} className={pStyle.input}/>
                <Button style={pStyle.button} callBack={onAddPost} title={'Send'}/>
            </section>
            <section className={pStyle.posts}>
                {postElement}
            </section>
        </div>
    )
}

export default MyPosts
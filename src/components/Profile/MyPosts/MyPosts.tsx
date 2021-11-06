import React, {ChangeEvent, useState} from "react";
import pStyle from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionTypes, PostsDataType,} from "../../../redux/state";
import {Button} from "../../Button/Button";

type MyPostsPropsType = {
    postsData: Array<PostsDataType>
    dispatch: (action: ActionTypes) => void
}
const MyPosts = (props: MyPostsPropsType) => {
    const [postChangeValue, setPostChangeValue] = useState('')
    let postElement = props.postsData.map(i => <Post key={i.id} message={i.postText} like={i.like}/>)
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => setPostChangeValue(e.currentTarget.value)
    let addPost = () => {
        const action: ActionTypes = {
            type: 'ADD-POST',
            value: postChangeValue,
        }
        if (postChangeValue) {
            props.dispatch(action)
            setPostChangeValue('')
        }
    }

    return (<div>
            <section className={pStyle.postsMaker}>
                <header className='posts-maker__title'>My posts</header>
                <textarea value={postChangeValue} onChange={onPostChange} className={pStyle.input}/>
                <Button style={pStyle.button} callBack={addPost} title={'Send'}/>
            </section>
            <section className={pStyle.posts}>
                {postElement}
            </section>
        </div>
    )
}

export default MyPosts
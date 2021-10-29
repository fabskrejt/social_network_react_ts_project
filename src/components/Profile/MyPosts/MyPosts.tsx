import React, {ChangeEvent, useState, MouseEventHandler} from "react";
import pStyle from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsDataType,} from "../../../redux/state";

type MyPostsPropsType = {
    postsData: Array<PostsDataType>
    addPost: (value: string) => void
}
const MyPosts = (props: MyPostsPropsType) => {
    const [postChangeValue, setPostChangeValue] = useState('')
    let postElement = props.postsData.map(i => <Post key={i.id} message={i.postText} like={i.like}/>)
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => setPostChangeValue(e.currentTarget.value)
    let addPost = () => {
        props.addPost(postChangeValue)
        setPostChangeValue('')
    }


    return (<div>
            <section className={pStyle.postsMaker}>
                <header className='posts-maker__title'>My posts</header>
                <textarea value={postChangeValue} onChange={onPostChange} className={pStyle.input}/>
                <button onClick={addPost} className='posts-maker__button'>Send</button>
            </section>
            <section className={pStyle.posts}>
                {postElement}
            </section>
        </div>
    )
}

export default MyPosts
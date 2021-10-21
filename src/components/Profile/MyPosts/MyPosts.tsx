import React from "react";
import pStyle from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfilePropsType} from "../Profile";

const MyPosts = (props: ProfilePropsType) => {

    let postElement = props.postsData.map(i => <Post message={i.postText} like={i.like}/>)

    return (<div>
            <section className={pStyle.postsMaker}>
                <header className='posts-maker__title'>My posts</header>
                <textarea className={pStyle.input}/>
                <button className='posts-maker__button'>Send</button>
            </section>
            <section className={pStyle.posts}>
                {postElement}
            </section>
        </div>
    )
}

export default MyPosts
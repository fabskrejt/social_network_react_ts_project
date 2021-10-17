import React from "react";
import pStyle from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {postText: 'Hello my friends', like: 15},
        {postText: 'How are you?', like: 5},
        {postText: 'What are you do?', like: 25},
    ]
    let postElement = postsData.map(i => <Post message={i.postText} like={i.like}/>)

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
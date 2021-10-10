import React from "react";
import pStyle from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () =>{
    return(<div>
        <section className={pStyle.postsMaker}>
            <header className='posts-maker__title'>My posts</header>
            <input className={pStyle.input}/>
            <button className='posts-maker__button'>Send</button>
        </section>
            <section className={pStyle.posts}>
                <Post message ={'Hello my friends'} like={15}/>
                <Post message ={'How are you?'} like={5}/>
            </section>
        </div>
    )
}

export default MyPosts
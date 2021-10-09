import React from "react";
import pStyle from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () =>{
    return(
            <section className={pStyle.posts}>
                <Post/>
                <Post/>
            </section>

    )
}

export default MyPosts
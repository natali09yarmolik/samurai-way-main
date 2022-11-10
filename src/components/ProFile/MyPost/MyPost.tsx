import React from 'react';
import s from './MyPost.module.css'
import {Post} from "./Post/Post";

export const MyPost=()=>{
    return(
        <>
            <div className={s.posts}>My post</div>
            <div className={s.posts}>New post
                <Post message='Hello! How are you!' likes={23}/>
                <Post message='Its my first post' likes={15}/>

            </div>

        </>
    )
}
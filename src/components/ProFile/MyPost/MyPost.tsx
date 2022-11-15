import React from 'react';
import s from './MyPost.module.css'
import {Post} from "./Post/Post";


export const MyPost=()=>{
    return(
        <div className={s.myPostBlock}>
            <div className={s.img_cat}><img
                src='https://i.pinimg.com/originals/22/cc/3b/22cc3bfc1fede6e2306cac7265515aa3.jpg'/>+discription
            </div>
            <h3> My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <button>Add post</button>
            </div>

            <div className={s.posts}>New post
                <Post message='Hello! How are you!' likes={23}/>
                <Post message='Its my first post' likes={15}/>

            </div>

        </div>
    )
}
import React from 'react';
import s from './Post.module.css';

type postPropsType={
    message: string
    likes: number
}
export const Post=(props:postPropsType)=>{
    return(
        <>
            <div className={s.item}>{props.message} {props.likes}</div>
        </>
    )
}
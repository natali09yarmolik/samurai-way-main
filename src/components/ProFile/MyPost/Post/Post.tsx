import React from 'react';
import s from './Post.module.css';

type postPropsType={
    message: string
    likes: number
}
export const Post=(props:postPropsType)=>{
    return(
        <>
            <div ><img src={'https://avatars.mds.yandex.net/i?id=9d2f6d6baaca7d42cdaa2127517a654c0c688f0b-6726315-images-thumbs&n=13'}
                       className={s.postAvatar} />
            </div>
            <div className={s.item}>{props.message} {props.likes}</div>
        </>
    )
}
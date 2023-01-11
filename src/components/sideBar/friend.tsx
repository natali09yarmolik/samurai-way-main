import React from 'react';
import s from './friend.module.css'

type friendPropsType={
    name:string
    photo: string
}

export const Friend =(props:friendPropsType)=>{
    return(
        <div>
            <div className={s.name}>{props.name}</div>
            <img src={props.photo} className={s.photo}/>
        </div>
    )
}
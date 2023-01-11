import React from 'react';
import d from './dialogsItem.module.css'
import {NavLink} from "react-router-dom";


type dialogPropsType={
    name: string
    id: string
}
export const Dialog = (props:dialogPropsType)=>{
    return (
        <div className={d.dialog}>
           <img src={'https://avatars.mds.yandex.net/i?id=8a576c99d7f6a477bc8bd8bc7b7e7380b2bbe509-4548378-images-thumbs&n=13'}
                      className={d.nameAvatar}/>
            <NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink>
        </div>)
}

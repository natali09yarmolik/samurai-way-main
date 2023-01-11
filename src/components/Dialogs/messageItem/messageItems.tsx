import React from 'react';
import d from './messageItems.module.css'



export type messagePropsType={
    text: string
}
export const Message =(props:messagePropsType)=>{
    return(<div className={d.message}>
           <div>{props.text}</div>
           <img src={'https://avatars.mds.yandex.net/i?id=ba6c9a359e8defa06edd9306b24787bd2fe2c108-7012067-images-thumbs&n=13'}
                className={d.messageAvatar} />


           </div>)
}


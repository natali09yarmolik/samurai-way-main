import React from 'react';
import d from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type dialogPropsType={
    name: string
    id: number
}
const Dialog = (props:dialogPropsType)=>{
    return (
        <div className={d.dialog}>
            <NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink>
        </div>)
}

type messagePropsType={
    text: string
}
const Message =(props:messagePropsType)=>{
    return(<div className={d.message}>{props.text}</div>)
}

export const Dialogs = (props:any)=>{
return (<div className={d.dialogs}>
    <div className={d.dialogItems}>
        <Dialog name={'Natali'} id={1}/>
        <Dialog name={'Victor'} id={2}/>
        <Dialog name={'Dima'} id={3}/>
        <Dialog name={'Oleg'} id={4}/>
    </div>
    <div className={d.messages}>
        <Message text={'Hello'} />
        <Message text={'How are you?'} />
        <Message text={'Good'} />
    </div>
</div>)
}
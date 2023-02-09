import React, {ChangeEvent} from 'react';
import d from './Dialogs.module.css'
import {Dialog} from "./dialogItem/dialogsItem";
import {Message} from "./messageItem/messageItems";
import {dialogPageType} from "../../redux/store";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/reduxStore";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {connect} from "react-redux";


type dialogsPropsType = {

    dialogPage: dialogPageType
    onChangeMessage: (newMessage: string) => void
    onClickButton: () => void
    isAuth:boolean
}
 export const Dialogs = (props: dialogsPropsType) => {

    let dialogElements = props.dialogPage.dialogs.map((el) =>
        <Dialog key={el.id} name={el.name} id={el.id}/>);
    let messageElement = props.dialogPage.messages.map((el) =>
        <Message key={el.id} text={el.text}/>)

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.target.value
        props.onChangeMessage(newMessage)
    }
    const onClickButton = () => {
        props.onClickButton()
    }
 /*   if(!props.isAuth)
    {
        return <Redirect to={"/login"}/>
    }
*/
    return (<div className={d.dialogs}>
        <div className={d.dialogItems}>
            {dialogElements}
        </div>
        <div className={d.messages}>
            {messageElement}
        </div>
        <div className={d.sendMessage}>
            <div><textarea className={d.inputMessage}
                           onChange={onChangeMessage}
                           placeholder={'Enter your message...'}
                           value={props.dialogPage.newMessage}></textarea></div>
            <button className={d.addMessage}
                    onClick={onClickButton}>Add message
            </button>
        </div>
    </div>)
}


/*
export const AuthRedirectComponent=(props: dialogsPropsType)=>{
    if(!props.isAuth)
    {return <Redirect to={"/login"}/>}
    return <Dialogs {...props}/>
}*/

import React from 'react';
import {changeMessageAC, onClickAddMessageAC} from "../../../redux/dialogsReducer";
import {Dialogs} from "../Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/reduxStore";



const mapStateToProps=(state:AppStateType)=>{
    return{
dialogPage: state.dialogsPage
    }
}
const mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        onChangeMessage:(newMessage:string)=>{dispatch(changeMessageAC(newMessage))},
        onClickButton: ()=>{dispatch(onClickAddMessageAC())}
    }
}
export const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs)
import React from 'react';
import {changeMessageAC, onClickAddMessageAC} from "../../../redux/dialogsReducer";
import {Dialogs} from "../Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../../redux/reduxStore";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {getUserProfile} from "../../../redux/profileReducer";



const mapStateToProps=(state:AppStateType)=>{
    return{
        dialogPage: state.dialogsPage,
        //isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        onChangeMessage:(newMessage:string)=>{dispatch(changeMessageAC(newMessage))},
        onClickButton: ()=>{dispatch(onClickAddMessageAC())}
    }
}

//let AuthRedirectComponent = withAuthRedirect(Dialogs)
const DialogsContainer=compose<React.ComponentType>(connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect)(Dialogs)
export default DialogsContainer
//export const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent)
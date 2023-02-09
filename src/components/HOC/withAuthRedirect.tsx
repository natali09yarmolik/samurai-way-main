import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";

type mapStateToPropsType={
    isAuth:boolean
}

const mapStateToProps=(state:AppStateType):mapStateToPropsType=>{
return {
    isAuth:state.auth.isAuth
}
}

export function withAuthRedirect<T>(Component:ComponentType<T>){
    const RedirectComponent=(props:mapStateToPropsType)=>{
            let {isAuth, ...restProps}=props
            if(!props.isAuth) return <Redirect to={"/login"}/>
            return <Component {...restProps as T}/>

    }
    let ConnectedRedirectComponent=connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
}
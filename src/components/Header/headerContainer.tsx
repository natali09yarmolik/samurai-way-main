import React from 'react';

import {Header} from "./header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {setUserData} from "../../redux/authReduser";


type mapStateToPropsType ={
    isAuth:boolean
    login:string | null
}
type mapDispatchToPropsType ={
    setUserData:(userId:number, email:string, login:string)=>void
}

export type HeaderContainerType=mapStateToPropsType & mapDispatchToPropsType
class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response=>{
                if(response.data.resultCode===0){
                    let {id, login,email}=response.data.data
                    this.props.setUserData(id, email, login)
                }
                })
        console.log(this.props.login)
    }

    render() {
        return <Header {...this.props} />;
    }


}
let mapStateToProps=(state:AppStateType):mapStateToPropsType=>{
    return{
    isAuth:state.auth.isAuth,
    login:state.auth.login
    }
}
export default connect(mapStateToProps, {setUserData})(HeaderContainer)
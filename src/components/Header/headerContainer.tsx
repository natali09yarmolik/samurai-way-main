import React from 'react';
import {Header} from "./header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {getHeaderThunk} from "../../redux/authReduser";



type mapStateToPropsType ={
    isAuth:boolean
    login:string | null
}
type mapDispatchToPropsType ={
     getHeaderThunk:()=>void
}

export type HeaderContainerType=mapStateToPropsType & mapDispatchToPropsType
class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        this.props.getHeaderThunk()
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
export default connect(mapStateToProps, { getHeaderThunk})(HeaderContainer)
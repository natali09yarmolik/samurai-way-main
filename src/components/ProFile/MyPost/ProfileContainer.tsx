import React from "react";
import {Profile} from "./Profile";

import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {getStatus, getUserProfile, ProfileType, setStatus, upDateStatus} from "../../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


type mapStateToPropsType ={
    profile: ProfileType | null
    status: string

}
type mapDispatchToPropsType ={
    getUserProfile:(userID:string)=>void
    getStatus:(userID:string)=>void
    upDateStatus:(status:string)=>void

}
type PathParamsType={
    userId:string
}
type ProfileContainerComponentType=mapStateToPropsType & mapDispatchToPropsType
type PropsType= ProfileContainerComponentType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component <PropsType>{
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
        this.props.getStatus(this.props.match.params.userId)

     }

    render() {

        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         upDateStatus={this.props.upDateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state:AppStateType):mapStateToPropsType=>{
    return{
        profile:state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps,
    { getUserProfile,
                      getStatus,
                      upDateStatus}),withAuthRedirect,withRouter)(ProfileContainer)



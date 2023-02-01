import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {ProfileType, setUserProfile} from "../../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type mapStateToPropsType ={
    profile: ProfileType | null
}
type mapDispatchToPropsType ={
    setUserProfile:(profile:ProfileType)=>void
}
type PathParamsType={
    userId:string
}
type ProfileContainerComponentType=mapStateToPropsType & mapDispatchToPropsType
type PropsType= ProfileContainerComponentType & RouteComponentProps<PathParamsType>
class ProfileContainerComponent extends React.Component <PropsType>{
    componentDidMount() {
         let userID=this.props.match.params.userId
        if(!userID){
            userID='2'
        }
          axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userID)
            .then(response=>{
                this.props.setUserProfile(response.data)
               })

    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }


}

let mapStateToProps = (state:AppStateType):mapStateToPropsType=>{
    return{
        profile:state.profilePage.profile
    }


}

let WithUrlDataContainerComponent = withRouter(ProfileContainerComponent)
export const ProfileContainer= connect(mapStateToProps,{setUserProfile})(WithUrlDataContainerComponent)


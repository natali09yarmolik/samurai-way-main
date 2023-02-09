import React from "react";
import {ProFileInfo} from "../Profileinfo/Profileinfo";
import {MyPostContainer} from "./Post/MyPostContainer";
import {ProfileType} from "../../../redux/profileReducer";

export type ProfilePropsType={
    profile:ProfileType |null
    status:string
    upDateStatus:(status:string)=>void

   // setUserProfile:(profile:ProfileType)=>void
}

export const Profile=(props:ProfilePropsType)=>{
   return(
       <div>
           <ProFileInfo profile={props.profile}
                        status={props.status}
                        upDateStatus={props.upDateStatus}/>
           <MyPostContainer />
       </div>
         )
 }
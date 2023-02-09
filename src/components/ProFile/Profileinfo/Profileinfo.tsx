import React, {useState} from 'react';
import p from './ProFileInfo.module.css'
import {ProfileType} from "../../../redux/profileReducer";
import {Loader} from "../../common/Loader";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType={
    profile:ProfileType |null
    status:string
    upDateStatus:(status:string)=>void
}

export const ProFileInfo=(props:ProfileInfoPropsType)=>{

   if(!props.profile){
       return <Loader/>
   }

    return(<div> <div className={p.imgCity}><img
        src='https://phonoteka.org/uploads/posts/2021-05/1621512287_16-phonoteka_org-p-fon-starii-gorod-23.jpg'/>
    </div>
        <div className={p.descriptionBlock}>
            <img src={props.profile.photos.small}/>
            <ProfileStatus status={props.status}
                           upDateStatus={props.upDateStatus}/>
           </div>
    </div>)
}
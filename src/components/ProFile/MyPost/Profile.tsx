import React from "react";
import {ProFileInfo} from "../Profileinfo/Profileinfo";
import {storeType} from "../../../redux/store";
import {MyPostContainer} from "./Post/MyPostContainer";



export const Profile=()=>{
   return(
       <div>
           <ProFileInfo/>
           <MyPostContainer />
       </div>
         )
 }
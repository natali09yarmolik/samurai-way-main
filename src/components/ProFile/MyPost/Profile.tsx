import React from "react";
import {MyPost} from "./MyPost";
import s from './ProFile.module.css'
import {ProFileInfo} from "../Profileinfo/Profileinfo";
import p from "../Profileinfo/ProFileInfo.module.css";

export const Profile=()=>{
    return(
           <div>

               <ProFileInfo />

                <MyPost/>
            </div>
         )
}
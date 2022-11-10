import React from "react";
import {MyPost} from "./MyPost";
import s from './ProFile.module.css'

export const Profile=()=>{
    return(
        <>
            <div className={s.content}>
                <div><img
                    src='https://phonoteka.org/uploads/posts/2021-05/1621512287_16-phonoteka_org-p-fon-starii-gorod-23.jpg'/>
                </div>
                <div className={s.img_cat}><img
                    src='https://i.pinimg.com/originals/22/cc/3b/22cc3bfc1fede6e2306cac7265515aa3.jpg'/>+discription
                </div>
                <MyPost/>
            </div>
        </>
    )
}
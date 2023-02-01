import preloader from "../../Avatars/g0R9.gif";
import s from "../Users/users.module.css";
import React from "react";


export const Loader = ()=>{
    return(
            <div>
                <img src={preloader} className={s.imgLoader}/>
            </div>
        )


}
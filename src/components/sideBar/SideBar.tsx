import React from 'react';
import {sideBarType, storeType} from "../../redux/store";
import s from './sideBar.module.css'
import {Friend} from "./friend";
import {AppStateType} from "../../redux/reduxStore";

/*
type sideBarPropsType={
    state:sideBarType
}
*/

export const SideBar=()=>{

    /*let friendSideBar=props.state.friends.map((el)=>
    <Friend name={el.name} photo={el.ava}/>)
*/
    return (
        <div className={s.sideBar}>
            <div className={s.title}>
                FRIENDS
            </div>
            <div className={s.blockFriend}>
              {/* // {friendSideBar}*/}
            </div>


        </div>
    )
}
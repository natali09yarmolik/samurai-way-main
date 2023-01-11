import React from 'react';
import s from './nav.module.css'
import {NavLink} from "react-router-dom";
import {SideBar} from "../sideBar/SideBar";



export const Navigation=()=>{
    return(
        <>
            <nav className={s.nav}>
                <div className={s.item}><NavLink to={'/Profile'} activeClassName={s.active}>Profile</NavLink> </div>
                <div className={s.item}><NavLink to={'/MessageItems'} activeClassName={s.active}>Messages</NavLink></div>
                <div className={s.item}><NavLink to={'/News'} activeClassName={s.active}>News</NavLink></div>
                <div className={s.item}><NavLink to={'/Users'} activeClassName={s.active}>Users</NavLink></div>
                <div className={s.item}><NavLink to={'/Music'} activeClassName={s.active}>Music</NavLink></div>
                <div className={s.item}><NavLink to={'/Settings'} activeClassName={s.active}>Settings</NavLink></div>
                <div className={s.item}><SideBar /></div>
            </nav>
        </>
    )
}
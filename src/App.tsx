import React from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import {Navigation} from "./components/NavBar/nav";
import { Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settin";
import {SideBar} from "./components/sideBar/SideBar";

import {UsersContainer} from "./components/Users/UsersContainer";

import HeaderContainer from "./components/Header/headerContainer";
import {Login} from "./components/Login/Login";
import ProfileContainer from "./components/ProFile/MyPost/ProfileContainer";
import DialogsContainer from "./components/Dialogs/messageItem/DialogsContainer";





export const App=() =>{

    return (
          <div className="app-wrapper">
              <HeaderContainer />
              <Navigation/>
              <div className='app-wrapper-content'>

                  <Route path={'/MessageItems'} render={()=><DialogsContainer />}/>
                  <Route path={'/Profile/:userId?'} render={()=><ProfileContainer />}/>
                  <Route path={'/Users'} render={()=><UsersContainer />}/>
                  <Route path={'/News'} component={News}/>
                  <Route path={'/Music'} component={Music}/>
                  <Route path={'/Settings'} component={Settings}/>
                  <Route path={'/SideBar'} render={()=><SideBar />}/>
                  <Route path={'/Login'} render={()=><Login />}/>
              </div>
          </div>
  )
}



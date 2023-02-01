import React from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import {Navigation} from "./components/NavBar/nav";
import { Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settin";
import {SideBar} from "./components/sideBar/SideBar";
import {DialogsContainer} from "./components/Dialogs/messageItem/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/ProFile/MyPost/ProfileContainer";
import HeaderContainer from "./components/Header/headerContainer";

export const App=() =>{

    return (
          <div className="app-wrapper">
              <HeaderContainer />
              <Navigation/>
              <div className='app-wrapper-content'>

                  <Route path={'/MessageItems'} render={()=><DialogsContainer />}/>
                  <Route path={'/Profile/:userId?'} render={()=><ProfileContainer/>}/>
                  <Route path={'/Users'} render={()=><UsersContainer />}/>
                  <Route path={'/News'} component={News}/>
                  <Route path={'/Music'} component={Music}/>
                  <Route path={'/Settings'} component={Settings}/>
                  <Route path={'/SideBar'} render={()=><SideBar />}/>
              </div>
          </div>
  )
}



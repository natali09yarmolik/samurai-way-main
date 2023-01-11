import React from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import {Navigation} from "./components/NavBar/nav";
import {Profile} from "./components/ProFile/MyPost/Profile";
import { Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settin";
import {storeType} from "./redux/store";
import {SideBar} from "./components/sideBar/SideBar";
import {DialogsContainer} from "./components/Dialogs/messageItem/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";



/*type appPropsType={
    store: storeType
}*/

export const App=() =>{

    return (
          <div className="app-wrapper">
              <Header/>
              <Navigation/>
              <div className='app-wrapper-content'>

                  <Route path={'/MessageItems'} render={()=><DialogsContainer />}/>
                  <Route path={'/Profile'} render={()=><Profile />}/>
                  <Route path={'/Users'} render={()=><UsersContainer />}/>
                  <Route path={'/News'} component={News}/>
                  <Route path={'/Music'} component={Music}/>
                  <Route path={'/Settings'} component={Settings}/>
                  <Route path={'/SideBar'} render={()=><SideBar />}/>
              </div>
          </div>

  )
}



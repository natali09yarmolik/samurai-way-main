import React from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import {Navigation} from "./components/NavBar/nav";
//import {MyPost} from "./components/ProFile/MyPost/MyPost";
import {Profile} from "./components/ProFile/MyPost/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settin";


function App() {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navigation/>
              <div className='app-wrapper-content'>
                  <Route path={'/Dialogs'} component={Dialogs}/>
                  <Route path={'/Profile'} component={Profile}/>
                  <Route path={'/News'} component={News}/>
                  <Route path={'/Music'} component={Music}/>
                  <Route path={'/Settings'} component={Settings}/>
              </div>
          </div>
      </BrowserRouter>
  )
}

export default App;

import React from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import {Navigation} from "./components/NavBar/nav";
//import {MyPost} from "./components/ProFile/MyPost/MyPost";
import {Profile} from "./components/ProFile/MyPost/Profile";



function App() {
  return (
      <div>
      <div className="app-wrapper">
          <Header />
          <Navigation />
          <Profile/>
      </div>
      </div>
  )
}

export default App;

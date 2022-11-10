import React from 'react';
import './App.css';


function App() {
  return (
    <div className="app-wrapper">
    <header className='header'>
      <img src='https://i.pinimg.com/originals/b9/05/3d/b9053d873e9f69058997913e0fffca2e.png' />
    </header>
    <nav className='nav'>
      <div>Profile</div>
      <div>Messages</div>
      <div>News</div>
      <div>Music</div>
      <div>Settings</div>

    </nav>
      <div className='content'>
        <div><img src='https://phonoteka.org/uploads/posts/2021-05/1621512287_16-phonoteka_org-p-fon-starii-gorod-23.jpg' /></div>
        <div className='img_cat'><img src='https://i.pinimg.com/originals/22/cc/3b/22cc3bfc1fede6e2306cac7265515aa3.jpg' />+discription</div>
        <div>My post</div>
        <div>New post
          <div>Post 1</div>
          <div>Post 2</div>
        </div>

      </div>

    </div>
  )
}

export default App;

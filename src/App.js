import React from 'react';
import myPhoto from './andrew.jpg';
import './App.css';
import EmailToClip from './components/CopyEmail.js';
import Link from './components/Link.js';

function App() {
  return (
    <div className='mainContent'>
      <div className="App">
        <div className='image-container'>
          <img className="andrew" src={myPhoto} alt="my Photo" />
        </div>
        <header className="header">
          <p className='name'>Andrew Chan</p>
          <p className='position'>Software Engineering Student</p>
          {/* props for the buttons information */}
          <div>
            <EmailToClip
              email="ajchan@ualberta.ca"
            />
            <Link
              name="Linkedin"
              account="https://www.linkedin.com/in/andrew-chan-815195239/"
            />
            <Link
              name="GitHub"
              account="https://github.com/andrewwchann"
            />
          </div>
        </header>

        <body>
          <div className='info'>
            <p className='sectionName'>About</p>
            <p className='aboutMe'>Hi my names Andrew Chan, and i'm a 3rd year software engineering student at the University of Alberta.</p>
            <p className='sectionName'>Interests</p>
            <ul className='interests'>
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Web 3 and Crypto</li>
              <li>Machine Learning</li>
            </ul>
          </div>
        </body>
      </div>
    </div>
  );
}

export default App;
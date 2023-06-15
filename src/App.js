import React from 'react'
import myPhoto from './andrew.jpg';
import './App.css';
import emailClip from './components/CopyEmail.js';
import linkedinLink from './components/LinkedinLink.js';

function App() {
  return (
    <div className='mainContent'>
      <div className="App">
        <img className="andrew" src={myPhoto} alt="my Photo" />
        <header className="header">
          <p className='name'>Andrew Chan</p>
          <p className='position'>Software Engineering Student</p>
          <div>
            <emailClip />
            <button className='email-button'>Email</button>
            {/* <a className='linkedin-button'>Linkedin</a> */}
            <linkedinLink />
            {/* <button className='linkedin-button' onClick="location.href='https://www.linkedin.com/in/andrew-chan-815195239/'">Linkedin</button> */}
            <button className='github-button' onClick={<a href='https://github.com/andrewwchann'></a>}>GitHub</button>
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

        <footer>
          <div>
            {/* <FooterIcon /> */}
          </div>

        </footer>

      </div>
    </div>
  );
}

export default App;
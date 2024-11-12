import React, { useState } from 'react';

function res() {
  // Update this to toggle the PDF display
  setShowResume(true);
}

function User() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className='card-container'>
      {/* Social Links */}
      <a className='pro' href='https://www.linkedin.com/in/praveen-sm-742209212/' target="_blank" rel="noopener noreferrer">Linkedin</a>
      <a className='pro2' href='https://github.com/Smpraveen8' target="_blank" rel="noopener noreferrer">Github</a>

      {/* Profile Image */}
      <img 
        src='photo1.jpg'
        className='image' 
        width="100" 
        height="100" 
        alt="Profile" 
      />

      {/* Profile Name and Info */}
      <h3 className='name'>Praveen SM</h3>
      <h3 className='dept'>smpraveen2002@gmail.com</h3>
      <h3 className='dept'>Electronics and Communication Engineering</h3>
      <p className='dept'>Full Stack Developer</p>

      {/* Resume Button */}
      <div className='button'>
        <button className='primary outline' onClick={res}>Resume</button>
      </div>

      {/* Show PDF inside an iframe if the user clicks 'Resume' */}
      {showResume && (
        <iframe 
          src="https://smpraveen8.github.io/ProfileCard/PraveenSM.pdf" 
          width="100%" 
          height="600px" 
          title="Resume"
        />
      )}

      {/* Skills Section */}
      <div className='skills'>
        <h6 className='sk'>Skills</h6>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React JS</li>
          <li>Java</li>
          <li>Python</li>
          <li>MySQL</li>
          <li>Oracle</li>
        </ul>
      </div>
    </div>
  );
}

export const ProfileCard = () => {
  return (
    <User />
  );
}

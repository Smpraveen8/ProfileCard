
import React from 'react'
function res(){
  window.location.href = '/PraveenSM.pdf' 
}
function User(){
  return(
    <div className='card-container'>
    <a className='pro' href='https://www.linkedin.com/in/praveen-sm-742209212/'>Linkedin</a>
    <a className='pro2' href='https://github.com/Smpraveen8'>Github</a>
    <img src='photo1.jpg' className='image' width= "100" height="100"></img>
    <h3 className='name'>Praveen SM</h3>
    <h3 className='dept'>smpraveen2002@gmail.com</h3>
    <h3 className='dept'>Electronics and Communication Engineering</h3>
    <p className='dept'>Full Stack Developer</p>
    <div className='button'>
      {/* <button className='primary'>Message</button> */}
      <button className='primary outline' onClick={res}>Resume</button>
    </div>
    <div className='skills'>
      <h6 className='sk'>Skills</h6>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React JS</li>
         <li>Java</li>
         <li>Python</li>
         <li>Mysql</li>
         <li>Oracle</li>
      </ul>
    </div>
    </div>
  )
      
}
export const ProfileCard = () => {
  return (
    < User />
  )
}

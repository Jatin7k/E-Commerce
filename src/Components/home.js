import React from 'react';
import { Link } from 'react-router-dom';
import './css/home.css';


const home = () => {
  return (
    <div style={{height:'60rem',backgroundImage:"url('https://later.com/images/img--waved__gradient.svg')",backgroundSize:"cover"}}>
    
      
    
        <h1 className='head'>Welcome, To Instatalk</h1>
      <ul>
        
        <li className='link' ><Link to="/register" className='line'>Register</Link></li>
        
        <li className='link'><Link to="/login" className='line'>Login</Link></li>
      </ul>
      
      <span className="Desc" style={{color:"rgb(131, 113, 148)"}}>
            Connect with friends and the world around you on Instatalk.
          </span>
    </div>
  )
}

export default home


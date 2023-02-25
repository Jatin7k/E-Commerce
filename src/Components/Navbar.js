import React from 'react';
import Notifications from '../images/bell.png';
import MessageIcon from '../images/message.png';
import Profileimage from '../images/Profile.jpg';
import './css/navbar.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:" #e3f2fd"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{color:"black"}}>Instatalk</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
          <Link className="nav-link active mb-2 " aria-current="page" to="/" style={{color:"black", marginTop:"10px"}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/profile"><img src={`${Profileimage}`} alt="profile image" className='profileimage' /></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/notifications"><img src={`${Notifications}`} alt="notification icon" className='icons'  /></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/messages"><img src={`${MessageIcon}`} alt="message icon" className='icons'  /></Link>
        </li>
       
      
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 " type="search" placeholder="Search for Friends" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

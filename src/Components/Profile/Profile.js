import React from 'react';
import '../css/profile.css';
import ProfileLeftbar from '../Leftsidecontainer/ProfileLeftbar';
import ProfileMainpost from '../Mainpostcontainer/ProfileMainpost';
import Navbar from '../Navbar.js';
import ProfileRightbar from '../Rightsidecontainer/ProfileRightbar';

const Profile = () => {
  return (
    <div className='profileContainer'>
      <Navbar/>
      <div className="subprofilecontainer">
        <ProfileLeftbar/>
        <ProfileMainpost/>
        <ProfileRightbar/>
      </div>
    </div>
  )
}

export default Profile

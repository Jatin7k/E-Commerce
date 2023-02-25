import React from 'react';
import '../css/profilemainpost.css';
import Contentupload from '../ContentUploadcontainer/Contentupload';
import Post from '../Postcontainer/Post';
import Coverimage from '../../images/cover.png';
const ProfileMainpost = () => {
  return (
    <div className='ProfileMainPostContainer'>
        <div >
            <img src={`${Coverimage}`} alt="" className='ProfilecoverImg' style={{marginTop:"20px"}}/>
            <h2 style={{marginTop:"-50px",color:"white",textAlign:"start",marginLeft:"40px"}}>Your Profile</h2>
        </div>
    <Contentupload/>
    <Post/>
    
  </div>
  )
}

export default ProfileMainpost

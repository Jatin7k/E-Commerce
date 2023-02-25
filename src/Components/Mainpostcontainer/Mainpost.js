import React from 'react';
import Contentupload from '../ContentUploadcontainer/Contentupload';
import '../css/mainpost.css';
import Post from '../Postcontainer/Post';
const Mainpost = () => {
  return (
    <div>
      <Contentupload/>
      <Post/>
      
    </div>
  )
}

export default Mainpost

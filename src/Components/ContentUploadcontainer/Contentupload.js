import React from 'react';
import '../css/contentupload.css';
import Profileimage from '../../images/Profile.jpg';
import imageIcon from '../../images/gallery.png';
import emojiIcon from '../../images/cat-face.png';
import videoIcon from '../../images/video.png';

const Contentupload = () => {
  return (
    <div>
      <div className='contentuploadcontainer'>
      <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
          <img src={`${Profileimage}`} className="profileimage" alt="" />
          <input type="text" className='contentWritingpart' placeholder='Write your real thought.....' />
        </div>
        <div>

        <div style={{display:'flex',marginLeft:'10px'}}>
            <img src={`${imageIcon}`} alt="" className='icon'/>
            <img src={`${emojiIcon}`} alt="" className='icon'/>
            <img src={`${videoIcon}`} alt="" className='icon' />
            <button style={{margin:'10px 450px',padding:'20px',backgroundColor:'black',color:'white',cursor:'pointer'}}>Post</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contentupload

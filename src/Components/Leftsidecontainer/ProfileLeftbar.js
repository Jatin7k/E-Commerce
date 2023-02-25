import React from 'react';
import '../css/profileleftbar.css';
import Coverimage from '../../images/cover.png';
import Profileimage from '../../images/Profile.jpg';
import image1 from '../../images/img8.jpeg';
import image2 from '../../images/img20.jpeg';
import image3 from '../../images/img24.jpeg';
import image4 from '../../images/img12.jpeg';
import image5 from '../../images/img15.jpeg';
import image6 from '../../images/img17.jpeg';
import image7 from '../../images/img23.jpeg';
import image8 from '../../images/img19.jpeg';
import image9 from '../../images/img13.jpeg';
import image10 from '../../images/img14.jpeg';
import image11 from '../../images/img5.jpeg';
import image12 from '../../images/img18.jpeg';


const ProfileLeftbar = () => {
    return (
        <div className='profileleftbar'>
            <div className='profilecontainer'>
                <img src={`${Coverimage}`} alt="" className='Profilepagecover' />
                <div style={{ display: "flex", alignItems: "center", marginTop: -30 }}>
                    <img src={`${Profileimage}`} alt="" className='ProfilepageImage' />
                    <div>
                        <p style={{ marginLeft: " 10px", marginTop: "25px", fontSize: "24px", color: "white", textAlign: "start" }}>Jatin</p>
                        <p style={{ marginLeft: " 10px", marginTop: "-18px", fontSize: "12px", color: "white", textAlign: "start" }}>React Developer</p>

                    </div>
                </div>
                <div style={{display: "flex",justifyContent:"space-between"}}>
                    <p style={{color:"white",marginLeft: " 20px", fontSize: "18px"}}>Following</p>
                    <p style={{color:"white",marginRight: " 20px", fontSize: "18px"}}>369</p>
                </div>
                <hr style={{marginTop:"-10px",color:"white"}}/>
                <div style={{display: "flex",justifyContent:"space-between",marginTop:"10px"}}>
                    <p style={{color:"white",marginLeft: " 20px", fontSize: "18px"}}>Followers</p>
                    <p style={{color:"white",marginRight: " 20px", fontSize: "18px"}}>169</p>
                </div>
                <hr style={{marginTop:"-10px",color:"white"}}/>
                <div style={{marginTop:"10px"}}>
                    <h5 style={{color:"white",marginLeft: " 10px", fontSize: "18px",marginTop:"30px"}}>User Bio</h5>
                    <p style={{color:"white",marginTop: " 6px", fontSize: "14px",textAlign:"start",marginLeft:"10px",marginRight:"8px"}}>Youth is a lie. It is evil. Fools who enjoy this thing called “youth,” should go and freaking die.  </p>
                </div>
                <button style={{width:"100%",padding:"7px",border:"none",marginTop: " 10px"}} className="editbtn">Edit Bio</button>
            </div>
            <div className='Notificationcontainer'>
              <h4 style={{margin:"30px 70px"}}>Your Followers</h4>
              <div style={{display: "flex",justifyContent:"space-between"}}>
                <p style={{marginLeft:"10px",fontSize:"18px"}}>Followers</p>
                <p style={{marginRight:"10px",color:"#aaa"}}>See all</p>
              </div>
              <div style={{display:"flex",flexWrap:"wrap"}}>
                <div style={{marginLeft:"8px"}}>
                    <img src={`${image6}`} alt="" className='friendImg'/>
                    <p style={{marginLeft:"20px"}}>Karna</p>
                </div>
                <div style={{marginLeft:"8px"}}>
                    <img src={`${image4}`} alt="" className='friendImg'/>
                    <p style={{marginLeft:"20px"}}>Chems</p>
                </div>
                <div style={{marginLeft:"8px"}}>
                    <img src={`${image2}`} alt="" className='friendImg'/>
                    <p style={{marginLeft:"20px"}}>Yui sa</p>
                </div>
                <div style={{marginLeft:"8px"}}>
                    <img src={`${image8}`} alt="" className='friendImg'/>
                    <p style={{marginLeft:"6px"}}>Champaklal</p>
                </div>
                <div style={{marginLeft:"8px"}}>
                    <img src={`${image3}`} alt="" className='friendImg'/>
                    <p style={{marginLeft:"20px"}}>Kira</p>
                </div>
                <div style={{marginLeft:"8px"}}>
                    <img src={`${image1}`} alt="" className='friendImg'/>
                    <p style={{marginLeft:"20px"}}>Warren</p>
                </div>
                <div style={{marginLeft:"8px"}}>
                    <img src={`${image5}`} alt="" className='friendImg'/>
                    <p style={{marginLeft:"20px"}}>Ashish</p>
                </div>
                <div style={{marginLeft:"8px"}}>
                    <img src={`${image7}`} alt="" className='friendImg'/>
                    <p style={{marginLeft:"20px"}}>Kakarot</p>
                </div>
                <div style={{marginLeft:"8px"}}>
                    <img src={`${image9}`} alt="" className='friendImg'/>
                    <p style={{marginLeft:"20px"}}>Vegeta</p>
                </div>
                <div style={{marginLeft:"8px"}}>
                    <img src={`${image10}`} alt="" className='friendImg'/>
                    <p style={{marginLeft:"20px"}}>ria_</p>
                </div>
                <div style={{marginLeft:"8px"}}>
                    <img src={`${image11}`} alt="" className='friendImg'/>
                    <p style={{marginLeft:"20px"}}>Jake kim</p>
                </div>
                <div style={{marginLeft:"8px"}}>
                    <img src={`${image12}`} alt="" className='friendImg'/>
                    <p style={{marginLeft:"20px"}}>Prabh</p>
                </div>
              </div>

            </div>
        </div>
    )
}

export default ProfileLeftbar

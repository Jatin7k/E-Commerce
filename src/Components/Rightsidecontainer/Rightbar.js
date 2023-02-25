import React from 'react';
import '../css/rightbar.css';
import addFriend from '../../images/add-user.png';
import img1 from '../../images/img1.jpeg';
import img2 from '../../images/img2.jpeg';
import img3 from '../../images/img3.jpeg';
import img4 from '../../images/img4.jpeg';
import img5 from '../../images/img5.jpeg';
import img6 from '../../images/img6.jpeg';
import img7 from '../../images/img7.jpeg';
import img8 from '../../images/img8.jpeg';
import img9 from '../../images/img19.jpeg';
import img10 from '../../images/img10.jpeg';
import img11 from '../../images/img11.jpeg';
import img12 from '../../images/img12.jpeg';
import img13 from '../../images/img13.jpeg';
import img14 from '../../images/img14.jpeg';
import img15 from '../../images/img15.jpeg';
import img16 from '../../images/img16.jpeg';
import img17 from '../../images/img17.jpeg';
import img18 from '../../images/img18.jpeg';
import img19 from '../../images/img19.jpeg';
import img20 from '../../images/img20.jpeg';
import img21 from '../../images/img21.jpeg';
import img22 from '../../images/img22.jpeg';
import img23 from '../../images/img23.jpeg';
import img24 from '../../images/img24.jpeg';


const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="rightcontainer">
        <h4 className="rightbarTitle" style={{marginLeft:"15px",marginTop:"10px"}}>Online Friends</h4>
        <ul className="rightbarFriendList">
        <li className="rightbarFriend">
                <div className='rightbarProfileContainer'>
                    <img src={`${img1}`} alt='' className='rightbarProfileImg' />
                    <span className="rightbarOnline"></span>
                </div>
                    <span className="rightbarusername" >Vasco</span>
            </li>
            <li className="rightbarFriend">
                <div className='rightbarProfileContainer'>
                    <img src={`${img2}`} alt='' className='rightbarProfileImg' />
                    <span className="rightbarOnline"></span>
                </div>
                    <span className="rightbarusername" >John Carter</span>
            </li>
            <li className="rightbarFriend">
                <div className='rightbarProfileContainer'>
                    <img src={`${img3}`} alt='' className='rightbarProfileImg' />
                    <span className="rightbarOnline"></span>
                </div>
                    <span className="rightbarusername" >Sinu Han</span>
            </li>
            <li className="rightbarFriend">
                <div className='rightbarProfileContainer'>
                    <img src={`${img4}`} alt='' className='rightbarProfileImg' />
                    <span className="rightbarOnline"></span>
                </div>
                    <span className="rightbarusername" >Jake Kim</span>
            </li>
            <li className="rightbarFriend">
                <div className='rightbarProfileContainer'>
                    <img src={`${img5}`} alt='' className='rightbarProfileImg' />
                    <span className="rightbarOnline"></span>
                </div>
                    <span className="rightbarusername" >Jack Lee</span>
            </li>
            <li className="rightbarFriend">
                <div className='rightbarProfileContainer'>
                    <img src={`${img6}`} alt='' className='rightbarProfileImg' />
                    <span className="rightbarOnline"></span>
                </div>
                    <span className="rightbarusername" >Mask Man</span>
            </li>
            <li className="rightbarFriend">
                <div className='rightbarProfileContainer'>
                    <img src={`${img7}`} alt='' className='rightbarProfileImg' />
                    <span className="rightbarOnline"></span>
                </div>
                    <span className="rightbarusername" >Manager Kim</span>
            </li>
            <li className="rightbarFriend">
                <div className='rightbarProfileContainer'>
                    <img src={`${img8}`} alt='' className='rightbarProfileImg' />
                    <span className="rightbarOnline"></span>
                </div>
                    <span className="rightbarusername" >Warren</span>
            </li>
            <li className="rightbarFriend">
                <div className='rightbarProfileContainer'>
                    <img src={`${img9}`} alt='' className='rightbarProfileImg' />
                    <span className="rightbarOnline"></span>
                </div>
                    <span className="rightbarusername" >Champaklal Gada</span>
            </li>
            <li className="rightbarFriend">
                <div className='rightbarProfileContainer'>
                    <img src={`${img10}`} alt='' className='rightbarProfileImg' />
                    <span className="rightbarOnline"></span>
                </div>
                    <span className="rightbarusername" >Ashish</span>
            </li>
            <li className="rightbarFriend">
                <div className='rightbarProfileContainer'>
                    <img src={`${img11}`} alt='' className='rightbarProfileImg' />
                    <span className="rightbarOnline"></span>
                </div>
                    <span className="rightbarusername" >Rocky</span>
            </li>
            <li className="rightbarFriend">
                <div className='rightbarProfileContainer'>
                    <img src={`${img12}`} alt='' className='rightbarProfileImg' />
                    <span className="rightbarOnline"></span>
                </div>
                    <span className="rightbarusername" >Chems</span>
            </li>
            <li className="rightbarFriend">
                <div className='rightbarProfileContainer'>
                    <img src={`${img13}`} alt='' className='rightbarProfileImg' />
                    <span className="rightbarOnline"></span>
                </div>
                    <span className="rightbarusername" >Saiyan Prince</span>
            </li>
           
        </ul>
      </div>
      <div className="rightcontainer2">
      <h4 style={{padding:'10px',marginLeft:"10px",marginTop:"10px"}}>Suggestions for you</h4>
      <div> 
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center',fontSize:"20px"}}>
                <img src={`${img14}`} alt="" srcset="" className='rightbarProfileImg' />
                <div>

                <p style={{margin:'10px 10px'}}>Lelouch vi</p>
                <p style={{margin:'10px 10px',marginTop:'-16px',fontSize:'12px',color:"#aaa"}}>Suggested for you</p>
                </div>
            </div>
            <div style={{backgroundColor:'#aaa',padding:'10px',marginRight:'13px',borderRadius:'50%',cursor:'pointer'}}>
                <img src={`${addFriend}`} alt="" className='addfriend'/>
            </div>
        </div>
      </div>
      <div> 
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center',fontSize:"20px"}}>
                <img src={`${img15}`} alt="" srcset="" className='rightbarProfileImg' />
                <div>

                <p style={{margin:'10px 10px'}}>Rohan</p>
                <p style={{margin:'10px 10px',marginTop:'-16px',fontSize:'12px',color:"#aaa"}}>Suggested for you</p>
                </div>
            </div>
            <div style={{backgroundColor:'#aaa',padding:'10px',marginRight:'13px',borderRadius:'50%',cursor:'pointer'}}>
                <img src={`${addFriend}`} alt="" className='addfriend'/>
            </div>
        </div>
      </div>
      <div> 
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center',fontSize:"20px"}}>
                <img src={`${img16}`} alt="" srcset="" className='rightbarProfileImg' />
                <div>

                <p style={{margin:'10px 10px'}}>Jack Lee</p>
                <p style={{margin:'10px 10px',marginTop:'-16px',fontSize:'12px',color:"#aaa"}}>Suggested for you</p>
                </div>
            </div>
            <div style={{backgroundColor:'#aaa',padding:'10px',marginRight:'13px',borderRadius:'50%',cursor:'pointer'}}>
                <img src={`${addFriend}`} alt="" className='addfriend'/>
            </div>
        </div>
      </div>
      <div> 
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center',fontSize:"20px"}}>
                <img src={`${img17}`} alt="" srcset="" className='rightbarProfileImg' />
                <div>

                <p style={{margin:'10px 10px'}}>Karna</p>
                <p style={{margin:'10px 10px',marginTop:'-16px',fontSize:'12px',color:"#aaa"}}>Suggested for you</p>
                </div>
            </div>
            <div style={{backgroundColor:'#aaa',padding:'10px',marginRight:'13px',borderRadius:'50%',cursor:'pointer'}}>
                <img src={`${addFriend}`} alt="" className='addfriend'/>
            </div>
        </div>
      </div>
      <div> 
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center',fontSize:"20px"}}>
                <img src={`${img18}`} alt="" srcset="" className='rightbarProfileImg' />
                <div>

                <p style={{margin:'10px 10px'}}>Kira</p>
                <p style={{margin:'10px 10px',marginTop:'-16px',fontSize:'12px',color:"#aaa"}}>Suggested for you</p>
                </div>
            </div>
            <div style={{backgroundColor:'#aaa',padding:'10px',marginRight:'13px',borderRadius:'50%',cursor:'pointer'}}>
                <img src={`${addFriend}`} alt="" className='addfriend'/>
            </div>
        </div>
      </div>
      <div> 
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center',fontSize:"20px"}}>
                <img src={`${img20}`} alt="" srcset="" className='rightbarProfileImg' />
                <div>

                <p style={{margin:'10px 10px'}}>Yui sa</p>
                <p style={{margin:'10px 10px',marginTop:'-16px',fontSize:'12px',color:"#aaa"}}>Suggested for you</p>
                </div>
            </div>
            <div style={{backgroundColor:'#aaa',padding:'10px',marginRight:'13px',borderRadius:'50%',cursor:'pointer'}}>
                <img src={`${addFriend}`} alt="" className='addfriend'/>
            </div>
        </div>
      </div>
      <div> 
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center',fontSize:"20px"}}>
                <img src={`${img21}`} alt="" srcset="" className='rightbarProfileImg' />
                <div>

                <p style={{margin:'10px 10px'}}>Jatin</p>
                <p style={{margin:'10px 10px',marginTop:'-16px',fontSize:'12px',color:"#aaa"}}>Suggested for you</p>
                </div>
            </div>
            <div style={{backgroundColor:'#aaa',padding:'10px',marginRight:'13px',borderRadius:'50%',cursor:'pointer'}}>
                <img src={`${addFriend}`} alt="" className='addfriend'/>
            </div>
        </div>
      </div>
      <div> 
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center',fontSize:"20px"}}>
                <img src={`${img22}`} alt="" srcset="" className='rightbarProfileImg' />
                <div>

                <p style={{margin:'10px 10px'}}>Akansha</p>
                <p style={{margin:'10px 10px',marginTop:'-16px',fontSize:'12px',color:"#aaa"}}>Suggested for you</p>
                </div>
            </div>
            <div style={{backgroundColor:'#aaa',padding:'10px',marginRight:'13px',borderRadius:'50%',cursor:'pointer'}}>
                <img src={`${addFriend}`} alt="" className='addfriend'/>
            </div>
        </div>
      </div>
      <div> 
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center',fontSize:"20px"}}>
                <img src={`${img23}`} alt="" srcset="" className='rightbarProfileImg' />
                <div>

                <p style={{margin:'10px 10px'}}>Kakarot</p>
                <p style={{margin:'10px 10px',marginTop:'-16px',fontSize:'12px',color:"#aaa"}}>Suggested for you</p>
                </div>
            </div>
            <div style={{backgroundColor:'#aaa',padding:'10px',marginRight:'13px',borderRadius:'50%',cursor:'pointer'}}>
                <img src={`${addFriend}`} alt="" className='addfriend'/>
            </div>
        </div>
      </div>
      <div> 
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center',fontSize:"20px"}}>
                <img src={`${img24}`} alt="" srcset="" className='rightbarProfileImg' />
                <div>

                <p style={{margin:'10px 10px'}}>Light </p>
                <p style={{margin:'10px 10px',marginTop:'-16px',fontSize:'12px',color:"#aaa"}}>Suggested for you</p>
                </div>
            </div>
            <div style={{backgroundColor:'#aaa',padding:'10px',marginRight:'13px',borderRadius:'50%',cursor:'pointer'}}>
                <img src={`${addFriend}`} alt="" className='addfriend'/>
            </div>
        </div>
      </div>
      <div> 
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center',fontSize:"20px"}}>
                <img src={`${img19}`} alt="" srcset="" className='rightbarProfileImg' />
                <div>

                <p style={{margin:'10px 10px'}}>Champaklal</p>
                <p style={{margin:'10px 10px',marginTop:'-16px',fontSize:'12px',color:"#aaa"}}>Suggested for you</p>
                </div>
            </div>
            <div style={{backgroundColor:'#aaa',padding:'10px',marginRight:'13px',borderRadius:'50%',cursor:'pointer'}}>
                <img src={`${addFriend}`} alt="" className='addfriend'/>
            </div>
        </div>
      </div>
      
      </div>
    </div>
  )
}

export default Rightbar

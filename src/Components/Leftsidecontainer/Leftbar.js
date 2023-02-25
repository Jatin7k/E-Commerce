import React from 'react';
import '../css/leftbar.css';
import image1 from '../../images/img8.jpeg';
import image2 from '../../images/img1.jpeg';
import image3 from '../../images/img6.jpeg';
import image4 from '../../images/img12.jpeg';
import image5 from '../../images/img15.jpeg';
import image6 from '../../images/img17.jpeg';
import image7 from '../../images/img22.jpeg';
import image8 from '../../images/img4.jpeg';
import image9 from '../../images/img13.jpeg';
import image10 from '../../images/img14.jpeg';
import image11 from '../../images/img5.jpeg';
import image12 from '../../images/img18.jpeg';
import image13 from '../../images/img9.jpeg';
import image14 from '../../images/img7.jpeg';
const Leftbar = () => {
    return (
        <div className='leftbar'>
            <div className='Notificationcontainer'>
                <div style={{ display: 'flex', justifyContent: 'space-around',margin:'10px' }}>
                    <p style={{margin:"10px -20px"}}>Notifications</p>
                    <p style={{ color: '#aaa',margin:"10px 40px" }}>See all</p>
                </div>
                <div>
                    <p style={{margin:'10px'}}>This week</p>
                </div>
                <div style={{display:'flex',alignItems:'center',marginTop:'-10px'}}>
                    <img src={`${image1}`} alt="" className='notificationimg' />
                    <p style={{margin:"10px 10px",fontSize:'14px' , color:"#aaa" ,textAlign:'start',width:'120px'}}>Logan like your post</p>
                    <img src={`${image2}`} alt="" className='likeimg' />
                </div>
                <div style={{display:'flex',alignItems:'center',marginTop:'-10px'}}>
                    <img src={`${image3}`} alt="" className='notificationimg' />
                    <p style={{margin:"10px 10px",fontSize:'14px' , color:"#aaa",textAlign:'start',width:'120px'}}>Atharv started to following you</p>
                   
                </div>
                <div style={{display:'flex',alignItems:'center',marginTop:'-10px'}}>
                    <img src={`${image4}`} alt="" className='notificationimg' />
                    <p style={{margin:"10px 10px",fontSize:'14px' , color:"#aaa",textAlign:'start',width:'120px'}}>Jake like your story</p>
                    <img src={`${image2}`} alt="" className='likeimg' />
                </div>
                <div style={{display:'flex',alignItems:'center',marginTop:'-10px'}}>
                    <img src={`${image5}`} alt="" className='notificationimg' />
                    <p style={{margin:"10px 10px",fontSize:'14px' , color:"#aaa",textAlign:'start',width:'120px'}}> Ashish requested to follow you</p>
                    
                </div>
                <div>
                    <p style={{margin:'10px'}}>This Month</p>
                </div>
                <div style={{display:'flex',alignItems:'center',marginTop:'-10px'}}>
                    <img src={`${image1}`} alt="" className='notificationimg' />
                    <p style={{margin:"10px 10px",fontSize:'14px' , color:"#aaa",textAlign:'start',width:'120px'}}>Logan like your post</p>
                    <img src={`${image2}`} alt="" className='likeimg' />
                </div>
                <div style={{display:'flex',alignItems:'center',marginTop:'-10px'}}>
                    <img src={`${image7}`} alt="" className='notificationimg' />
                    <p style={{margin:"10px 10px",fontSize:'14px' , color:"#aaa",textAlign:'start',width:'120px'}}>Parveen commented on your photo</p>
                    <img src={`${image6}`} alt="" className='likeimg' />
                </div>
                 <div style={{display:'flex',alignItems:'center',marginTop:'-10px'}}>
                    <img src={`${image4}`} alt="" className='notificationimg' />
                    <p style={{margin:"10px 10px",fontSize:'14px' , color:"#aaa",textAlign:'start',width:'120px'}}>Kajal like your post</p>
                    <img src={`${image8}`} alt="" className='likeimg' />
                </div>
                
                <div style={{display:'flex',alignItems:'center',marginTop:'-10px'}}>
                    <img src={`${image1}`} alt="" className='notificationimg' />
                    <p style={{margin:"10px 10px",fontSize:'14px' , color:"#aaa",textAlign:'start',width:'120px'}}>Logan stared following you</p>
                    
                </div>
                <div style={{display:'flex',alignItems:'center',marginTop:'-10px'}}>
                    <img src={`${image6}`} alt="" className='notificationimg' />
                    <p style={{margin:"10px 10px",fontSize:'14px' , color:"#aaa",textAlign:'start',width:'120px'}}>luv commented on your photo</p>
                    <img src={`${image6}`} alt="" className='likeimg' />
                </div>
                 <div style={{display:'flex',alignItems:'center',marginTop:'-10px'}}>
                    <img src={`${image4}`} alt="" className='notificationimg' />
                    <p style={{margin:"10px 10px",fontSize:'14px' , color:"#aaa",textAlign:'start',width:'120px'}}>Kajal like your response</p>
                    <img src={`${image3}`} alt="" className='likeimg' />
                </div>
                
                <div style={{display:'flex',alignItems:'center',marginTop:'-10px'}}>
                    <img src={`${image7}`} alt="" className='notificationimg' />
                    <p style={{margin:"10px 10px",fontSize:'14px' , color:"#aaa",textAlign:'start',width:'120px'}}>ria_ stared following you</p>
                    
                </div>
                <div style={{display:'flex',alignItems:'center',marginTop:'-10px'}}>
                    <img src={`${image1}`} alt="" className='notificationimg' />
                    <p style={{margin:"10px 10px",fontSize:'14px' , color:"#aaa",textAlign:'start',width:'120px'}}>Ashish requested to follow you</p>
                    
                </div>
                 <div style={{display:'flex',alignItems:'center',marginTop:'-10px'}}>
                    <img src={`${image4}`} alt="" className='notificationimg' />
                    <p style={{margin:"10px 10px",fontSize:'14px' , color:"#aaa",textAlign:'start',width:'120px'}}>sadawef like your post</p>
                    <img src={`${image8}`} alt="" className='likeimg' />
                </div>
                
                <div style={{display:'flex',alignItems:'center',marginTop:'-10px'}}>
                    <img src={`${image1}`} alt="" className='notificationimg' />
                    <p style={{margin:"10px 10px",fontSize:'14px' , color:"#aaa",textAlign:'start',width:'120px'}}>Jake kim stared following you</p>
                    
                </div>
            </div>
            <div className='Notificationcontainer'>
                <div style={{ display: 'flex', justifyContent: 'space-around',fontSize:'18px' }}>
                    <p style={{margin:"10px -20px"}}>Explores</p>
                    <p style={{ color: '#aaa',margin:"10px 20px" }}>See all</p>
                </div>
                <div>
                    <img src={`${image9}`} alt="" className="exploreimg" />
                    <img src={`${image10}`} alt="" className="exploreimg" />
                    <img src={`${image11}`} alt="" className="exploreimg" />
                    <img src={`${image12}`} alt="" className="exploreimg" />
                    <img src={`${image1}`} alt="" className="exploreimg" />
                    <img src={`${image6}`} alt="" className="exploreimg" />
                    <img src={`${image13}`} alt="" className="exploreimg" />
                    <img src={`${image2}`} alt="" className="exploreimg" />
                    <img src={`${image8}`} alt="" className="exploreimg" />
                    <img src={`${image3}`} alt="" className="exploreimg" />
                    <img src={`${image14}`} alt="" className="exploreimg" />
                    <img src={`${image7}`} alt="" className="exploreimg" />
                </div>
            
            </div>
        </div>
    )
}

export default Leftbar

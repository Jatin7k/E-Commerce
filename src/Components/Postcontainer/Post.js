import '../css/post.css';
import React, { useState } from 'react';
import Profileimage from '../../images/Profile.jpg';
import PostImg1 from '../../images/img3.jpeg';
import img4 from '../../images/img4.jpeg';
import likeIcon from '../../images/like.png';
import commentIcon from '../../images/speech-bubble.png';
import shareIcon from '../../images/share.png';
import moreOptions from '../../images/more.png';
import clickLikeIcon from '../../images/setLike.png';

const Post = () => {
    const[Like,setLike]=useState(likeIcon);
    const[count,setCount]=useState(30);
    const handleClick=()=>{
        if(Like === likeIcon){
            setLike(clickLikeIcon);
            setCount(count+1);
        }
        else{
            setLike(likeIcon);
            setCount(count-1);
        }

    }
    return (
        <div className='postcontainer'>
            <div className="subpostcontainer">
                <div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={`${Profileimage}`} alt="" className='postImg' />
                        <div>
                        <p style={{margin:"15px 5px",fontSize:"20px"}}>Daniel</p>
                        <p style={{fontSize:'12px',textAlign:'start',color:"#aaa",marginLeft:'6px',marginTop:'-18px'}}>Following by Sam</p>

                        </div>
                        <img src={`${moreOptions}`} alt="" className='moreoption' />

                    </div>
                    <p style={{ textAlign: 'start', width: '96%', marginLeft: '10px',marginTop:'10px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi pariatur quod sequi suscipit adipisci dolorem enim deleniti provident quisquam natus minima velit, ullam error asperiores.</p>
                    <p style={{ textAlign: 'start',marginTop:"-10px", marginLeft: '10px',color:"#aaa" }}>Posted 1d ago</p>
                    <img src={`${Profileimage}`} alt="" className='postImages' />
                    <div style={{display:"flex",marginTop:"10px"}}>
                        <div style={{display:"flex",marginLeft:"10px"}}>
                            <div style={{ display: "flex", alignItems: "center",cursor:'pointer' }}>
                                <img src={`${Like}`} alt="" className='iconforpost' onClick={handleClick} />
                                <p style={{margin:'20px 6px'}} >{count} Likes</p>
                            </div>
                            <div style={{ display: "flex", alignItems: "center",marginLeft:'20px',cursor:'pointer'  }}>
                                <img src={`${commentIcon}`} alt="" className='iconforpost'/>
                                <p style={{margin:'20px 6px'}}>12 Comments</p>
                            </div>
                            <div style={{ display: "flex", alignItems: "center",marginLeft:'350px',cursor:'pointer'  }}>
                                <img src={`${shareIcon}`} alt="" className='iconforpost'/>
                                <p style={{margin:'20px 10px'}}>Share</p>
                            </div>
                        </div>
                    </div>
                        <div style={{display:"flex",alignItems:'center'}}>
                        <img src={`${Profileimage}`} alt="" className='postImg' />
                        
                        <input type="text" className='comment' placeholder='Write your Comment'/>
                        <button className='addCommentbtn'>Add Comment</button>
                        </div>
                </div>
            </div>
            <div className="subpostcontainer">
                <div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={`${img4}`} alt="" className='postImg' />
                        <div>
                        <p style={{margin:"15px 5px",fontSize:"20px"}}>Jake Kim</p>
                        <p style={{fontSize:'12px',textAlign:'start',color:"#aaa",marginLeft:'6px',marginTop:'-18px'}}>Following by Jerry</p>

                        </div>
                        <img src={`${moreOptions}`} alt="" className='moreoption' />

                    </div>
                    <p style={{ textAlign: 'start', width: '96%', marginLeft: '10px',marginTop:'10px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi pariatur quod sequi suscipit adipisci dolorem enim deleniti provident quisquam natus minima velit, ullam error asperiores.</p>
                    <p style={{ textAlign: 'start',marginTop:"-10px", marginLeft: '10px',color:"#aaa" }}>Posted 2w ago</p>
                    <img src={`${PostImg1}`} alt="" className='postImages' />
                    <div style={{display:"flex",marginTop:"10px"}}>
                        <div style={{display:"flex",marginLeft:"10px"}}>
                            <div style={{ display: "flex", alignItems: "center",cursor:'pointer' }}>
                                <img src={`${Like}`} alt="" className='iconforpost' onClick={handleClick} />
                                <p style={{margin:'20px 6px'}} >{count} Likes</p>
                            </div>
                            <div style={{ display: "flex", alignItems: "center",marginLeft:'20px',cursor:'pointer'  }}>
                                <img src={`${commentIcon}`} alt="" className='iconforpost'/>
                                <p style={{margin:'20px 6px'}}>10 Comments</p>
                            </div>
                            <div style={{ display: "flex", alignItems: "center",marginLeft:'350px',cursor:'pointer'  }}>
                                <img src={`${shareIcon}`} alt="" className='iconforpost'/>
                                <p style={{margin:'20px 10px'}}>Share</p>
                            </div>
                        </div>
                    </div>
                        <div style={{display:"flex",alignItems:'center'}}>
                        <img src={`${Profileimage}`} alt="" className='postImg' />
                        
                        <input type="text" className='comment' placeholder='Write your Comment'/>
                        <button className='addCommentbtn'>Add Comment</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Post


import React from 'react';
import '../css/profilerightbar.css';
import addFriend from '../../images/add-user.png';
import img3 from '../../images/img3.jpeg';
import req1 from '../../images/req1.jpg';
import req2 from '../../images/req2.jpg';
import req3 from '../../images/req3.png';
import img5 from '../../images/img5.jpeg';
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

const ProfileRightbar = () => {
    return (
        <div className='profilerightbar'>
            <div className="Profilerightcontainer">
                <h3 style={{ textAlign: "center", marginTop: "10px" }}>Follow request</h3>
                <div>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", marginLeft: 10, cursor: "pointer" }}>
                            <img src={`${req1}`} alt="" className='FriendsreqImg' style={{ marginTop: "10px" }} />
                            <p style={{ textAlign: "start", margin: "10px 10px" }}>Harshita_ requested to follow you.</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-around" ,marginTop:"6px"}}>
                            <button style={{ padding: "5px 30px", border: "none", backgroundColor: "black", color: "white", borderRadius: "10px" }}>Confirm</button>
                            <button style={{ padding: "5px 30px", border: "none", backgroundColor: "#aaa", color: "white", borderRadius: "10px" }}>Delete</button>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", marginLeft: 10, cursor: "pointer" }}>
                            <img src={`${req3}`} alt="" className='FriendsreqImg' style={{ marginTop: "10px" }} />
                            <p style={{ textAlign: "start", margin: "10px 10px" }}>tushar@ requested to follow you.</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-around" ,marginTop:"6px"}}>
                            <button style={{ padding: "5px 30px", border: "none", backgroundColor: "black", color: "white", borderRadius: "10px" }}>Confirm</button>
                            <button style={{ padding: "5px 30px", border: "none", backgroundColor: "#aaa", color: "white", borderRadius: "10px" }}>Delete</button>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", marginLeft: 10, cursor: "pointer" }}>
                            <img src={`${img5}`} alt="" className='FriendsreqImg' style={{ marginTop: "10px" }} />
                            <p style={{ textAlign: "start", margin: "10px 10px" }}>Ashish_L requested to follow you.</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-around",marginTop:"6px" }}>
                            <button style={{ padding: "5px 30px", border: "none", backgroundColor: "black", color: "white", borderRadius: "10px" }}>Confirm</button>
                            <button style={{ padding: "5px 30px", border: "none", backgroundColor: "#aaa", color: "white", borderRadius: "10px" }}>Delete</button>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", marginLeft: 10, cursor: "pointer" }}>
                            <img src={`${req2}`} alt="" className='FriendsreqImg' style={{ marginTop: "10px" }} />
                            <p style={{ textAlign: "start", margin: "10px 10px" }}>lisha_12 requested to follow you.</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-around" ,marginTop:"6px"}}>
                            <button style={{ padding: "5px 30px", border: "none", backgroundColor: "black", color: "white", borderRadius: "10px" }}>Confirm</button>
                            <button style={{ padding: "5px 30px", border: "none", backgroundColor: "#aaa", color: "white", borderRadius: "10px" }}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightcontainer2">
                <h4 style={{ padding: '10px' }}>Suggestions for you</h4>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: "20px" }}>
                            <img src={`${img14}`} alt="" srcset="" className='rightbarProfileImg' />
                            <div>

                                <p style={{ margin: '10px 10px' }}>Lelouch vi</p>
                                <p style={{ margin: '10px 10px', marginTop: '-16px', fontSize: '12px', color: "#aaa" }}>Suggested for you</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#aaa', padding: '10px', marginRight: '13px', borderRadius: '50%', cursor: 'pointer' }}>
                            <img src={`${addFriend}`} alt="" className='addfriend' />
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: "20px" }}>
                            <img src={`${img15}`} alt="" srcset="" className='rightbarProfileImg' />
                            <div>

                                <p style={{ margin: '10px 10px' }}>Rohan</p>
                                <p style={{ margin: '10px 10px', marginTop: '-16px', fontSize: '12px', color: "#aaa" }}>Suggested for you</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#aaa', padding: '10px', marginRight: '13px', borderRadius: '50%', cursor: 'pointer' }}>
                            <img src={`${addFriend}`} alt="" className='addfriend' />
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: "20px" }}>
                            <img src={`${img16}`} alt="" srcset="" className='rightbarProfileImg' />
                            <div>

                                <p style={{ margin: '10px 10px' }}>Jack Lee</p>
                                <p style={{ margin: '10px 10px', marginTop: '-16px', fontSize: '12px', color: "#aaa" }}>Suggested for you</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#aaa', padding: '10px', marginRight: '13px', borderRadius: '50%', cursor: 'pointer' }}>
                            <img src={`${addFriend}`} alt="" className='addfriend' />
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: "20px" }}>
                            <img src={`${img17}`} alt="" srcset="" className='rightbarProfileImg' />
                            <div>

                                <p style={{ margin: '10px 10px' }}>Karna</p>
                                <p style={{ margin: '10px 10px', marginTop: '-16px', fontSize: '12px', color: "#aaa" }}>Suggested for you</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#aaa', padding: '10px', marginRight: '13px', borderRadius: '50%', cursor: 'pointer' }}>
                            <img src={`${addFriend}`} alt="" className='addfriend' />
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: "20px" }}>
                            <img src={`${img18}`} alt="" srcset="" className='rightbarProfileImg' />
                            <div>

                                <p style={{ margin: '10px 10px' }}>Kira</p>
                                <p style={{ margin: '10px 10px', marginTop: '-16px', fontSize: '12px', color: "#aaa" }}>Suggested for you</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#aaa', padding: '10px', marginRight: '13px', borderRadius: '50%', cursor: 'pointer' }}>
                            <img src={`${addFriend}`} alt="" className='addfriend' />
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: "20px" }}>
                            <img src={`${img20}`} alt="" srcset="" className='rightbarProfileImg' />
                            <div>

                                <p style={{ margin: '10px 10px' }}>Yui sa</p>
                                <p style={{ margin: '10px 10px', marginTop: '-16px', fontSize: '12px', color: "#aaa" }}>Suggested for you</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#aaa', padding: '10px', marginRight: '13px', borderRadius: '50%', cursor: 'pointer' }}>
                            <img src={`${addFriend}`} alt="" className='addfriend' />
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: "20px" }}>
                            <img src={`${img21}`} alt="" srcset="" className='rightbarProfileImg' />
                            <div>

                                <p style={{ margin: '10px 10px' }}>Jatin</p>
                                <p style={{ margin: '10px 10px', marginTop: '-16px', fontSize: '12px', color: "#aaa" }}>Suggested for you</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#aaa', padding: '10px', marginRight: '13px', borderRadius: '50%', cursor: 'pointer' }}>
                            <img src={`${addFriend}`} alt="" className='addfriend' />
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: "20px" }}>
                            <img src={`${img22}`} alt="" srcset="" className='rightbarProfileImg' />
                            <div>

                                <p style={{ margin: '10px 10px' }}>Akansha</p>
                                <p style={{ margin: '10px 10px', marginTop: '-16px', fontSize: '12px', color: "#aaa" }}>Suggested for you</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#aaa', padding: '10px', marginRight: '13px', borderRadius: '50%', cursor: 'pointer' }}>
                            <img src={`${addFriend}`} alt="" className='addfriend' />
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: "20px" }}>
                            <img src={`${img23}`} alt="" srcset="" className='rightbarProfileImg' />
                            <div>

                                <p style={{ margin: '10px 10px' }}>Kakarot</p>
                                <p style={{ margin: '10px 10px', marginTop: '-16px', fontSize: '12px', color: "#aaa" }}>Suggested for you</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#aaa', padding: '10px', marginRight: '13px', borderRadius: '50%', cursor: 'pointer' }}>
                            <img src={`${addFriend}`} alt="" className='addfriend' />
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: "20px" }}>
                            <img src={`${img24}`} alt="" srcset="" className='rightbarProfileImg' />
                            <div>

                                <p style={{ margin: '10px 10px' }}>Light </p>
                                <p style={{ margin: '10px 10px', marginTop: '-16px', fontSize: '12px', color: "#aaa" }}>Suggested for you</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#aaa', padding: '10px', marginRight: '13px', borderRadius: '50%', cursor: 'pointer' }}>
                            <img src={`${addFriend}`} alt="" className='addfriend' />
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: "20px" }}>
                            <img src={`${img19}`} alt="" srcset="" className='rightbarProfileImg' />
                            <div>

                                <p style={{ margin: '10px 10px' }}>Champaklal</p>
                                <p style={{ margin: '10px 10px', marginTop: '-16px', fontSize: '12px', color: "#aaa" }}>Suggested for you</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#aaa', padding: '10px', marginRight: '13px', borderRadius: '50%', cursor: 'pointer' }}>
                            <img src={`${addFriend}`} alt="" className='addfriend' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfileRightbar

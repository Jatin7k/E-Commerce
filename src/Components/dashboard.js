import React from 'react';
import './css/dashboard.css';
import Leftbar from './Leftsidecontainer/Leftbar';
import Mainpost from './Mainpostcontainer/Mainpost';
import Navbar from './Navbar';
import Rightbar from './Rightsidecontainer/Rightbar';

const dashboard = () => {
    
  return (
    <div className='dashboard'>
      <Navbar/>
      <div className='componentcontainer'>
        <Leftbar/>
        <Mainpost/>
        <Rightbar/>
      </div>
    </div>
  )
}

export default dashboard

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../util/localStorage';
import './css/login.css';



const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function atemptloginUser(e) {
    e.preventDefault();
    const response = loginUser({ username, password });

    if (response.status === 'ok') {
      alert('You are loggedIn successfully');
      navigate('/dashboard', { replace: true });
    }
    else {
      alert(response.error);
    }
  }
  return (
    <div style={{ height:'61rem',backgroundImage:"url('https://wallpapercave.com/wp/wp9764009.jpg')",backgroundSize:"cover"}} className='style'>
      <div className='container'>
        
      <div className='col-md-4 col-md-offset-6'>
      <form onSubmit={atemptloginUser} className='login'>
        <div className="mt-3">

          <h1 style={{color:"rgb(175, 117, 172)",padding:"50px",}}>Login to our app-Instatalk</h1>
          <label for="exampleInputEmail1" className="form-label">Username</label>
          <input value={username} onChange={e => setUsername(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='username' />

        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder='password' />
        </div>

        <button type="submit" className="btn btn-primary" value='Login '>Submit</button>
      </form>
      <div className="registerLeft ">
          <h3 className="registerLogo">Instatalk</h3>
          <span className="registerDesc" style={{color:"rgb(131, 113, 148)"}}>
            Connect with friends and the world around you on Instatalk.
          </span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login

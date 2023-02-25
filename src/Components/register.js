import React,{ useState } from 'react';
import {createUser} from '../util/localStorage';
import { useNavigate } from 'react-router-dom';
import './css/register.css';
const Register = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function registerUser(e){
        e.preventDefault();
        const response = createUser({username,password});

        if(response.status === 'ok'){
            alert('You are registered successfully');
            navigate('/login', {replace:true});
        }
        else{
            alert(response.error );
        }
    }
  return (
    <div style={{height:'60rem',backgroundImage:"url('https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvY2lhbCUyMG1lZGlhJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80')",backgroundSize:"cover"}} className='style'>
      <div className='container'>
         
         <div className='col-md-4 col-md-offset-6'>
        <form onSubmit={registerUser} className='register' >
        <div className="mt-4">

          <h1 className='heading'>Register to our app-Instatalk</h1>
          <label for="exampleInputEmail1" className="form-label">Username</label>
          <input value={username} onChange={e => setUsername(e.target.value)} type="text" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='username' />

        </div>
        <div className="mb-4 mt-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder='password' />
        </div>

        <button type="submit" className="btn btn-primary" value='Create account '>Submit</button>
      </form>
      <div className="registerLeft ">
          <h3 className="registerLogo">Instatalk</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Instatalk.
          </span>
        </div>
      </div>
      </div>
    </div>
    
  )
}

export default Register

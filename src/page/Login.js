import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (event) =>{
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={(event)=>loginUser(event)}>
        <h1>로그인</h1>
        <div className="login-box">
          <label>
            Email
            <input 
              type="text"
            />
          </label>
          <label>
            Password
            <input 
              type="password"
            />
          </label>
          <button type="submit" className="btn-login">로그인</button>
        </div>
      </form>
    </div>
  )
}

export default Login

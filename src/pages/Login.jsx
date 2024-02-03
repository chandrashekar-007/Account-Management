import React, { useState } from 'react'
import {Link , useNavigate  } from 'react-router-dom'


export default function Login() {
  const [user, setUser] = useState({
    email:"",pswd:""
  })


  const navigate = useNavigate();
  const loginData = localStorage.getItem("userdata");
  const parsedData = JSON.parse(loginData)
  const localEmail = parsedData.email;
  const localPass = parsedData.pswd;
  const handleChange=(e)=>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(localEmail === user.email && localPass === user.pswd){
      alert("Welcome back")
      navigate("/")
    }
    else{
      alert("Invalid Credentials")
    }
  }

  return (
    <div className='account-sec login'>
      <form onSubmit={handleSubmit}>
        <div className="title">Login</div>
        <div className="fields">
          <div className="email-field">
            <input type="email" name="email" autoComplete='off' value={user.email} onChange={handleChange}  placeholder="Enter email"  required/>
          </div>
          <div className="pswd-field">
            <input type="password" name="pswd" autoComplete='off' value={user.pswd} onChange={handleChange}  placeholder="Enter password"  required/>
          </div>
        </div>
        <button type='submit' className="button">
          Login
        </button>
        <div className="change-account">
          Don&apos;t have an account? <Link to="/signup">Register</Link>
        </div>
      </form>
    </div>
  )
}

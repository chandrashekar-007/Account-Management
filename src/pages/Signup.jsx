import React, { useEffect, useState } from 'react'
import {Link , useNavigate } from 'react-router-dom'

export default function Signup({setAuth}) {

  const [user, setUser] = useState({
    name:"",email:"",number:"",desg:"",pswd:""
  })
  const navigate = useNavigate();
  // const location = useLocation();
  const handleChange=(e)=>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }
  useEffect(() => {
  setAuth(false)
   
  }, [])
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(user){
      localStorage.setItem("userdata",JSON.stringify(user))
      alert("Account has been created successfully!")
      navigate("/",{ state : user})
    }
    else{
      alert("Please fill the credentials carefully")
    }
    // console.log(user);
  }

  return (
    <div className='account-sec'>
      <form onSubmit={handleSubmit}>
        <div className="title">Register</div>
        <div className="fields">
          <div className="name-field">
            <input type="text" name="name" autoComplete='off' value={user.name} onChange={handleChange} placeholder="Enter name" required/>
          </div>
          <div className="email-field">
            <input type="email" name="email" autoComplete='off' value={user.email} onChange={handleChange}  placeholder="Enter email"  required/>
          </div>
          <div className="contact-field">
            <input type="tel" name="number" autoComplete='off' value={user.number} onChange={handleChange}  placeholder="Enter number"  required/>
          </div>
          <div className="desg-field">
            <input type="text" name="desg" autoComplete='off' value={user.desg} onChange={handleChange}  placeholder="Enter designation"  required/>
          </div>
          <div className="pswd-field">
            <input type="password" name="pswd" autoComplete='off' value={user.pswd} onChange={handleChange}  placeholder="Enter password"  required/>
          </div>
        </div>
        <button type='submit' className="button signup">
          Signup
        </button>
        <div className="change-account">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  )
}

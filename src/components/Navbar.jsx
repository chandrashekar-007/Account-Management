import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Navbar({auth,setAuth}) {
    const navigate = useNavigate();
    const handleLogout =()=>{
      const logout = confirm("Do you really want to logout ?");
      if(logout) navigate("/login")
      setAuth(true)
    }
  return (
    <div className='nav'>
        <div className="nav-logo" onClick={()=>navigate("/")}>Account Management</div>
        <div className="nav-button">
          {
            !auth? (
              <>
              <div className="nav-login" onClick={()=>navigate("/login")}>Login</div>
              <div className="nav-signup" onClick={()=>navigate("/signup")}>Signup</div>
              </>
            ):(
              <div className="nav-logout" onClick={handleLogout}>Logout</div>
            )
          }
        </div>
    </div>
  )
}

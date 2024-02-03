
import {  Route, Routes , useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Account from './pages/Account'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { useEffect, useState } from 'react'

function App() {
  
  const [authenticated, setAuthenticated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/signup")
    
  }, [])
  

  return (
    <>
      <Navbar auth={authenticated }  setAuth={setAuthenticated} />
      <Routes>
        <Route path="/" element={<Account setAuth={setAuthenticated}/>}/>
        <Route path="/signup" element={<Signup   setAuth={setAuthenticated}/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
     
    </>
  )
}

export default App

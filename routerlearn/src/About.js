import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Service = () => {
    const navigate = useNavigate()
    const Homrfun = ()=>{
        navigate('/')
    }
    
  return (
    <div>
      <h1>Hi this is About Page</h1>
      <Link to={'/'}>Home</Link>
      <button onClick={Homrfun}>Home</button>
    </div>
  )
}

export default Service

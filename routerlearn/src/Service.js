import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
const Service = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.state.ss)
    const Homrfun = ()=>{
        navigate('/')
    }
  return (
    <div>
      <h1>Hi this is Service Page</h1>
      <NavLink to={'/'} activeClassName='home_page'>Home</NavLink>
      <button onClick={Homrfun}>Home id:{location.state.ss}</button>
    </div>
  )
}
export default Service 
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const id=5;
  return (
    <div>
      <h1>Hi this is Home Page</h1>
      <Link to={'/about'}>About</Link><br />
      <Link to={'/service'}>Service</Link><br />
      <button onClick={()=>navigate('/about')}>About</button><br />
      <button onClick={()=>navigate('/service',{state:{ss:id}})}>Service</button>
    </div>
  )
}
export default Home

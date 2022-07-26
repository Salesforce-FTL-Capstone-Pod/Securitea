import React from 'react'
import { Link } from "react-router-dom"
import "./Landing.css"

function Landing() {
  return (
    <div className='Landing'>
        <div className='hero'>
            <h1>Landing Page</h1>
            <p>You landed at the landing page.</p>
            <Link to="/login">Login here.</Link>  <br></br>
            <Link to="/register">Register here.</Link>
        </div>
    </div>
  )
}

export default Landing
import React from 'react'
import "./ModulePage.css"
import Logo from "../../assets/Logo.svg"
import { Link } from "react-router-dom"
import { css, Button, Text, Container, Card, Row, Col, Spacer } from '@nextui-org/react'

function ModulePage() {

  return (
    <div className='ModulePage'>
      <div className='HeroBackground'>
        <Navbar/>
        
        <div className='Hero'>
          <Text h2 size={15} color="white" css={{ m: 0 }}>
            Test
          </Text>
        </div>
      </div>
    </div>
  )
}
 
export default ModulePage



const navLinks = [
  { label: "Home", path: `/` },
  { label: "Modules", path: `/modules` },
  { label: "Resources", path: `/resources` },
  { label: "Contact Us", path: `/contactus` },
]
function Navbar() {
  return (
    <nav className="Navbar">
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <ul className="links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

//Ex using theme        <Text css={{ background: '$black' }}>NextUI colors</Text> 
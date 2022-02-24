import React from 'react'
import {NavLink} from 'react-router-dom'

import '../App.css';
function Navbar() {
  return (
      <>
      <NavLink exact  to='/about' >About us </NavLink>
      <NavLink exact  to='/contact'>Contact Us</NavLink>
      </>
   
  )
}

export default Navbar
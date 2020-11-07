import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'

const Header = () =>{
  return(
    <header>
      <Link to="/">Drone</Link>
    </header>
  )
}

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'

const Header = () =>{
  return(
    <header className='fadeRight'>
      <div>
      <Link to="/">Drone</Link>
      </div>
    </header>
  )
}

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaConnectdevelop } from "react-icons/fa";
import '../styles/Header.css'

const Header = () =>{
  return(
    <header className='fadeRight'>
      <div>
        <Link to="/">Drone</Link>
      </div>
      <div>
        <Link to="/connection">
          <FaConnectdevelop className='headerRight'/>
        </Link>
      </div>
    </header>
  )
}

export default Header;
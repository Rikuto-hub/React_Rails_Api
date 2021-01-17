import React from 'react';
import { Link } from 'react-router-dom';
import { FaConnectdevelop } from "react-icons/fa";
import '../styles/Header.css'

const Header = () =>{

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return(
    <header className='fadeRight'>
      <div className='headerLeft' onClick={scrollToTop}>
        Drone
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
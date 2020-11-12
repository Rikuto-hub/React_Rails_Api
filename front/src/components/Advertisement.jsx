import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/mountain.jpg';
import '../styles/Advertisement.css'

const Advertisement = () => {
  return( 
    <div className='Advertisement'>
      {/* <Link to="/hoge"> */}
      <img src={logo} alt={logo}/>
      {/* </Link> */}
      <Link to="/">×</Link>
    </div>
    )
}

export default Advertisement;
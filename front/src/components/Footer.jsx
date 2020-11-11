import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'

const Footer = () => {
  return(
    <footer className='fadeLeft'>
      <div>
        <Link to="/">
          🏠
        </Link>
      </div>
      <div>
        <Link to="/search">
          📷
        </Link>
      </div>
      <div>
        <Link to="/movies">
          📺
        </Link>
      </div>
      <div>
        <Link to="/article/create/">
          +
        </Link>
      </div>
    </footer>
  )
}

export default Footer;
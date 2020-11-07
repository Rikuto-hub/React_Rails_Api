import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'

const Footer = () => {
  return(
    <footer>
      <div>
        <Link to="/">
          home
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
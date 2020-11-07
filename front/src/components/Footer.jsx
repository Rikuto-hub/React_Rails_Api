import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'

const Footer = () => {
  return(
    <footer>
      <Link to="/article/create/">
        +
      </Link>
    </footer>
  )
}

export default Footer;
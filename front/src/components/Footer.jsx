import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaImages } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { BsPlusCircle } from "react-icons/bs";
import '../styles/Footer.css'

const Footer = () => {
  return(
    <footer className='fadeLeft'>
      <div>
        <Link to="/">
          <AiFillHome />
        </Link>
      </div>
      <div>
        <Link to="/search">
          <FaImages />
        </Link>
      </div>
      <div className='footerRight'>
        <Link to="/movies">
          <ImYoutube />
        </Link>
      </div>
      <div className='footerRight'>
        <Link to="/article/create/">
          <BsPlusCircle />
        </Link>
      </div>
    </footer>
  )
}

export default Footer;
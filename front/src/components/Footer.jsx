import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaImages } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { BsPlusCircleFill } from "react-icons/bs";
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
        <Link to="/image">
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
          <BsPlusCircleFill />
        </Link>
      </div>
    </footer>
  )
}

export default Footer;
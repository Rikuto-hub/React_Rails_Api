import React from 'react';
import { Link } from 'react-router-dom';
import { BsFilePost } from "react-icons/bs";
import { AiFillShop } from "react-icons/ai";

const ProfileTag = ({path}) => {
  return(
    <div className='profileTab'>
      <div className='profileTabLeft'>
        <Link to={path}><BsFilePost className='profileIcon'/></Link>
      </div>
      <div className='profileTabRight'>
        <Link to={path + "/article"}><AiFillShop className='profileIcon'/></Link>
      </div>
    </div>
  )
}

export default ProfileTag;
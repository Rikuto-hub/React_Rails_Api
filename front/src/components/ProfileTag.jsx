import React from 'react';
import { Link } from 'react-router-dom';
import { BsFilePost } from "react-icons/bs";
import { AiFillShop } from "react-icons/ai";

const ProfileTag = () => {
  return(
    <div className='profileTab'>
      <div className='profileTabLeft'>
      <Link to="/profile"><BsFilePost className='profileIcon'/></Link>
      </div>
      <div className='profileTabRight'>
        <Link to="/profile/article"><AiFillShop className='profileIcon'/></Link>
      </div>
    </div>
  )
}

export default ProfileTag;
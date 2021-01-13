import React from 'react';
import { Link } from 'react-router-dom';
import { BsFilePost } from "react-icons/bs";
import { AiFillShop } from "react-icons/ai";

const ProfileTag = () => {
  return(
    <div className='profileTab'>
      <p>
      <Link to="/profile"><BsFilePost className='profileIcon'/></Link>
      </p>
      <p>
        <Link to="/profile/article"><AiFillShop className='profileIcon'/></Link>
      </p>
    </div>
  )
}

export default ProfileTag;
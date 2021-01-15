import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../images/avatar.jpeg';

const ProfileTop = ({profile}) => {
  return(
    <div className='profileTop'>
      {profile ? (
        <img src={profile.avatar} alt='画像がありません' />) : (
        <img src={Avatar} alt="画像がありません"/>
      )}
      {profile ?(
        <p>{profile.name}</p>) : (
        <p>Noname</p>
      )}
      {profile ?(
        <p>{profile.introduction}</p>) : (
        <p>自己紹介</p>
      )}
      <Link to="/profile/edit">
        <button className='profileBtn'>Profileを編集する</button>
      </Link>
    </div>
  )
}

export default ProfileTop;
import React from 'react';
import { Link } from 'react-router-dom';

const ProfileTop = ({profile}) => {
  return(
    <div className='profileTop'>
      {profile && 
        <img src={profile.avatar} alt='画像がありません' />
      }
      {profile && 
        <p>{profile.name}</p>
      }
      {profile && 
        <p>{profile.introduction}</p>
      }
      <Link to="/profile/edit">
        <button className='profileBtn'>Profileを編集する</button>
      </Link>
    </div>
  )
}

export default ProfileTop;
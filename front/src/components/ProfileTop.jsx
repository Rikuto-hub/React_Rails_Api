import React from 'react';

const ProfileTop = ({profile}) => {
  return(
    <div className='profileTop'>
      {profile && <img src={profile.avatar} alt='画像がありません' />}
    </div>
  )
}

export default ProfileTop;
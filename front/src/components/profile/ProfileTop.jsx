import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { Img } from 'react-image';

const ProfileTop = ({profile, props}) => {
  return(
    <div className='profileTop'>
      {profile ? (
        <Img src={profile.avatar}
          loader={<Skeleton width={100} height={100} />}
          unloader={<Skeleton width={100} height={100} />}
        />
      ) : (
        <Skeleton width={100} height={100} />
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
        <button className='profileBtn'>{props}</button>
      </Link>
    </div>
  )
}

export default ProfileTop;
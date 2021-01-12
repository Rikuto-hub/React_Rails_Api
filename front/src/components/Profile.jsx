import React, {useState, useEffect} from 'react';
import json from '../apis/json';
import ProfileTop from './ProfileTop';

const Profile = () => {

  const [profile, setProfile] = useState()

  useEffect(() => {
    const getProfile = async() => {
      try {
        const response = await json.get('/profile')
        setProfile(response.data)
        console.log( response );
      } catch (error) {
        console.log(error)
      }
    }
    getProfile()
  }, [])

  return(
    <>
      <ProfileTop profile = {profile} />
    </>
  )
}

export default Profile;
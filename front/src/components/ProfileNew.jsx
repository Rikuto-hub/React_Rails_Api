import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import json from '../apis/json';
import { AiFillFileImage } from "react-icons/ai";
import '../styles/Profile.css';

const ProfileNew = () => {

  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("宜しくお願いします。");
  const [avatar, setAvatar] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getProfile = async() => {
      try {
        const response = await json.get('/profile')
        setName(response.data.name)
        setIntroduction(response.data.introduction)
        setAvatar(response.data.avatar)
        console.log( response );
      } catch (error) {
        console.log(error)
      }
    }
    getProfile()
  }, [])

  const fileClick = () => {
    document.getElementById('Avatar').click()
  }

  const onHandleSubmit = (event) =>{
    event.preventDefault();
    const onRegistrationSubmit = (name, introduction, avatar) => {
      let data = new FormData();
      data.append("profile[avatar]", avatar);
      data.append("profile[name]", name);
      data.append("profile[introduction]", introduction);
      json
      .put(
        "/profile", data, 
        {
          headers: {"content-type": "multipart/form-data"}
        }
      )
      .then(response => {
        if (response.data.status === 'Registration'){
          history.push("/");
        }
        console.log(response)
        window.alert(response.data.status)
      })
      .catch(error => {
        console.log("Registration error", error);
      });
    }
    onRegistrationSubmit(name, introduction, avatar)
  }

  return(
    <div className='profile'>
      <p>プロフィール</p>
      <form onSubmit={onHandleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(event)=>{setName(event.target.value)}}
          required
        />

        <textarea
          cols="23" rows="3"
          placeholder="introduction"
          value={introduction}
          onChange={(event)=>{setIntroduction(event.target.value)}}
          required
        />

        <input 
          type="file" 
          id="Avatar" 
          onChange={(event)=>{setAvatar(event.target.files[0])}}
        />
        <div className='imageIcon' onClick={fileClick} ><AiFillFileImage /></div>
        <button type="submit">登録</button>
      </form>
    </div>
  )
}

export default ProfileNew;
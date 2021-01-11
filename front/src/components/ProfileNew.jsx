import React, { useState } from 'react';
import json from '../apis/json';
import { AiFillFileImage } from "react-icons/ai";
import '../styles/Profile.css';

const ProfileNew = () => {

  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("宜しくお願いします。");
  const [avatar, setAvatar] = useState("")

  const fileClick = () => {
    document.getElementById('Avatar').click()
  }

  const onHandleSubmit = (event) =>{
    event.preventDefault();
    const onRegistrationSubmit = (name, introduction, avatar) => {
      json
      .put(
        "/profile",
        {
          profile: {
            name: name,
            introduction: introduction,
            avatar: avatar
          },
          headers: {"content-type": "multipart/form-data"}
        }
      )
      .then(response => {
        console.log(response)
        window.alert(response.data.status)
      })
      .catch(error => {
        console.log("error");
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

        <input
          type="text"
          name="introduction"
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
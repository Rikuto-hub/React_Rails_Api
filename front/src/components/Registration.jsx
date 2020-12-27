import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import json from '../apis/json';
import User from './User';
import '../styles/Registration.css';

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const history = useHistory();

  const onHandleSubmit = (event) =>{
    event.preventDefault();
    const onRegistrationSubmit = (name, email, password, password_confirmation) => {
      json
      .post(
        "/users",
        {
          user: {
            name: name,
            email: email,
            password: password,
            password_confirmation: password_confirmation
          }
        }
      )
      .then(response => {
        User.login(email,password)
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
    onRegistrationSubmit(name, email, password, password_confirmation)
  }

  return(
    <div className="registration">
      <p>ユーザー登録</p>
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
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(event)=>{setEmail(event.target.value)}}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event)=>{setPassword(event.target.value)}}
          required
        />

        <input
          type="password"
          name="password_confirmation"
          placeholder="Password confirmation"
          value={password_confirmation}
          onChange={(event)=>{setPassword_confirmation(event.target.value)}}
          required
        />

        <button type="submit">登録</button>
      </form>
      <Link to="/Login">ログイン</Link>
    </div>
  )
}

export default Registration;
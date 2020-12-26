import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import json from '../apis/json';
import User from './User';
import '../styles/Registration.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleSubmit = (event) =>{
    event.preventDefault();
    const onRegistrationSubmit = (email, password) => {
      json
      .post(
        "/session",
        {
          email: email,
          password: password,
        }
      )
      .then(response => {
        User.login(email,password)
        console.log(response)
      })
      .catch(error => {
        console.log("registration error", error);
      });
    }
    onRegistrationSubmit(email, password)
  }

  return(
    <div className="registration">
      <p>ログイン</p>
      <form onSubmit={onHandleSubmit}>

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

        <button type="submit">Register</button>
      </form>
      <Link to="/registration">ユーザー登録</Link>
    </div>
  )
}

export default Login;
import React, { useState } from 'react';
import json from '../apis/json';
import '../styles/Registration.css' 

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

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
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          console.log("registration");
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });
    }
    onRegistrationSubmit(name, email, password, password_confirmation)
  }

  return(
    <div　className="registration">
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

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Registration;